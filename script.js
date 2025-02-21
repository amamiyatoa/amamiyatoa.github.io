window.onload = function() {
    document.body.classList.add('fadein_active')
    //フェードイン導入JavaScript//
    let fade_menu = document.getElementById('menu');
    fade_menu.addEventListener('mouseover', function() {
        if(fade_menu.className != 'fadein_active') {
            fade_menu.classList.add('fadein_active');
        }
        fade_menu.addEventListener('mouseout', function() {
            if(fade_menu.className = 'fadein_active') {
                fade_menu.classList.remove('fadein_active');
            }
        });
    });
}