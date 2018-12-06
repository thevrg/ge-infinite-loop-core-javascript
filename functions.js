
// const alma = dio;

// alma("egy","ketto");

// alma.call("namiez","Egy","Ketto");
// dio.call({},"Egy","Ketto");
 
// console.log(alma.name);

// function dio(elso,masodik) {
//     console.log("dio called: this=" + this + ", " + elso + ", " + masodik);
// }

function increment() {
    this.counter++;
}

let ob = {
    counter: 1,
    increment: increment
};

let ob2 = {
    counter: 999,
    increment: increment
};

let ob3 = {
    counter: 88
};

ob.increment();
ob2.increment();

increment.call(ob);


console.log(ob.counter);
console.log(ob2.counter);
console.log(ob3.counter);
