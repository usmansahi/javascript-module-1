const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
const nametofind = 'ali'
function Namefind(names) {
     
    if (names.includes(nametofind)){
        return 'you found me'
   
    
  }
      return 'you cant'
  
}
  

console.log( Namefind(names)); // logs Mozafar