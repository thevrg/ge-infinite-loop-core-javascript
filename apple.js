let a1 = {
    color: "red",
    getColor() {
        console.log(this);
        return this.color;
    }
};

let a2 = {
    color: "blue",
    getColor: a1.getColor
};

console.log(a1.getColor());
console.log(a2.getColor());

a1.color = "purple";


console.log(a1.getColor());
console.log(a2.getColor());
