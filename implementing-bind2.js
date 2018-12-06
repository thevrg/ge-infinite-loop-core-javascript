'use strict';

Function.prototype.bind2 = function(newThis, ...fixedArguments) {
    
    const originalFunction = this;

    function proxy (...argumentsOfProxy) {
        const mergedArguments = [...fixedArguments, ...argumentsOfProxy];
            return originalFunction.apply(newThis, mergedArguments);
    }

    return proxy;
}


function readValue() {
    return this.value;
}

function sum(...numbers) {
    let sum = 0;

    for(let n of numbers) {
        sum += n;
    }
    return sum;
}

const proxy = readValue.bind2({value: "ertek232"});

console.log( proxy() );

const boundsum = sum.bind2({},10,20);

console.log(boundsum(30,40));
