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
 * Arrays & Tuples
 */
let ids = [1, 2, 3, 4, 5];
// Gives Error: Argument of type 'string' is not assignable to parameter of type 'number'.
// ids.push("hello");
let arr = [true, {}, 1, undefined, null, []];
// Tuple
let person = ["Ankur", 27, true];
// Tuple Array
let employees;
employees = [
    [1, "Ankur"],
    [2, "Rajat"],
    [3, "Mohit"],
];
