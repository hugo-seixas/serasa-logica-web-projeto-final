function mudarTema() {
    var tema = document.getElementsByTagName('link')[0];

    if (tema.getAttribute('href') == './css/style.css') {
        tema.setAttribute('href', './css/style_dark.css');
    } else {
        tema.setAttribute('href', './css/style.css');
    }
}