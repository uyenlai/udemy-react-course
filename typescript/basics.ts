//Primitives

let num: number = 24;

let userName: string;

userName = "Olivia";

let isOpen: boolean;

isOpen = false;

//Array
let hobbies: string[];

hobbies = ["cooking", "traveling"];

//Object
let person: {
  name: string;
  age: number;
};

person = {
  name: "Lai",
  age: 24,
};

//Array of objects
let people: {
  name: string;
  age: number;
}[];

people = [
  { name: "John", age: 55 },
  { name: "Renee", age: 25 },
];

//Type inference + union
let course: string | number = "React course";

course = 12345;

//Type Aliases
type Product = {
  id: number;
  name: string;
  price: number;
};

let product: Product;

product = {
  id: 1,
  name: "Hat",
  price: 20,
};

let products: Product[];

products = [
  { id: 1, name: "Glasses", price: 15 },
  { id: 2, name: "T-Shirt", price: 65 },
];
