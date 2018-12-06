//'use strict';

(function () {

    console.log("outer function's this: ", this);

    function getName() {
        return this.name;
    }

    function greet (greeting = "Hello, dear", ...extraParams) {
        console.log("this",this);
        console.log("arguments",arguments);
        console.log("extraParams",extraParams);
        return greeting + " " + this.name + "!";
    }

    let ob = {
        name: "Bela",
        getName: getName,
        greet
    };

    let ob2 = {
        name: "Jozsi",
        getName,
        greet
    };

    // console.log(ob.greet("Szia"));

    // console.log(ob2.greet("ize","bigyo",34));


    //console.log(ob.greet("Udv"));

    // console.log(greet.call(ob2, "Hello", "Hallo", "Extra2","Extra3"));
    // console.log(greet.apply(ob2, ["Hello", "Hallo", "Extra2","Extra3"]));

    let boundGreet = greet.bind({name: "Locked"}, "Udvozlet");

    boundGreet("Udvozlet, kedves");


}).call({
    name: "bigyo",
    getName() {
        return "hello";
    }
}, "kutya");
