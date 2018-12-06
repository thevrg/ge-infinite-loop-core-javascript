

function MyPoint(xinit, y) {
    this.x = xinit;
    this.y = y;
    this.kutya="eb";
}

MyPoint.prototype.toString = function() {
    return "Hello, this is me, x: " + this.x + ", y: " + this.y;
}


let p1 = new MyPoint(10,20);

MyPoint.prototype = { toString() {
    return "hehe";
}};

let p2 = new MyPoint(20, 30);
let p3 = {x: 50, y: 60};
console.log(p1.toString());
console.log(p2.toString());
console.log(p3);

console.log(p1.__proto__);
console.log(p2.__proto__);
console.log(p3.__proto__);

for(let i in Object.prototype) {
    console.log("Object.prototype." + i);
}
