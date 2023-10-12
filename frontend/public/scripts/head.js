export async function headScroll(){
    const value = window.scrollY;
    const bg_front = document.getElementById('frontTower');
    const bg_back = document.getElementById('behideTower');
    const bg = document.getElementById('home-bg');
    const sun = document.getElementById('sun');
    const star = document.getElementById('star');
    star.style.top = value * 0.3 + 'px';
    bg_back.style.top = value * 0.3 + 'px';
    bg_front.style.top = value * 0.4    + 'px';
    sun.style.top = value*0.5 +'px';
    sun.style.left = value * 0.2 + 'px';
    bg.style.top = value*0.2 + 'px';
}
