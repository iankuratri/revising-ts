/**
 * Basic Types
 */

let count: number = 5;
let company: string = "asquare";
let isPublished: boolean = true;

console.log({ count, company, isPublished });

let address: any = {
  city: "Gurgaon",
  state: "Haryana",
};

/**
 * Arrays
 */

let ids: number[] = [1, 2, 3, 4, 5];
// Gives Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// ids.push("hello");

let arr: any[] = [true, {}, 1, undefined, null, []];

/**
 * Tuples
 */

let person: [string, number, boolean] = ["Ankur", 27, true];

// Tuple Array
let employees: [number, string][];

employees = [
  [1, "Ankur"],
  [2, "Rajat"],
  [3, "Mohit"],
];

/**
 * Unions
 */

let pid: number | string = 10;
pid = "123";

/**
 * Enum
 */

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up);
console.log(Direction[0]);

/**
 * Objects
 */

// Type can be used with primitives.
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Ankur",
};

/**
 * Type Assertion
 */

let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Gives Error: Type 'string' is not assignable to type 'number'.
// customerId = "1"

/**
 * Functions
 */

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string): void {
  console.log(message);
}

/**
 * Interfaces
 */

// Interface can not be used with primitives.
interface SuperHero {
  readonly id: number;
  name: string;
  age?: number;
}

const marvelCharacter: SuperHero = {
  id: 1,
  name: "Iron Man",
};

marvelCharacter.age = 50;

// Gives Error: Cannot assign to 'id' because it is a read-only property.
// marvelCharacter.id = 2

/**
 * Function Interface
 */

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const multiply: MathFunc = (x, y) => x * y;
