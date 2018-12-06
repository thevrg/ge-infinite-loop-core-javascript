let alma="ize";

function outer (counter) {
    alma="korte";
    console.log("outer started: " + counter + ", alma=" + alma);
    function increment() {
        try {
            console.log("before: " + counter);
            counter++;
        } finally {
            console.log("after: " + counter);
        }
    }

    return increment;
}

let inc1 = outer(33);
let inc2 = outer(44);


inc1();
inc1();
inc1();

inc2();
inc1();

console.log(alma);
