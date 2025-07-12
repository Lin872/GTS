const urlUpload = 'https://script.google.com/macros/s/AKfycbx3aUjYl3KHIfr-PYvTDSpzfjsmnSGDqmkPhdR8-RU87mg460ll4PiuU7PENIqjWOWhMQ/exec';

let $playerProfile = $('#playerProfile');
function showButtonProfileUpload() {
    let uploadTime = getUTC8Time();
    let $divUpload = $('<div>');
    $divUpload.css({
        'position': 'absolute',
        'top': '0',
        'z-index': '99'
    });
    let $lblUploadStatus = $('<label>');
    $lblUploadStatus.css({
        'color': 'green',
        'margin-left': '6px',
    });
    let $btnUpload = $('<button>');
    $btnUpload.text('上傳');
    $btnUpload.css({
        'padding': '6px 18px',
        'background': 'lightgreen',
        'border-radius': '6px',
        'border': '2px solid #000'
    });
    $btnUpload.click (function() {
        $(this).prop('disabled', true);
        $(this).text('上傳中...');
        let villages = [];
        
        $('.villages tbody tr').each(function(idx, itm) {
            let villageName = $(itm).find('.name a').first().text();
            if (villageName.length === 0) { // Travian Resource bar plus
                villageName = $(itm).find('td').first().find('a').text();
            }
            let oasesCount = $(itm).find('.oases i').length;
            let inhabitants = parseInt($(itm).find('.inhabitants').first().text());
            let coordinateX = parseInt($(itm).find('.coordinateX').first().text().replace('−', '-').replaceAll(/[^-\d]/g, ''));
            let coordinateY = parseInt($(itm).find('.coordinateY').first().text().replace('−', '-').replaceAll(/[^-\d]/g, ''));
            villages.push({ 'villageName': villageName, 'oasesCount': oasesCount, 'inhabitants': inhabitants, 'x': coordinateX, 'y': coordinateY });
        });
        
        let profile = {
            'uploadTime': uploadTime, 
            'playerId': window.location.href.match(/profile\/(\d+)/)[1],
            'playerName': $playerProfile.parent().find('.titleInHeader').text(),
            'population': $playerProfile.find('th:contains("Population"), th:contains("人口")').parent().find('.value').text().trim().match(/\d+/)[0],
            'attacker': $playerProfile.find('th:contains("Attacker"), th:contains("攻擊者")').parent().find('.value').text().trim().match(/\d+/)[0],
            'defender': $playerProfile.find('th:contains("Defender"), th:contains("防禦者")').parent().find('.value').text().trim().match(/\d+/)[0],
            'heroExperience': $playerProfile.find('th:contains("Hero level"), th:contains("英雄等級")').parent().find('.value').text().trim().match(/\d+/)[0],
            'heroHelmet': $playerProfile.find('.heroItem.helmet .item').attr('class').replace('item ', ''),
            'heroBody': $playerProfile.find('.heroItem.body .item').attr('class').replace('item ', ''),
            'heroShoes': $playerProfile.find('.heroItem.shoes .item').attr('class').replace('item ', ''),
            'heroLeftHand': $playerProfile.find('.heroItem.leftHand .item').attr('class').replace('item ', ''),
            'heroRightHand': $playerProfile.find('.heroItem.rightHand .item').attr('class').replace('item ', ''),
            'heroHorse': $playerProfile.find('.heroItem.horse .item').attr('class').replace('item ', ''),
            'villages': villages
        };
        
        fetch(urlUpload, {
            method: 'POST',
            body: JSON.stringify({ 'aid': 'Profile', 'data': profile }),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            if (data.message == 'OK,OK') {
                $(this).text('上傳完成');
            } else {
                $(this).text('上傳失敗');
                $(this).css('color', 'red');
                $(this).prop('disabled', false);
            }
        }).catch(err => {
            $lblUploadStatus.text('發生錯誤：' + err);
        });
    });
    $divUpload.append($btnUpload);
    $divUpload.append($lblUploadStatus);
    $divUpload.appendTo($("#contentOuterContainer"));
}
if ($playerProfile.length) {
    showButtonProfileUpload();
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

