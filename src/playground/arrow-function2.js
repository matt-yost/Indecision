//Arguments object - no longer bound
const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(55, 1));

//This - no longer bound

const user = {
    name: 'Matt Yost',
    cities: ['Houston', 'Dallas', 'Denver'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }    
};

console.log(user.printPlacesLived());

//Challenge 

const multiplyer = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((n) => n * this.multiplyBy)
    },
}

console.log(multiplyer.multiply());