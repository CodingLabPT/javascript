const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
    const now = new Date();

    const getHour = now.getHours();
    const getMinute = now.getMinutes();
    const getSecond = now.getSeconds();
    
    const HourToDegree = (getHour / 12) * 360;
    const MinuteToDegree = (getMinute / 60) * 360;
    const SecondToDegree = (getSecond / 60) * 360;

    hour.style.transform = `rotate(${HourToDegree}deg)`;
    minute.style.transform = `rotate(${MinuteToDegree}deg)`;
    second.style.transform = `rotate(${SecondToDegree}deg)`
}

setInterval(setDate, 1000);