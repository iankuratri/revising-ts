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

/**
 * Classes
 */

interface PersonInterface {
  name: string;
  eats: () => void;
  sleeps: () => void;
}

class Person implements PersonInterface {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
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
