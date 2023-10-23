const button = document.getElementById('button');
const input = document.getElementById('input');
const body = document.querySelector('body');

let interval = setInterval(setBackgroundColor, 3000);

window.addEventListener('load', onload);
button.addEventListener('click', onclick);

function onload(event) {
    setBackgroundColor();
}

function onclick(event) {
    if(event.target.value === 'Start'){
        updateButton(event.target, true);
        const time = 1000 * Number(input.value);
        interval = setInterval(setBackgroundColor, time);
    }
    else {
        updateButton(event.target, false);
        clearInterval(interval);
    }
}

function setBackgroundColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a =  .5 + (Math.random() * .4);
    const color = `rgba( ${r}, ${g}, ${b}, ${a})`;
    body.style.backgroundColor = color;
}

function updateButton(btn, isRunning){
    if(isRunning){
        btn.value = 'Stop';
        btn.classList.add('btn-danger');
        btn.classList.remove('btn-primary');
    } else {
        btn.value = 'Start';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-danger');
    }
}