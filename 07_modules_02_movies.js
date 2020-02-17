// module object is created implicitly
module.exports = {};

function printAvatar(){
    console.log("Avatar: PG-13");
}
function printChappie(){
    console.log("Chappie: R");
}

// this is the equivilant of making a method "public"
module.exports.avatar = printAvatar;


