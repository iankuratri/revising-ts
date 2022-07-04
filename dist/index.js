"use strict";
/**
 * Basic Types
 */
let count = 5;
let company = "asquare";
let isPublished = true;
console.log({ count, company, isPublished });
let address = {
    city: "Gurgaon",
    state: "Haryana",
};
/**
 * Arrays
 */
let ids = [1, 2, 3, 4, 5];
// Gives Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// ids.push("hello");
let arr = [true, {}, 1, undefined, null, []];
/**
 * Tuples
 */
let person = ["Ankur", 27, true];
// Tuple Array
let employees;
employees = [
    [1, "Ankur"],
    [2, "Rajat"],
    [3, "Mohit"],
];
/**
 * Unions
 */
let pid = 10;
pid = "123";
/**
 * Enum
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction[0]);
const user = {
    id: 1,
    name: "Ankur",
};
/**
 * Type Assertion
 */
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
// Gives Error: Type 'string' is not assignable to type 'number'.
// customerId = "1"
/**
 * Functions
 */
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const marvelCharacter = {
    id: 1,
    name: "Iron Man",
};
marvelCharacter.age = 50;
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    eats() {
        console.log(`${this.name} eats pizza.`);
    }
    sleeps() {
        console.log(`${this.name} sleeps at 11PM.`);
    }
}
const ankur = new Person(1, "Ankur");
console.log(ankur);
// Gives Error: Property 'id' is private and only accessible within class 'Person'.
// ankur.id = 1;
ankur.eats();
ankur.sleeps();
/**
 * Access Modifiers
 *
 * Private – Access is limited inside class only.
 * Public – Can be access from anywhere, access is not restricted.
 * Protected – Access is limited to the containing class or types derived from the containing class.
 */
/**
 * Extending Classes (Subclasses)
 */
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    works() {
        console.log(`${this.name} works as a ${this.position}`);
    }
}
const rajat = new Employee(2, "Rajat", "Backend Developer");
console.log(rajat);
rajat.eats();
rajat.sleeps();
rajat.works();
/**
 * Generics
 */
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(["a", "b", "c"]);
// Gives Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// numArray.push("a");
//# sourceMappingURL=index.js.map