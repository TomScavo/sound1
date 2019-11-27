
var audio = new Audio('https://cdn.musicbed.com/video/authenticated/s--I0LUjcCx--/af_48000,br_96k,du_30/ac_vorbis/v1554920665/production/songs/24242.ogg');

var playInfo = document.getElementById('info');

var isPlay = false;

audio.addEventListener('waiting', () =>{ playInfo.innerText = 'loading'});
audio.addEventListener('playing', () =>{ playInfo.innerText = ''});
var button = document.createElement('div');
button.style = "background: #333; width: 100px; height: 50px; left: 50%; top: 50%; color: #fff;";
button.innerText = '播放';
button.addEventListener('click', () => {
        button.innerText = isPlay ? '暂停' : '播放';
        isPlay ? audio.pause() : audio.play()
        isPlay = !isPlay
    }
)

var body = document.getElementsByTagName('body');


body[0].append(button);