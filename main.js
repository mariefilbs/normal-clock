var clockDisplay = document.getElementById("clock");

function showTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (seconds < 10) {seconds = "0" + seconds;}
  if (minutes < 10) {minutes = "0" + minutes;}


//Converting from military time
  if (hours > 12) {hours = hours - 12; meridiem = "PM";}
  if (hours === 0) {hours = 12;}

//needed to move this down to format AFTER changing to military time
  if (hours < 10) {hours = "0" + hours;}

  clockDisplay.innerHTML = (hours + ":" + minutes + ":" + seconds);

}
setInterval(showTime, 1000);
showTime();
