const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen =()=>{
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style=`visibility:visible; 
    height:100vh; width:100vw; overflow:hidden;`
}
const navClose = ()=>{
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style=`visibility:visible; height:initial; width:100%; overflow-x:hidden;`;
}

navIconEl.addEventListener('click',navOpen);
navCloseEl.addEventListener('click',navClose);
navBgOverlayEl.addEventListener('click',navClose);

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

var count = 0;
function function1(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    document.documentElement.style.setProperty('--dark-1', '#fff');
    document.documentElement.style.setProperty('--dark-2', '#F4EEFF');
    document.documentElement.style.setProperty('--secondary-color', '#00ADB5');
    document.documentElement.style.setProperty('--lightColor-1', '#344A5C');
}
function function2(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    document.documentElement.style.setProperty('--dark-1', '#3b413a');
    document.documentElement.style.setProperty('--dark-2', '#3f3c3c');
    document.documentElement.style.setProperty('--secondary-color', '#96d2de');
    document.documentElement.style.setProperty('--lightColor-1', '#d6e5d8'); 
}

toggle.onclick = function(){
    if(count ==0){
        function1();
        count++;
    }else{
        function2();
        count--;
    }
}

// aos
AOS.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once: false,
    mirror:false,
    anchorPlacement:'top-bottom'
})