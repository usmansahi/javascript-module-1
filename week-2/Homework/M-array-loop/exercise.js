/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function nameofweek (daysOfWeek){
  for(let i = 0; i < daysOfWeek.length; i ++){
    if(daysOfWeek[i].startwith('T')){
    console.log(daysOfWeek[i])
  }
}
}
nameofweek(daysOfWeek)