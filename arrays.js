const arr = ["Alma","Korte","barack", "banán", "ananasz", "alma"];

function sumReducer(accumulator, value, index, array) {
    console.log("sumReducer ", accumulator, value);
    return accumulator + value;
}

function counter(accumulator, value) {
    console.log("acc", accumulator, "value", value)
    accumulator[value] = accumulator[value] ? accumulator[value] + 1 : 1;
    return accumulator; 
}


const filtered = arr
.map(value => value.toLowerCase())
.filter(value => value.indexOf("a") !== -1)
.map(value => value.length)
.reduce(counter, {});

arr.forEach(value => console.log("V:",value));

console.log(arr);
console.log(filtered);
