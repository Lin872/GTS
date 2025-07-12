const urlUpload = 'https://script.google.com/macros/s/AKfycbx3aUjYl3KHIfr-PYvTDSpzfjsmnSGDqmkPhdR8-RU87mg460ll4PiuU7PENIqjWOWhMQ/exec';
const heroItemMap = {
    "": "",
    "item1": "經驗 LV1", "item2": "經驗 LV2", "item3": "經驗 LV3",
    "item4": "重生 LV1", "item5": "重生 LV2", "item6": "重生 LV3",
    "item7": "文明 LV1", "item8": "文明 LV2", "item9": "文明 LV3",
    "item10": "馬頭 LV1", "item11": "馬頭 LV2", "item12": "馬頭 LV3",
    "item13": "步兵 LV1", "item14": "步兵 LV2", "item15": "步兵 LV3",
    "item16": "古羅馬步兵 LV1", "item17": "古羅馬步兵 LV2", "item18": "古羅馬步兵 LV3",
    "item19": "禁衛兵 LV1", "item20": "禁衛兵 LV2", "item21": "禁衛兵 LV3",
    "item22": "帝國兵 LV1", "item23": "帝國兵 LV2", "item24": "帝國兵 LV3",
    "item25": "帝國騎士 LV1", "item26": "帝國騎士 LV2", "item27": "帝國騎士 LV3",
    "item28": "將軍騎士 LV1", "item29": "將軍騎士 LV2", "item30": "將軍騎士 LV3",
    "item31": "方陣兵 LV1", "item32": "方陣兵 LV2", "item33": "方陣兵 LV3",
    "item34": "劍士 LV1", "item35": "劍士 LV2", "item36": "劍士 LV3",
    "item37": "雷法師 LV1", "item38": "雷法師 LV2", "item39": "雷法師 LV3",
    "item40": "德魯伊騎兵 LV1", "item41": "德魯伊騎兵 LV2", "item42": "德魯伊騎兵 LV3",
    "item43": "海頓聖騎 LV1", "item44": "海頓聖騎 LV2", "item45": "海頓聖騎 LV3",
    "item46": "棍棒 LV1", "item47": "棍棒 LV2", "item48": "棍棒 LV3",
    "item49": "矛兵 LV1", "item50": "矛兵 LV2", "item51": "矛兵 LV3",
    "item52": "斧頭兵 LV1", "item53": "斧頭兵 LV2", "item54": "斧頭兵 LV3",
    "item55": "遊俠 LV1", "item56": "遊俠 LV2", "item57": "遊俠 LV3",
    "item58": "條頓騎士 LV1", "item59": "條頓騎士 LV2", "item60": "條頓騎士 LV3",
    "item61": "地圖 LV1", "item62": "地圖 LV2", "item63": "地圖 LV3",
    "item64": "三角旗 LV1", "item65": "三角旗 LV2", "item66": "三角旗 LV3",
    "item67": "軍旗 LV1", "item68": "軍旗 LV2", "item69": "軍旗 LV3",
    "item73": "盜賊 LV1", "item74": "盜賊 LV2", "item75": "盜賊 LV3",
    "item76": "戰盾 LV1", "item77": "戰盾 LV2", "item78": "戰盾 LV3",
    "item79": "賴達號角 LV1", "item80": "賴達號角 LV2", "item81": "賴達號角 LV3",
    "item82": "重生甲 LV1", "item83": "重生甲 LV2", "item84": "重生甲 LV3",
    "item85": "鱗甲 LV1", "item86": "鱗甲 LV2", "item87": "鱗甲 LV3",
    "item88": "護心 LV1", "item89": "護心 LV2", "item90": "護心 LV3",
    "item91": "複合 LV1", "item92": "複合 LV2", "item93": "複合 LV3",
    "item94": "重生鞋 LV1", "item95": "重生鞋 LV2", "item96": "重生鞋 LV3",
    "item97": "傭兵鞋 LV1", "item98": "傭兵鞋 LV2", "item99": "傭兵鞋 LV3",
    "item100": "馬刺 LV1", "item101": "馬刺 LV2", "item102": "馬刺 LV3",
    "item103": "馬 LV1", "item104": "馬 LV2", "item105": "馬 LV3",
    "item114": "奴隸民兵 LV1", "item115": "奴隸民兵 LV2", "item116": "奴隸民兵 LV3",
    "item117": "看守人艾什 LV1", "item118": "看守人艾什 LV2", "item119": "看守人艾什 LV3",
    "item120": "斧刀勇士 LV1", "item121": "斧刀勇士 LV2", "item122": "斧刀勇士 LV3",
    "item123": "守衛安赫 LV1", "item124": "守衛安赫 LV2", "item125": "守衛安赫 LV3",
    "item126": "瑞舍夫戰車 LV1", "item127": "瑞舍夫戰車 LV2", "item128": "瑞舍夫戰車 LV3",
    "item129": "僱傭兵 LV1", "item130": "僱傭兵 LV2", "item131": "僱傭兵 LV3",
    "item132": "弓箭手 LV1", "item133": "弓箭手 LV2", "item134": "弓箭手 LV3",
    "item135": "草原騎士 LV1", "item136": "草原騎士 LV2", "item137": "草原騎士 LV3",
    "item138": "神射手 LV1", "item139": "神射手 LV2", "item140": "神射手 LV3",
    "item141": "掠奪者 LV1", "item142": "掠奪者 LV2", "item143": "掠奪者 LV3"
};

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

function getItemValue(key) {
  return heroItemMap.hasOwnProperty(key) ? heroItemMap[key] : key;
}
