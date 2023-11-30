var hourhand = document.getElementById("hourhand");
var minhand = document.getElementById("minhand");
var sechand = document.getElementById("sechand");

var angularclock = setInterval(()=>
{
    var time=new Date();
    hourhand.style.transform=`rotate(${time.getHours()*30+time.getMinutes()/2}deg)`;
    minhand.style.transform=`rotate(${time.getMinutes()*6}deg)`;
    sechand.style.transform=`rotate(${time.getSeconds()*6}deg)`;


},1000)






