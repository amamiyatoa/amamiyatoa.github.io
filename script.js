window.onload = function() {
    //サイト読み込み時bodyにフェードをかける//
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
    //GitHubリンクの追加とダイアログ確認//
    document.getElementById('github_link').onclick = () => {
        let github_link = window.confirm('ページを移動してもよろしいですか？');
        if(github_link) {
            window.open('https://github.com/amamiyatoa/amamiyatoa.github.io','_blank');
        }
    }
}