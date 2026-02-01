// ==UserScript==
// @name         Transgender flag for RA badge wall borders
// @namespace    RetroAchievements
// @version      1.0.0
// @description  🏳️‍⚧️
// @author       VeronicaVyxie
// @match        https://retroachievements.org/user/*
// @exclude      https://retroachievements.org/user/*/progress
// @exclude      https://retroachievements.org/user/*/posts
// @exclude      https://retroachievements.org/user/*/games
// @exclude      https://retroachievements.org/user/*/developer/*
// @exclude      https://retroachievements.org/user/*/tickets
// @run-at       document-start
// @icon         https://static.retroachievements.org/assets/images/favicon.webp
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( `
    .goldimage {
        border: 2px solid transparent;
        border-image: url(https://upload.wikimedia.org/wikipedia/commons/b/b0/Transgender_Pride_flag.svg) 1 round;
    }
` );