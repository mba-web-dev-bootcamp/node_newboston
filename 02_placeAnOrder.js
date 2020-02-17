function placeAnOrder(orderNumber){
    console.log("Customer order", orderNumber);
    cookAndDeliverFood(function () {
        console.log("Delivered food order: ", orderNumber);
    })
}

// simulate a 5 second operation
function cookAndDeliverFood(callback){
    setTimeout(callback, randomIntFromInterval(1000, 5000));
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
