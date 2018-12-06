// console.log("Start");

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("setTimeout time elapsed");
//         reject("Gone in 1s!");
//         console.log("after resolving");
//     }, 1000);
//     console.log("next statement");
// });

// console.log("After creating Promise");

// promise.then(
//     function (success) {
//         console.log("Resolved", success);
//     },
//     function (error) {
//         console.log("Rejected", error);
//     }
// );

// console.log("After registering then handlers");


class MyService {

    wait(seconds) {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({timeElapsed: seconds, message: "Hello, time is out", number: Math.random() * 100});
            }, seconds * 1000);
        });

        return promise;
    }

}

class MySecondService {
    constructor(myService) {
        this.myService = myService;
    }

    valami(seconds) {
        return this.myService.wait(seconds)
            .then(
                (success) => {
                        console.log("resolved");
                        if(success.number > 50) {
                            return "succeeded"
                        } else {
                            throw "invalid number";
                        }
                }
            );
    }

}

const mySerice = new MyService();
const mySecondService = new MySecondService(mySerice);




mySecondService.valami(2)
.then(
    (success) => {
        console.log("SUCCESS", success);
    },
    (failure) => {
        console.log("FAILURE", failure);
    }
);