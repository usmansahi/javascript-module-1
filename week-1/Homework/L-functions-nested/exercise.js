var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function nameInUperCase(name){
    return name.toUppercase()
}
function shoutygreeting(name){
    const upercsename = nameInUperCase(name)
    return 'hello ${upercsename}! ';

}
console.log(shoutygreeting(aki))
