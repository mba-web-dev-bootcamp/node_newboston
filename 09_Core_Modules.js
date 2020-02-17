// with core modules, it's best practice to name the var the same as the module
var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, corn is life.")

console.log(fs.readFileSync("corn.txt").toString());

var path = require("path");
var websiteHome = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
