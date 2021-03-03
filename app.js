const numbers = document.querySelectorAll('.number'),
 clock = document.querySelector('.clock'),
 toggle = document.querySelector('.toggle'),
 toggleSwitch = document.querySelector('.toggleSwitch'),
 body = document.body;
let stylesheet  = document.styleSheets[1];
let variables;
let hour
let min 
let sec
let time = setInterval(getTime,1000);
for(let i = 0; i < stylesheet.cssRules.length; i++) {
    if(stylesheet.cssRules[i].selectorText === ':root') {
      variables = stylesheet.cssRules[i];
    }
  }
 variables.style.setProperty('--clockHeight', clock.clientWidth + 'px')
 
function getTime() {
    let date = new Date();
    secRatio = date.getSeconds()/60;
    minRatio = (secRatio + date.getMinutes())/60;
    hourRatio= (minRatio + date.getHours())/12;
    variables.style.setProperty('--seconds', secRatio * 360 + 'deg')
    variables.style.setProperty('--minutes', minRatio * 360 + 'deg')
    variables.style.setProperty('--hours', hourRatio * 360 + 'deg')
   
}

getTime();

toggle.addEventListener('click', ()=>{
body.classList.toggle('light');
toggle.classList.toggle('toggleDark');
toggleSwitch.classList.toggle('switchRight');
clock.classList.toggle('clockLight');
})