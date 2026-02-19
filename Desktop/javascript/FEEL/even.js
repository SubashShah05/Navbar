function filterEvenNumbers(arr){
    return new Promise((resolve, reject) => {
        const evenNum = arr.filter((num) => num % 2 === 0); // implicit return

        if (evenNum.length > 0) {
            resolve(evenNum);
        } else {
            reject("No even number found");
        }
    });
}

filterEvenNumbers([1, 2, 3, 4, 5, 6])
.then((data) => {
    console.log("Even numbers:", data);  // Output: Even numbers: [2, 4, 6]
})
.catch((err) => {
    console.log("Error:", err);
});
