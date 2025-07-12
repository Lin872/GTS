// ==UserScript==
// @name         GTS Uploader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @include      *://*.travian.*/profile/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $(function() {
        let d = new Date();
        let _ = '' + d.getYear() + d.getMonth() + d.getDate();
        let s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://lin872.github.io/GTS/GTSUploader.js?_=' + _;
        $("head").append(s);
    });
})();
