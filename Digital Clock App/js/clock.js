alert("Welcome to my digital clock, I hope it helps you and that you like it!")

const showClock = ()=>{
    let date = new Date();
    let hr = formatHour(date.getHours());
    let min = formatHour(date.getMinutes());
    let sec = formatHour(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hr}:${min}:${sec}`;

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[date.getDay()];
    let day = date.getDate();
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateText = `${weekDay}/${day}/${month}/${year}`;
    document.getElementById("date").innerHTML = dateText

    document.getElementById("container").classList.toggle("animate");
}

const formatHour = (hour)=>{
    if(hour < 10)
        hour = "0" + hour;
    return hour;
}

setInterval(showClock, 1000);