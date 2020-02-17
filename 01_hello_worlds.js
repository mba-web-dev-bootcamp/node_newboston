var person = {
    firstName: "Malcolm",
    lastName: "Anderson",
    age: 55
};

function addNumber(a,b){
    return a+b;
}

function nopp(){}

var printBacon = function(){
    console.log("Bacon is healthy, don't believe the doctors!");
};


console.log(person);
console.log(addNumber(1, 7));
console.log(nopp());
printBacon();
setTimeout(printBacon, 5000);
