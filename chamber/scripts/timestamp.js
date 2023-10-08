const timestamp = document.querySelector('#timestamp');
var cDate = new Date();

var cDay = cDate.getDate();
var cMonth = (cDate.getMonth() + 1).toString();
var cYear = cDate.getFullYear();
var cHour = cDate.getHours();
var cMinute = cDate.getMinutes();
var cSecond = cDate.getSeconds();

let dateAndTime =  `${cDay}/${cMonth}/${cYear}, ${cHour}:${cMinute}:${cSecond}`;

timestamp.value = dateAndTime;
