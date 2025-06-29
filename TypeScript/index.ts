//^ Variables declaration:

//& JavaScript:
// let a = 10;
// let b = 'saad';
//& TypeScript:
let a: number = 10;
let b: string = "saad";
console.log(a);



//^ Arrays
//& JavaScript:
let numbers = [1, 2, 4, 5, 6];

//& TypeScript

let number: number[] = [1, 2, 4, 5, 6];
let Persons: string[] = ["Saad", "Aleena"];

//^ Objects
//& JavaScript:

let student = {
  name: "Saad",
  age: 20,
  isActive: true,
};

//& TypeScript:

let person: {
  name: string;
  age: number;} = {
  name: "Saad",
  age: 20,
};


//^ Loops
//& JavaScript:
for (let i = 0; i < number.length; i++) {
  console.log(number[i]);
}

//& TypeScript:
for (let i: number = 0; i < number.length; i++) {
  console.log(number[i]);
}

//* While Loop
//& JavaScript:
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

//& TypeScript:
let counts: number = 0;
while (count < 3) {
    console.log(count);
    count++;
}

//* Do-While Loop

//& JavaScript:
let z = 0;
do {
    console.log(z);
    z++;
} while (z < 3);

//& TypeScript:
let s: number = 0;
do {
    console.log(z);
    z++;
} while (z < 3);

//* For-Of Loop
//& JavaScript:
let fruit = ["apple", "banana"];
for (let fruita of fruit) {
    console.log(fruita);
}

//& TypeScript:
let fruits: string[] = ["apple", "banana"];
for (let fruit of fruits) {
    console.log(fruit);
}

//* For-In Loop
//& JavaScript:
// let personss = { name: "Ali", age: 30 };
// for (let obj in personss) {
//     console.log(obj + ": " + personss[obj]);
// }

//& TypeScript:
let personData: { name: string, age: number } = { name: "Ali", age: 30 };
for (let key in personData) {
    console.log(`${key}: ${personData[key as keyof typeof personData]}`);
}

