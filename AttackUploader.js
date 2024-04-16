const urlUpload = 'https://script.google.com/macros/s/AKfycbwKSNBGpOMyk8Wvk3hO8Bqvs9bLwqBGritqhWgTun2b17YBr7z8r6KgW8WmlmL2-ieomQ/exec';

function showButtonUpload() {
	let $divUpload = $('<div>');
	$divUpload.css({
		'position': 'absolute',
		'top': '0',
	});
	let $lblUploadStatus = $('<label>');
	$lblUploadStatus.css({
		'color': 'red',
		'margin-left': '6px',
	});
	let $btnUpload = $('<button>');
	$btnUpload.text('上傳攻波');
	$btnUpload.css({
		'padding': '6px 18px',
		'background': '#FF9A9A',
		'border-radius': '6px',
		'border': '2px solid #000'
	});
	$btnUpload.click (function() {
		$(this).prop('disabled', true);
		$(this).text('上傳中...');
		$lblUploadStatus.text('');
		let $attacks = $('.troop_details.inAttack, .troop_details.inRaid');
		let timezoneOffset = 0;
		let timezoneMatch = $('#servertime').next('script').text().match(/Travian\.Game\.timezoneOffsetToUTC\s*=\s*(-?\d+);/);// UTC+0 時沒有此行
		if (timezoneMatch) {
			timezoneOffset = -parseInt(timezoneMatch[1]) / 60 / 60; // hour
		}
		let uploadTime = getUTC8Time();
		let toPlayer = $('.playerName').first().text();
		let toVillage = $('#villageName .villageInput').first().val();
		let toZ = parseInt($attacks.first().find('.troopHeadline a:not(.markAttack)').first().attr('href').match(/d=(\d+)/)[1]);
		let [toX, toY] = cvtCoordinateFromZ(toZ);
		let attacks = [];
		$attacks.each(function(){
			let attackType = $(this).hasClass('inAttack') ? 'Attack' : 'Raid';
			let attackId = parseInt($(this).find('.markAttack').first().attr('onclick').match(/\((\d+)\)/)[1]);
			let fromPlayer = $(this).find('.troopHeadline a:not(.markAttack)').first().text().match(/(.*?) /)[1];
			let fromVillage = $(this).find('.role a').first().text().trim();
			let fromX = parseInt($(this).find('.coords .coordinateX').first().text().replace('−', '-').replaceAll(/[^-\d]/g, ''));
			let fromY = parseInt($(this).find('.coords .coordinateY').first().text().replace('−', '-').replaceAll(/[^-\d]/g, ''));
			let fromZ = parseInt($(this).find('.role a').first().attr('href').match(/d=(\d+)/)[1]);
			let troops = $(this).find('.units td.unit').map((idx, itm) => $(itm).text().trim()).get();
			let countdown = $(this).find('.infos .in .timer').first().text();
			let arrivalTime = $(this).find('.infos .at span').first().text().match(/(\d{1,2}:\d{1,2}:\d{1,2})/)[1];

			attacks.push({
				'attackId': attackId,
				'uploadTime': uploadTime,
				'attackType': attackType,
				'fromPlayer': fromPlayer,
				'fromVillage': fromVillage,
				'fromX': fromX,
				'fromY': fromY,
				'fromZ': fromZ,
				'troops': troops,
				'toPlayer': toPlayer,
				'toVillage': toVillage,
				'toX': toX,
				'toY': toY,
				'toZ': toZ,
				'countdown': countdown,
				'arrivalTime': arrivalTime, 
				'timezoneOffset': timezoneOffset
			});
		});

		if (attacks.length === 0) {
			$lblUploadStatus.text('沒有可以上傳的攻擊！');
			$(this).prop('disabled', false);
			$(this).text('上傳攻波');
		} else {
			fetch(urlUpload, {
				method: 'POST',
				body: JSON.stringify({ 'aid': 'Attack', 'data': attacks }),
				headers: {
					'Content-Type': 'text/plain;charset=utf-8',
				}
			}).then(response => {
				return response.json();
			}).then(data => {
				$lblUploadStatus.text(data.message);
			}).catch(err => {
				$lblUploadStatus.text('發生錯誤：' + err);
			}).finally(() => {
				$(this).prop('disabled', false);
				$(this).text('上傳攻波');
			});
		}
	});
	$divUpload.append($btnUpload);
	$divUpload.append($lblUploadStatus);
	$divUpload.appendTo($('.rallyPointOverviewContainer').first());
}

// 將座標 ID 轉為 X 及 Y 座標
function cvtCoordinateFromZ(z) {
	let x = parseInt(((z - 1) % 401) - 200);
	let y = parseInt(200 - Math.floor((z - 1) / 401));
	return [x, y];
}

// 取得 UTC+8 時間
function getUTC8Time() {
	let now = new Date();
	let offset = now.getTimezoneOffset() / 60;
	let utc8 = now.setHours(now.getHours() + (offset + 8));
	let now8 = new Date(utc8);
	return `${now8.getYear()+1900}-${(now8.getMonth()+1).toString().padStart(2, '0')}-${now8.getDate()} ${now8.getHours().toString().padStart(2, '0')}:${now8.getMinutes().toString().padStart(2, '0')}:${now8.getSeconds().toString().padStart(2, '0')}`;
}

let $troopDetail = $('.troop_details');
if ($troopDetail.hasClass('inAttack') || $troopDetail.hasClass('inRaid')) {
	showButtonUpload();
}