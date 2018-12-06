function getMonthName(numberOfMonth) {
    numberOfMonth = numberOfMonth - 1;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[numberOfMonth]) {
        return months[numberOfMonth];
    } else {
        let err = new Error("Invalid month");
        err.invalidMonthIndex = numberOfMonth;
        throw err;
    }
}

try {
    console.log(getMonthName(17));
} catch (e) {
    console.log("Error...", e);
    console.log(e.invalidMonthIndex);
} finally {
    console.log("But before done...")
}
console.log("done");