import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000)
);
