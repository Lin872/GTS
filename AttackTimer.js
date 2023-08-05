// ==UserScript==
// @name         GTS Attack Timer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Lin872 (based on LSN attack timer by HobeXD)
// @include      *://*.travian.*
// @include      *://*/*.travian.*
// @exclude      *://*.travian*.*/hilfe.php*
// @exclude      *://*.travian*.*/log*.php*
// @exclude      *://*.travian*.*/index.php*
// @exclude      *://*.travian*.*/anleitung.php*
// @exclude      *://*.travian*.*/impressum.php*
// @exclude      *://*.travian*.*/anmelden.php*
// @exclude      *://*.travian*.*/gutscheine.php*
// @exclude      *://*.travian*.*/spielregeln.php*
// @exclude      *://*.travian*.*/links.php*
// @exclude      *://*.travian*.*/geschichte.php*
// @exclude      *://*.travian*.*/tutorial.php*
// @exclude      *://*.travian*.*/manual.php*
// @exclude      *://*.travian*.*/ajax.php*
// @exclude      *://*.travian*.*/ad/*
// @exclude      *://*.travian*.*/chat/*
// @exclude      *://forum.travian*.*
// @exclude      *://board.travian*.*
// @exclude      *://shop.travian*.*
// @exclude      *://*.travian*.*/activate.php*
// @exclude      *://*.travian*.*/support.php*
// @exclude      *://help.travian*.*
// @exclude      *://*.answers.travian*.*
// @exclude      *.css
// @exclude      *.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAQCAYAAAD0xERiAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG4SURBVDhPjZI9LARREMf/b+VcXCIRoaHwFZXGR0gkmotEcwrUSp1ERK9TK4hOobhEhwKFRkFFFCI0ChQadxESxNl4z8y893b3nMMvuczc7O7vzcwu/ouegzH5lHF/BbNKtUOU1f5ERPSQvo0fFNE3+a+YJRJ4EUWpbeZE8lNHysUy5MSaMeDzAGYkBJZtXU3ayJgOIGiH4kOCFeupkLGo9NCNdN+VPFBNpNZcXiKpkwVScbBI14VIZV+BgXUrWohFLPEHsAT9Oal7IpmM1kojdbYh6FoEjmas6Mbd4FB5K0926olk3JFusCLzOAPT4y4w9ylgn6Ib2WOG96CG6JpDZNIVd9Q0IUXVSCN6WHQe2rGoU/RJ1e7tOBYxZTvTzVMui3kvpWFmE2Nl6McHEOYkhJoOo5doZbyrTL+k30mPvsjepJNLKrxR7j4XfosylSPqLPgoSNS13RKTo4qIhY+9skvOeVcsSnYmif+adQvN0jbPKcmvJUY8XwBPZ0DxGGbbypIiRjpTWffRne4iKGxxGnUo8W4DurgDU19dxJQVpEO3XD04Ho3uu2GqiZiKYlIo0Mv5rZsY4AtRtsUoZ2Le7AAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var debug = false;
    var timeManager = new _TimeManager();
    var lblStatus = document.createElement("label");
    var btnRallyPointConfirm = $("#troopSendForm .rallyPointConfirm")[0]; // 網頁部隊送出按鈕

    function init() {
        // 到達時間
        let txtTime = document.createElement("input");
        txtTime.setAttribute("type", "text");
        txtTime.style.position = "absolute";
        txtTime.style.bottom = "30px";
        txtTime.style.left = "10px";
        txtTime.style.width = "165px";
        txtTime.style.zIndex = 99;
        txtTime.maxLength = 21;
        txtTime.placeholder = "yyyy/mm/dd hh:mm:ss.f";

        // 設定按鈕
        let btnSet = document.createElement("button");
        btnSet.innerHTML = "設定到達時間";
        btnSet.style.position = "absolute";
        btnSet.style.bottom = "30px";
        btnSet.style.left = "185px";
        btnSet.style.width = 330;
        btnSet.style.height = 300;
        btnSet.style.padding = "3px";
        btnSet.style.background = "#f0f0f0";
        btnSet.style.display = "block";
        btnSet.style.zIndex = 99;
        btnSet.addEventListener("click", () => btnSetClick(btnSet, txtTime.value));

        // 訊息文字
        lblStatus.style.position = 'absolute';
        lblStatus.style.bottom = "10px";
        lblStatus.style.left = "10px";
        lblStatus.style.padding = "2px";
        lblStatus.style.zIndex = 99;
        lblStatus.style.background = "#FFF";

        // 新增樣本
        let btnAddSample = document.createElement("button");
        btnAddSample.innerHTML = "新增樣本";
        btnAddSample.style.position = "absolute";
        btnAddSample.style.bottom = "20px";
        btnAddSample.style.left = "10px";
        btnAddSample.style.width = 300;
        btnAddSample.style.height = 200;
        btnAddSample.style.padding = "6px";
        btnAddSample.style.background = "#f0f0f0";
        btnAddSample.style.display = "block";
        btnAddSample.style.zIndex = 99;
        btnAddSample.addEventListener("click", () => {
            btnAddSample.disabled = true;
            timeManager.AddSample();
            let samples = "";
            timeManager.GetSample().forEach((e) => {
                samples += "<br>" + formatDate(new Date(e.timeStart)) + ": " + e.timeDiff;
            });
            setStatus(`<br>本次取樣延遲：${timeManager.LastSample.timeDiff}(ms)<br>樣本數：${timeManager.SampleCount}、平均延遲：${timeManager.AverageTime}(ms)${samples}`);
        });

        // 清除樣本
        let btnClearSample = document.createElement("button");
        btnClearSample.innerHTML = "清除樣本";
        btnClearSample.style.position = "absolute";
        btnClearSample.style.bottom = "20px";
        btnClearSample.style.left = "80px";
        btnClearSample.style.width = 300;
        btnClearSample.style.height = 200;
        btnClearSample.style.padding = "6px";
        btnClearSample.style.background = "#f0f0f0";
        btnClearSample.style.display = "block";
        btnClearSample.style.zIndex = 99;
        btnClearSample.addEventListener("click", () => {
            btnClearSample.disabled = true;
            timeManager.ClearSample();
            setStatus("已清空樣本");
        });

        let pattern = /:\/\/.*\.travian\..*\/build.php.*(gid=16.*tt=2|tt=2.*gid=16).*/; // 集結點-派遣部隊
        if (pattern.test(window.location.href)) {
            let body = $(".contentPage")[0];
            if (body !== undefined) {
                if (btnRallyPointConfirm !== undefined) {
                    body.appendChild(btnSet);
                    body.appendChild(txtTime);
                }
                body.appendChild(lblStatus);
            }
        } else {
            let body = $("#topBar")[0];
            if (body !== undefined) {
                lblStatus.style.top = "103px";
                lblStatus.style.bottom = "";
                body.appendChild(btnAddSample);
                body.appendChild(btnClearSample);
                body.appendChild(lblStatus);
            }
        }
        setStatus();
    }

    // button click event
    function btnSetClick(sender, value) {
        let arrivalTime = new Date(value); // value: 到達時間
        if (isNaN(arrivalTime)) {
            setStatus("輸入時間格式不正確", "Red");
            return;
        }
        let travelTime = getTravelTime();
        if (travelTime === undefined) {
            setStatus("無法取得部隊時間", "Red");
            return;
        }
        let timeNow = new Date();
        let countdown = arrivalTime - timeNow - timeManager.AverageTime - timeStringToMilliseconds(travelTime);
        if (countdown <= 50) {
            setStatus("時間異常或來不及了", "Red");
        } else {
            setTimeout(() => btnRallyPointConfirm.click(), countdown);
            sender.disabled = true;
            setStatus(`已設定完成。行軍時間：${travelTime}、預計發兵時間：${formatDate(new Date(timeNow.getTime() + countdown))}`, "Green");
        }
        if (debug) {
            console.log(`Arrival: ${arrivalTime}, Now: ${timeNow}, countdown: ${countdown}, averageTime: ${timeManager.AverageTime}, travelTime: ${travelTime}, send: ${timeNow + countdown}`);
        }
    }

    // 取得行軍時間(hh:mm:ss)
    function getTravelTime() {
        let $travelTime = $("#troopSendForm #in");
        if ($travelTime !== undefined) {
            let travelTimeHtml = $travelTime.html();
            let regex = /(\d{1,2}:\d{2}:\d{2})/;
            let result = travelTimeHtml.match(regex);
            if (result && result.length > 0) {
                return result[0];
            }
        }
        return undefined;
    }

    // Date To String
    function formatDate(date) {
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let dd = String(date.getDate()).padStart(2, '0');
        let hh = String(date.getHours()).padStart(2, '0');
        let mi = String(date.getMinutes()).padStart(2, '0');
        let ss = String(date.getSeconds()).padStart(2, '0');
        return `${mm}/${dd} ${hh}:${mi}:${ss}`;
    }

    // 時間字串(HH:MM:SS)轉毫秒
    function timeStringToMilliseconds(timeString) {
        let timeParts = timeString.split(":");
        let hours = parseInt(timeParts[0]);
        let minutes = parseInt(timeParts[1]);
        let seconds = parseInt(timeParts[2]);
        let totalMilliseconds = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
        return totalMilliseconds;
    }

    function setStatus(content, color) {
        if (content !== undefined) {
            lblStatus.innerHTML = `${formatDate(new Date())} ${content}`;
        } else {
            lblStatus.innerHTML = `${formatDate(new Date())} 樣本數：${timeManager.SampleCount}、平均延遲：${timeManager.AverageTime}(ms)`;
        }
        if (color !== undefined) {
            lblStatus.style.color = color;
        } else {
            lblStatus.style.color = "Black";
        }
    }

    // 遊戲延遲
    function _TimeManager() {
        this.MaxSampleSize = 10;  // 樣本保留數
        this.SampleKeepTime = 20; // 樣本保留時間(分鐘)
        this.SampleCount = 0;     // 目前樣本數
        this.AverageTime = 0;     // 平均延遲時間(毫秒)
        this.LastSample = null;   // 最後樣本
        let items = JSON.parse(localStorage.getItem('oTiming')) || [];
        if (items.length > 0) {
            this.SampleCount = items.length;
            this.AverageTime = parseInt(items.reduce((total, item) => total + item.timeDiff, 0) / items.length);
        }
    }
    // 新增樣本到 Local Storage。
    _TimeManager.prototype.AddSample = function () {
        let timeStart = new Date(window.performance.timing.requestStart);
        let timeServer = new Date(parseInt($("#servertime span").attr("value")) * 1000); // 遊戲左上時間
        let timeDiff = timeServer - timeStart;
        let items = JSON.parse(localStorage.getItem('oTiming')) || [];
        items = items.filter(item => new Date(item.timeStart) >= new Date() - this.SampleKeepTime * 60 * 1000);
        if (items.length >= this.MaxSampleSize) {
            items.shift();
        }
        let sample = { "timeStart": timeStart, "timeServer": timeServer, "timeDiff": timeDiff };
        items.push(sample);
        this.LastSample = sample;
        localStorage.setItem('oTiming', JSON.stringify(items));
        this.SampleCount = items.length;
        this.AverageTime = parseInt(items.reduce((total, item) => total + item.timeDiff, 0) / items.length);
        if (debug) {
            console.log(`lastTimeDiff: ${timeDiff}, sampleCount: ${this.SampleCount}, averageTime: ${this.AverageTime}`);
        }
    }
    // 清除所有樣本
    _TimeManager.prototype.ClearSample = function () {
        localStorage.removeItem("oTiming");
        this.SampleCount = 0;
        this.AverageTime = 0;
    }
    _TimeManager.prototype.GetSample = function () {
        let items = JSON.parse(localStorage.getItem('oTiming')) || [];
        return items;
    }

    init();
})();