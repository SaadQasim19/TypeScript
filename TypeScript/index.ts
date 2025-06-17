//^ Variables declaration:

//& JavaScript:
// let a = 10;
// let b = 'saad';
//& TypeScript:
let a: number = 10;
let b: string = "saad";
console.log(a);

//^ Functions declaration:
//& JavaScript:
// function add(x,y){return x+y;}
// const add = (a,b)=>{return a+b;};

//& TypeScript:
function add(x: number, y: number): number {
  return x + y;
}

const addArrow = (a: number, b: number): number => {
  return a + b;
};

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
