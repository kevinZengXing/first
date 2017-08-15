/**
 * Created by Kevin on 2017/8/12.
 */
let html = document.documentElement;

window.rem = html.getBoundingClientRect().width / 25;
html.style.fontSize = window.rem + 'px';
