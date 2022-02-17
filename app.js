const numbers = document.querySelectorAll('.number'),
 clock = document.querySelector('.clock'),
 toggle = document.querySelector('.toggle'),
 toggleSwitch = document.querySelector('.toggleSwitch'),
 sec = document.querySelector('.sec'),
 min = document.querySelector('.min'),
 hr = document.querySelector('.hr'),
 body = document.body;

let time = setInterval(getTime,1000);

clock.style.height = `${clock.clientWidth}px`
 
function getTime() {
    let date = new Date();
    secRatio = date.getSeconds()/60;
    minRatio = (secRatio + date.getMinutes())/60;
    hourRatio= (minRatio + date.getHours())/12;
    sec.style.transform = `rotate(${secRatio * 360}deg)`
    min.style.transform = `rotate(${minRatio * 360}deg)`
    hr.style.transform = `rotate(${hourRatio * 360}deg)`
}

toggle.addEventListener('click', ()=>{
body.classList.toggle('light');
toggle.classList.toggle('toggleDark');
toggleSwitch.classList.toggle('switchRight');
clock.classList.toggle('clockLight');
})