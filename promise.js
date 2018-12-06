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


        const promiseLogic = (resolve, reject) => {
            setTimeout(() => {
                resolve({
                    timeElapsed: seconds,
                    message: "Hello, time is out",
                    number: Math.random() * 100
                });
            }, seconds * 1000);
        };

        const promise = new Promise(promiseLogic);

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
                    if (success.number > 50) {
                        return "succeeded"
                    } else {
                        throw "invalid number";
                    }
                },
            );
    }

}

const mySerice = new MyService();

const mySecondService = new MySecondService(mySerice);


mySecondService.valami(1)
    .then(
        (success) => {
            console.log("SUCCESS", success);
            throw success;
        },
        (failure) => {
            console.log("FAILURE", failure);
            return failure;
        }
    ).then(
        (success) => {
            console.log("SUCCESS2", success);
        },
        (failure) => {
            console.log("FAILURE2", failure);
        }
    );
