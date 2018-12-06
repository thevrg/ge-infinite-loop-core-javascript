let ob = { "x": "alma","y": "korte"};

let {x, y} = ob;
console.log(x);

let ob2 = {x, y};

let ob3 = {...ob, x: "felulirt"};

let arr = [1,2,3];

let arr2 = [...arr1, 34, ...arr3];
