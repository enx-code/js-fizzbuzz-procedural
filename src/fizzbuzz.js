const answer = []

// Write your code below this line
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        answer.push("FizzBuzz")
        // console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        answer.push("Fizz")
        // console.log("Fizz")
    } else if (i % 5 === 0) {
        answer.push("Buzz")
        // console.log("Buzz")
    } else {
        answer.push(i)
        // console.log(i)
    }

}




// Don't touch the code below this line, we'll cover it later
module.exports = answer

