// selectors

const time = document.getElementById('time');
const intro = document.getElementById('intro');
const yourName = document.getElementById('your-name');
const toDo = document.getElementById('to-do');


///funcitons


function timeAdd() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();


    time.innerHTML = `${zero(hour)}<span>:</span>${zero(minute)}<span>:</span>${zero(seconds)}`;

    setTimeout(timeAdd, 500);
}

//padd timne with 0s

function zero(number) {
    return (parseInt(number,10) < 10 ? '0' : '') + number;
}


function retName() {
    if(localStorage.getItem('yourName') === null) {
        yourName.textContent = 'Enter Your Name';
    } else {
        yourName.textContent = localStorage.getItem('yourName');
    }

    if(localStorage.getItem('toDo') === null) {
        toDo.textContent = 'Enter A To Do Here';
    } else {
        toDo.textContent = localStorage.getItem('toDo');
    }
}

function storeName(e) {
    if(e.type === 'keypress') {
        if(e.which === 13 || e.keyCode === 13 || e.key === 'Enter') {
            localStorage.setItem('yourName', e.target.innerText);
            yourName.blur();
        }
    } else {
        localStorage.setItem('yourName', e.target.innerText);
        
    }
}


function storeToDo(e) {
    if(e.type === 'keypress') {
        if(e.which === 13 || e.keyCode === 13 || e.key === 'Enter') {
            localStorage.setItem('toDo', e.target.innerText);
            toDo.blur();
        }
    } else {
        localStorage.setItem('toDo', e.target.innerText);
        
    }
}


// background and intro based on time



function getBg() {
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12) {
        //morning
        document.body.style.backgroundImage = 'url(images/morning.jpg)';
        intro.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        document.body.style.backgroundImage = 'url(images/afternoon.jpg)';
        intro.textContent = 'Good Afternoon, ';
    } else {
        document.body.style.backgroundImage = 'url(images/evening.jpg)';
        intro.textContent = 'Good Evening, ';
    }
}


//event listeners

yourName.addEventListener('keypress', storeName);
yourName.addEventListener('blur', storeName);
toDo.addEventListener('keypress', storeToDo);
toDo.addEventListener('blur', storeToDo);




retName();
getBg();
timeAdd();