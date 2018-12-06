
function createColouredObject(finalColor) {
    let ob = {};
    
    Object.defineProperty(ob, "color", {
        get() {
            return finalColor;
        },

        set(newValue) {
            finalColor = "Not " + newValue + " but " + finalColor;
        }
    });
    return ob;
}

let ob1 = createColouredObject("red");
console.log(ob1.color);
ob1.color = "green";
console.log(ob1.color);

let ob2 = createColouredObject("purple");
console.log(ob2.color);
ob2.color = "green";
console.log(ob2.color);

