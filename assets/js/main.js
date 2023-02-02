const desktop_menu = document.querySelector('.desktop-menu');
const mobile_menu = document.querySelector('.menu_logo');
const nav_menu = document.querySelector('.mobile-menu');
const content = document.querySelector('.body');
mobile_menu.addEventListener('click', toogledeskpotmenumobile);
function toogledeskpotmenumobile() {
    nav_menu.classList.toggle('inactive');
    if(nav_menu.classList.contains('inactive')==false) {
        content.classList.toggle('inactive');
    }
    else{
        content.classList.toggle('inactive');
    }
}

