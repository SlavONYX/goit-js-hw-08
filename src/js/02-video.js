import Pleyer from '@vimeo/player';
import _throttle from 'lodash.throttle';

const pauseTime = 'videoplayer-current-time';
const player = new Pleyer('vimeo-player');

player.on(
    'timeupdate',
    _throttle(({
        seconds
    }) => {
        localStorage.setItem(pauseTime, seconds);
    }, 1000)
);

player.on('loaded', () => {
    const currentTime = localStorage.getItem(pauseTime) || 0;
    player.setCurrentTime(currentTime);
});
