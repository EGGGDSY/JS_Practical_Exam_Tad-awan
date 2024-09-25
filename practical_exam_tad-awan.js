// Variables and Operators
let name = "Zchiavoni";
let age = 22;
let city = "La Trinidad";

let currentYear = new Date().getFullYear();
let yearBorn = currentYear - age;

let isAdult = age >= 18;
let ageRemainder = age % 5;

console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
console.log(`Year Born: ${yearBorn}`);
console.log(`Is Adult: ${isAdult}`);
console.log(`Age Remainder (age % 5): ${ageRemainder}`);

// String Manipulation
let sentence = `${name} from ${city}`;
console.log(sentence);

function toUpperCase(str) {
    return str.toUpperCase();
}

let uppercased = toUpperCase(sentence);
console.log(uppercased);

function countOccurrencesOfA(str) {
    let count = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

let occurrencesOfA = countOccurrencesOfA(sentence);
console.log(`Occurrences of 'a': ${occurrencesOfA}`);

let originalString = "I am learning JavaScript at school";
console.log(originalString)
let replacedString = originalString.replace(/JavaScript/gi, "JS");
console.log(replacedString);

// Array Manipulation
let foods = ["Adobo", "Sinigang", "Burger", "Fried Chicken", "Rice"];
foods.push("Shawarma");
foods.splice(1, 1);
foods.sort();
function printFoods(foodArray) {
    foodArray.forEach(food => {
        console.log(food);
    });
}
printFoods(foods);

