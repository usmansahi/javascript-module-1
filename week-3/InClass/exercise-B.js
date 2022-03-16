var classarry =["usman","ali","zee","aim"]
var otherclass = ["be","me","ism"]
var conca = classarry.concat(otherclass)
console.log(conca.sort())
function calling(name1,array){
    if (array.includes(name1)){
        return name1 + ' is at the class of'+ array
    }else {
        return name1 +' out of class' + array
    }

}
console.log(calling('ali',classarry))
console.log(calling('ali',otherclass))