// returns a new array
// takes up to 2 args
// 1st is where slice begins
// 2nd is where slice ends (optional) (returns remainder of array if empty)

const myArr = [0, 1, 2, 3, 4, 5]

const newArr = myArr.slice(-3, -2)
console.log(newArr)

console.log(myArr)