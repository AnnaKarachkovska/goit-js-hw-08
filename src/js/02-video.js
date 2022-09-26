import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let currentTime = 0;

player.on('timeupdate', throttle(saveToLs, 1000));

function saveToLs(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
};

currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime);