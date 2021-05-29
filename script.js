setInterval(() => {
    time = new Date();
    hourTime = time.getHours();
    minuteTime = time.getMinutes();
    secondTime = time.getSeconds();
    
    hourHandRotation = (30*hourTime) + (0.5*minuteTime);
    minuteHandRotation = 6*minuteTime;
    secondHandRotation = 6*secondTime;

    hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
    secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
}, 1000);