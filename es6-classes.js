let arr = [2, 3, 4, 10];

let arr2 = [1, 2, 3, 4, 5];


Array.prototype.sum = function () {
    let sum = 0;
    for (let i of this) {
        sum += i;
    }
    return sum;
}

console.log(arr.sum());
console.log(arr2.sum());

function MyArray(origArr) {
    for (let i of origArr) {
        this.push(i);
    }
}

MyArray.prototype = Object.create(Array.prototype);

MyArray.prototype.printAll = function () {
    for (let i of this) {
        console.log(i);
    }
}

console.log('-----');
let myarr1 = new MyArray([2, 3, 4, 5]);

myarr1.push(23);
myarr1.push(34);

myarr1.printAll();


class MyArray2 extends Array {
    constructor(origArr) {
        super();
        if (origArr) {
            for (let i of origArr) {
                this.push(i);
            }    
        }
    }

    printAll() {
        for (let i of this) {
            console.log(i);
        }
    }

    sum() {
        let sum = 0;
        for (let i of this) {
            sum += i;
        }
        return sum;
    }

    static hello() {
        console.log("hello world");
    }
}

let arr21 = new MyArray2([8,10]);

arr21.printAll();
console.log("sum: " + arr21.sum());


console.log(arr21 instanceof String);

MyArray2.hello();