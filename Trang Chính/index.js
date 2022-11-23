document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('body').addEventListener('click', e => {
        document.querySelectorAll('.dropdown.open').forEach(item => {
            item.classList.remove('open');
        });
    });

    document.querySelectorAll('.dropdown').forEach(item => {
        
        item.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
          
            const dropdown = e.target.closest('.dropdown');
            if (!dropdown) return;
            if (dropdown.classList.contains('open')) {
                dropdown.classList.remove('open');
            } else {
                dropdown.classList.add('open');
            }
        });
    });

  
    document.querySelectorAll('.main-menu .menu--item').forEach(item => {
       
        item.addEventListener('click', e => {
            e.preventDefault();
            const menu_item = e.target.closest('.menu--item');
            if (!menu_item) return;
            
            document.querySelectorAll('.main-menu .menu--item').forEach(item => {
                item.classList.remove('active');
            });
           
            menu_item.classList.add('active');
        });
    });


    const headerHeight = document.querySelector('.header').offsetHeight;
    const opaqueThreshold = (headerHeight * 2);
    const _main_el = document.querySelector('main');
    _main_el.addEventListener('scroll', (e) => {

        const scrollTop = _main_el.scrollTop;
        const _header_bg_el = document.querySelector('.header--bg');
       
        let opacity = scrollTop / opaqueThreshold;
        if (opacity > 1) opacity = 1;
        _header_bg_el.style.opacity = opacity;
    });

    const _input_els = document.querySelectorAll('.input-group.can-delete input');
    _input_els.forEach(_el => {
        _el.addEventListener('input', (e) => {
            const value = _el.value;
            const _clear_icon_el = _el.parentNode.querySelector('.clear--search');
            console.log(_clear_icon_el);
            if (value.length == 0) {
                _clear_icon_el.style.zIndex = '0';
            } else {
                _clear_icon_el.style.zIndex = '2';
            }
        });
    });

    const _clear_icon_els = document.querySelectorAll('.clear--search');
    _clear_icon_els.forEach(_el => {
        _el.addEventListener('click', (e) => {
            const _clear_icon_el = e.target;
            const _input_el = e.target.parentNode.querySelector('input');
            if (_input_el) {
                _input_el.value = '';
            }
        });
    });

    const _play_pause_els = document.querySelectorAll('.section--body--item--play');
    _play_pause_els.forEach(_el => {
        _el.addEventListener('click', (e) => {
            _play_pause_els.forEach(_el2 => {
                if (_el != _el2) {
                    _el2.classList.remove('active');
                    const _icon_el2 = _el2.querySelector('i');

                    if (_icon_el2) {
                        _icon_el2.classList.remove('lni-pause')
                        _icon_el2.classList.add('lni-play');
                    }
                }
            });

            _el.classList.toggle('active');

            const _icon_el = _el.querySelector('i');
            if (_icon_el) {
                if (_icon_el) {
                    if (_el.classList.contains('active')) {
                        _icon_el.classList.remove('lni-play');
                        _icon_el.classList.add('lni-pause');
                    } else {
                        _icon_el.classList.remove('lni-pause')
                        _icon_el.classList.add('lni-play');
                    }
                }
            }

        });
    });
});
const button = document.getElementById('btn');

button.addEventListener('click', function handleClick() {
  window.location.href = "http://127.0.0.1:5501/search/index.html"
});

const button1 = document.getElementById('btn1');

button1.addEventListener('click', function handleClick() {
  window.location.href = "http://127.0.0.1:5501/Login/html%20login.html"
});

 window.onSpotifyWebPlaybackSDKReady = () => {
    const token = '[BQAZDjUaEh6PWgAAdCd0LTdtgjPAePkWsl4iTyqbrqBHXDqx4Je8Hq24IYQvNpFhiIzhxT3YnDiaClkiQ17-9N1S4RZDV5X1sNmbVQKQdj6rPpRncYF-lLD658Etvv_TnIYgbP_9LDyo9oMvoPurvfFLasmeUbTHMEsqYqxeiQQCiYQHwKTCKnCjQrfIT5XFrGt2V90FsVpLk4jvUoUnq_o]';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
      player.togglePlay();
    };

    player.connect();
}