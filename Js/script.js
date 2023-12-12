
function updateTime(){
    const time = document.querySelector('.time-js');
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    time.innerHTML = `${hour}:${min}`;
    console.log(`${hour}:${min}:${date.getSeconds()}`);
}

setInterval(updateTime(), 1000);

