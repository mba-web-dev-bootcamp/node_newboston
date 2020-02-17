function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.Name + " gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();

function status(){
    console.log("Bucky: " + Bucky.life);
    console.log("Wendy: " + Wendy.life);
}

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);
status();

User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.Name + " just uppercutted " + targetPlayer.name);
}

Wendy.uppercut(Bucky);
status();

// You can add properties to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);