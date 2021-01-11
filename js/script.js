
let menu = document.querySelector(".menu");
let burgerButton = document.querySelector("#burger-button");
let ipad = window.matchMedia('screen and (max-width: 767px)');

ipad.addListener(addEventMenu);

function hideShow(){
    menu.classList.toggle('is-active');
}

function addEventMenu(e){
    if( e.matches ){
        burgerButton.addEventListener('click', hideShow);
    }else{
        burgerButton.removeEventListener('click', hideShow);
    }
}

addEventMenu(ipad);


