
const ob = (function() {
    let titok = "huha";
    console.log("hello world, titok: " + titok);
    
    let counter = 0;

    function increment() {
        counter++;
    }

    function decrement() {
        counter--;
    }

    function getValue() {
        return counter;
    }

    return {
        increment, 
        decrement, 
        getValue
    };
})();

console.log(ob);
console.log(ob.getValue());
ob.increment();
console.log(ob.getValue());

