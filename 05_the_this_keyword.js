// this refers to "the thing that called it"
var Bucky = {
    printFirstName: function (){
        console.log("My name is Bucky");
        console.log(this === Bucky);

    }
}

Bucky.printFirstName();

// The default calling context is global
function doSomethingWorthless() {
    console.log("this function is worthless");
    console.log(this === Bucky);
    console.log(this === global);

}

doSomethingWorthless();