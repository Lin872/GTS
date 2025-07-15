const urlUpload = 'https://script.google.com/macros/s/AKfycbx3aUjYl3KHIfr-PYvTDSpzfjsmnSGDqmkPhdR8-RU87mg460ll4PiuU7PENIqjWOWhMQ/exec';
const heroItemMap = {
    "": "",
    "item1": "覺悟之盔",
    "item2": "啟蒙之盔",
    "item3": "信心之盔",
    "item4": "重生之盔",
    "item5": "健康之盔",
    "item6": "回復之盔",
    "item7": "鬥劍者之盔",
    "item8": "護民官之盔",
    "item9": "執政官之盔",
    "item10": "騎師之盔",
    "item11": "騎士盔",
    "item12": "重騎兵鋼盔",
    "item13": "僱傭兵之盔",
    "item14": "戰士之盔",
    "item15": "統治者之盔",
    "item16": "退伍軍人短劍",
    "item17": "退伍軍人之劍",
    "item18": "退伍軍人長劍",
    "item19": "御衛隊短劍",
    "item20": "御衛隊之劍",
    "item21": "御衛隊長劍",
    "item22": "帝國短劍",
    "item23": "帝國之劍",
    "item24": "帝國長劍",
    "item25": "凱旋短劍",
    "item26": "凱旋之劍",
    "item27": "凱旋長劍",
    "item28": "將軍短矛",
    "item29": "將軍配劍",
    "item30": "將軍長矛",
    "item31": "方陣之矛",
    "item32": "方陣之斧",
    "item33": "方陣長槍",
    "item34": "劍士短劍",
    "item35": "劍士配劍",
    "item36": "劍士長劍",
    "item37": "雷神短弓",
    "item38": "雷神之弓",
    "item39": "雷神長弓",
    "item40": "德魯伊手杖",
    "item41": "德魯伊之杖",
    "item42": "德魯伊戰杖",
    "item43": "海頓短矛",
    "item44": "海頓之矛",
    "item45": "海頓長矛",
    "item46": "木棍棒",
    "item47": "戰鬥棒",
    "item48": "棍棒兵的晨星之棒",
    "item49": "條頓長矛",
    "item50": "條頓長槍",
    "item51": "條頓神戟",
    "item52": "條頓鋼斧",
    "item53": "條頓戰斧",
    "item54": "條頓神斧",
    "item55": "遊俠輕型錘",
    "item56": "遊俠戰錘",
    "item57": "遊俠重型錘",
    "item58": "條頓之劍",
    "item59": "條頓長劍",
    "item60": "條頓聖劍",
    "item61": "小型地圖",
    "item62": "地圖",
    "item63": "大地圖",
    "item64": "三角旗",
    "item65": "烈紅三角旗",
    "item66": "聖三角旗",
    "item67": "軍旗",
    "item68": "將軍軍旗",
    "item69": "皇旗",
    "item70": "小望遠鏡",
    "item71": "小望遠鏡",
    "item72": "大型望遠鏡",
    "item73": "盜賊之手",
    "item74": "盜賊徽章",
    "item75": "盜賊金章",
    "item76": "小型戰盾",
    "item77": "鋼盾",
    "item78": "大型戰盾",
    "item79": "小型賴達戰號",
    "item80": "賴達戰號",
    "item81": "巨型賴達戰號",
    "item82": "重生盔甲",
    "item83": "健康盔甲",
    "item84": "治癒盔甲",
    "item85": "輕型鱗甲",
    "item86": "鱗甲",
    "item87": "重型鱗甲",
    "item88": "護心輕甲",
    "item89": "護心戰甲",
    "item90": "護心重甲",
    "item91": "複合輕甲",
    "item92": "複合戰甲",
    "item93": "複合重甲",
    "item94": "重生之靴",
    "item95": "健康之靴",
    "item96": "回復之靴",
    "item97": "僱傭兵之靴",
    "item98": "戰士之靴",
    "item99": "射手之靴",
    "item100": "小馬刺",
    "item101": "馬刺",
    "item102": "鋼馬刺",
    "item103": "騸馬",
    "item104": "純種馬",
    "item105": "戰馬",
    "item106": "藥劑",
    "item107": "書卷",
    "item108": "筒子",
    "item109": "法典",
    "item110": "魔法書",
    "item111": "藝術品",
    "item112": "小繃帶",
    "item113": "繃帶",
    "item114": "獸籠",
    "item115": "奴隸民兵棒",
    "item116": "奴隸民兵權杖",
    "item117": "奴隸民兵晨星",
    "item118": "看守人艾什的短斧",
    "item119": "看守人艾什的斧頭",
    "item120": "看守人艾什的戰斧",
    "item121": "勇士的短斧刀",
    "item122": "勇士的斧刀",
    "item123": "勇士的長斧刀",
    "item124": "守衛安赫之矛",
    "item125": "守衛安赫的長槍",
    "item126": "守衛安赫的標槍",
    "item127": "瑞舍夫戰車的短弓",
    "item128": "瑞舍夫戰車的弓箭",
    "item129": "瑞舍夫戰車的長弓",
    "item130": "僱傭兵的短斧",
    "item131": "僱傭兵的斧頭",
    "item132": "僱傭兵的戰斧",
    "item133": "弓箭手的複合短弓",
    "item134": "弓箭手的複合弓",
    "item135": "弓箭手的複合長弓",
    "item136": "草原騎士的短羅馬劍",
    "item137": "草原騎士的羅馬劍",
    "item138": "草原騎士的長羅馬劍",
    "item139": "神射手的複合短弓",
    "item140": "神射手的複合弓",
    "item141": "神射手的複合長弓",
    "item142": "掠奪者的短羅馬劍",
    "item143": "掠奪者的羅馬劍",
    "item144": "掠奪者的長羅馬劍",
    "item145": "木材包",
    "item146": "磚塊",
    "item147": "鋼鐵",
    "item148": "穀物包",
    "item149": "裝甲步兵之矛",
    "item150": "裝甲步兵之尖槍",
    "item151": "裝甲步兵之長槍",
    "item152": "盾牌手之矛",
    "item153": "盾牌手之尖槍",
    "item154": "盾牌手之長槍",
    "item155": "雙鋼泰瑞恩之短劍",
    "item156": "雙鋼泰瑞恩之劍",
    "item157": "雙鋼泰瑞恩之長劍",
    "item158": "爾必達騎士之短劍",
    "item159": "爾必達騎士之劍",
    "item160": "爾必達騎士之長劍",
    "item161": "科林斯破壞者之矛",
    "item162": "科林斯破壞者之尖槍",
    "item163": "科林斯破壞者之長槍",
    "item164": "奴隸短斧",
    "item165": "奴隸的斧頭",
    "item166": "奴隸的戰斧",
    "item167": "鋼盾少女短劍",
    "item168": "鋼盾少女之劍",
    "item169": "鋼盾少女長劍",
    "item170": "狂戰士短斧",
    "item171": "狂戰士的斧頭",
    "item172": "狂戰士的戰斧",
    "item173": "禁衛軍騎士隊之矛",
    "item174": "禁衛軍騎士隊戰矛",
    "item175": "禁衛軍騎士隊長槍",
    "item176": "女武神的祝福短劍",
    "item177": "女武神的祝福之劍",
    "item178": "女武神的祝福長劍",
    "item179": "材料"
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
            'heroHelmet': getItemValue($playerProfile.find('.heroItem.helmet .item').attr('class').replace('item ', '')),
            'heroBody': getItemValue($playerProfile.find('.heroItem.body .item').attr('class').replace('item ', '')),
            'heroShoes': getItemValue($playerProfile.find('.heroItem.shoes .item').attr('class').replace('item ', '')),
            'heroLeftHand': getItemValue($playerProfile.find('.heroItem.leftHand .item').attr('class').replace('item ', '')),
            'heroRightHand': getItemValue($playerProfile.find('.heroItem.rightHand .item').attr('class').replace('item ', '')),
            'heroHorse': getItemValue($playerProfile.find('.heroItem.horse .item').attr('class').replace('item ', '')),
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
