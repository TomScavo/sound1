
var audio = document.getElementById('audio');

var playInfo = document.getElementById('info');

var isPlay = false;

audio.addEventListener('waiting', () =>{ playInfo.innerText = 'loading'});
audio.addEventListener('canplaythrough', () =>{ playInfo.innerText = ''});
var button = document.createElement('button');
button.style = "background: #333; width: 100px; height: 50px; left: 50%; top: 50%; color: #fff;";
button.innerText = '播放';
button.addEventListener('click', () => {
    isPlay ? audio.pause() : audio.play()
    button.innerText = isPlay ? '播放' : '暂停';
        isPlay = !isPlay
    }
)

var body = document.getElementsByTagName('body');


body[0].append(button);