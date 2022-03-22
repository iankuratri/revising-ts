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
 * Arrays & Tuples
 */

let ids: number[] = [1, 2, 3, 4, 5];
// Gives Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// ids.push("hello");

let arr: any[] = [true, {}, 1, undefined, null, []];

// Tuple
let person: [string, number, boolean] = ["Ankur", 27, true];

// Tuple Array
let employees: [number, string][];

employees = [
  [1, "Ankur"],
  [2, "Rajat"],
  [3, "Mohit"],
];
