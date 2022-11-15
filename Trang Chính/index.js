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