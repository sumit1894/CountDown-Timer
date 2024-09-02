
window.addEventListener('load', () => {
    document.querySelector("#Calculate").addEventListener('click', Calculate);
    document.querySelector("#ReSet").addEventListener('click', reset);
});
function Calculate() {
    const stop = document.querySelector('#Stop');
    const date = document.querySelector('#Date').value;
    const time = document.querySelector('#Time').value;
    const reset = document.querySelector('#ReSet');

    const endTime = new Date(date + " " + time);


    const interval = setInterval(() => {
        return CalculateTime(endTime);
    }, 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    });

    reset.addEventListener('click', () => {
        clearInterval(interval);
    });
}



function CalculateTime(endTime) {
    const currentTime = new Date();

    const days = document.querySelector('#day');
    const hours = document.querySelector('#hour');
    const minutes = document.querySelector('#minute');
    const seconds = document.querySelector('#second');



    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;
        console.log(timeLeft);

        days.innerText = Math.floor(timeLeft / 3600 / 24);
        hours.innerText = Math.floor(timeLeft / 3600) % 24;
        minutes.innerText = Math.floor(timeLeft / 60) % 60;
        seconds.innerText = Math.floor(timeLeft % 60);
    }
    else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }

};

function reset() {
    document.querySelector('#Date').value = '';
    document.querySelector('#Time').value = '';
    document.querySelector('#day').innerText = 0;
    document.querySelector('#hour').innerText = 0;
    document.querySelector('#minute').innerText = 0;
    document.querySelector('#second').innerText = 0;
}