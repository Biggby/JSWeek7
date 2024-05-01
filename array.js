const { totalmem } = require("os");

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //array1
let map =  ages.map((x) => x - 3); //subtracts 3 from all numbers
console.log(map);
console.log(map[map.length -1]); // prints last number in array
let rawr = map.push(56)
console.log(map)

function medianAge() {
    let sum = 0 // cannot use const as it gets changed later on
    for(let i = 0; i < ages.length; i++) { 
        sum += ages[i]; 
    }
    return sum / ages.length;
}

console.log(medianAge(map))

//-------------------------------------------------------------------

let names = [`Sam`, `Tommy`, `Tim`, `Sally`, `Buck`, `Bob`];

function hadToChange() {
    let totalLetters = 0 // 0 letters in the names
    for (let i = 0; i < names.length; i++) {
        totalLetters += names[i].length; // adds all the letters in each name
    }
    return totalLetters / names.length; // divides totalLetters by how many names
}
console.log(hadToChange(names))

//-------------------------------------------------------------------

//using the array.pop to grab the last number and return it
//using the array.shift method allows you to remove the first value and return it

let named = ["Kelly", "Sam", "Kate"];
let namesLengths = []

for (let i = 0; i < named.length; i++) {
    namesLengths.push(named[i].length);
}
console.log(namesLengths)

//-------------------------------------------------------------------
//6
let namesLengthss = [5, 3, 4] // array
let sum = 0 // starting number
    for(let i = 0; i < namesLengthss.length; i++) {  
        sum += namesLengthss[i]; //adds them all together
    }
    console.log(sum); //prints sum 

//-------------------------------------------------------------------
//7

function usingParameters(word, n) {
    let meow = ""
    for(let i = 0; i < n; i++) {
        meow += word
    }
    return meow
}
console.log(usingParameters("Hello", 3))

//-------------------------------------------------------------------
//8

function fullNameJit(firstName, lastName) {
    firstName = "Trevor"
    lastName = "Greenbaum"
    return firstName + " " + lastName
}
var firstName, lastName;
console.log(fullNameJit(firstName, lastName))


//-------------------------------------------------------------------
//9
let numbers = [20, 60, 90]
function sumOfAll(math) {
    let sum = 0
    for(let i = 0; i < math.length; i++) {
    sum += math[i]
    }
    return sum > 100;
}
console.log(sumOfAll(numbers))

//-------------------------------------------------------------------
//10

/*
let oldies = [3, 76, 89, 8, 24, 43] may have to be under the function
function medianAge() {
    let sum = 0 // cannot use const as it gets changed later on
    for(let i = 0; i < oldies.length; i++) { 
        sum += oldies[i]; 
    }
    return sum / oldies.length;
}

console.log(medianAge(oldies))
*/


function medianAge(oldies) {
    let sum = 0;
    for (let i = 0; i < oldies.length; i++) {
        sum += oldies[i];
    }
        return sum / oldies.length;
}
let oldies = [3, 76, 89, 8, 94, 43]
console.log(medianAge(oldies))

//-------------------------------------------------------------------
//11

let prime = [1, 3, 5, 7, 9]
let even = [2, 4, 6, 8, 10]

function twoThings(prime, even) {
    let sumPrime = 0;
    let zedEven = 0;
    for (let i = 0; i < prime.length; i++) {
        sumPrime += prime[i];
    }
    for (let i = 0; i < even.length; i++) {
        zedEven += even[i];
    }
        let totalPrime = sumPrime / prime.length   
        let totalEven =  zedEven / even.length

        return totalEven > totalPrime
}
console.log(twoThings(prime, even))



//-------------------------------------------------------------------
//12
// need isHotOutside to be True
// mon
let moneyInPocket = 15
let temp = 70
function willBuyDrink(money, weather) {
    if (weather > 65 && money > 10.50) {
    return true;
} else {
        return false;
    }
}
console.log(willBuyDrink(moneyInPocket, temp))

//-------------------------------------------------------------------
//13

/*
this function lets you know if you are poor and need to save money
*/

let rich = 500
let poor = 100
let money = 350

function saveMoney() {
    if (money => rich) {
        return "You are rich";
    } else if (money <= poor) {
        return "You are Poor, and you need to save";
    }
}

console.log(saveMoney());