// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function multiplyed (num){
    return num * 100;
}
var result = numbers.map(multiplyed)
console.log(result)
 
var result2 = numbers.map(function multi(num2) {
 return num2 * 100;
 });
 console.log(result2)

 var res3 = numbers.map(function(num3){
     return num3 *100
 });
 console.log(res3)
 var res4 = numbers. map((num4 =>{
     return num4 * 100;
 }));
 console.log(res4)
     
 var res5 = numbers.map(num5 => num5 * 100);
 console.log(res5)
