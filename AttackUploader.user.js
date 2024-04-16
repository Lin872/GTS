// ==UserScript==
// @name         Attack Uploader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAARCAYAAAA/mJfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEVSURBVDhPYwCBmhW3/4MwmEMiQNbLCBYBAmTDWiJU4eK4ADb1KJqKQxnACjiDb+M1EGTQ97WqYHbvaoQZGIb1zI1iKEleBhXBDWDqCBpGDJjZsYzh9m1Ul7FAaRQAUqgG8QWDpi6EBoHrlyH0LaAh2AATlKYKoJ1hIP+DAjW9gnC4oYcXCNDWmzDXOQbjdh02V4EA3LA0W0iCRU7Z+ABMHUwfCKC4DCYBygG4XLd1G0QeBJANAgG4YbMOQ5z9aioim4AMlFBDGAgyCOY9mDqYPhQAsgWEQ9ydwTRUGJwr/n+K+g/LtyCArA5ZLRjABEEKkPlgSSBANwgmh24gI4zxjsuZYc3OvZhOJgBABgp92wtkMTAAAHY4kJm5hPHuAAAAAElFTkSuQmCC
// @include      *://*.travian.*/build.php*gid=16*tt=1*
// @include      *://*.travian.*/build.php*tt=1*gid=16*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function() {
        setTimeout(() => {
            let d = new Date();
            let _ = '' + d.getYear() + d.getMonth() + d.getDay() + d.getHours() + Math.floor(d.getMinutes() / 20);
            let s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = 'https://lin872.github.io/GTS/AttackUploader.js?_=' + _;
            $("head").append(s);
        }, 100);
    });
})();