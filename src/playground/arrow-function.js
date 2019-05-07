const square = function(x) {
    return x * x;
}

// const squareArrow = (x) => {
//     return x * x;
// }

const squareArrow = (x) => x * x;

const getFirstName = (name) => name.split(' ')[0];


console.log(square(8));
console.log(squareArrow(8));
console.log(getFirstName('Matt Yost'));