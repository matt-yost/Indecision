//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
var nameVar = 'Matt';
nameVar = ' Mike'

let nameLet = 'Matt';
console.log('nameVar', nameVar);
console.log('nameLet', nameLet);

//Block Scope

const fullName = 'Matt Yost';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);