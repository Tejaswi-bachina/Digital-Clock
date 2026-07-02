function updateClock(){
let now = new Date();
let time = document.getElementById("time");
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let amPm;
if (hours>=12){
    amPm = "PM";
}
else{
    amPm = "AM";
}
if (hours>12){
    hours=hours-12;
}
if (hours===0){
    hours = 12;
}
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");
time.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}
updateClock();
setInterval(updateClock,1000);
let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(e){
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});