/**
 * Generics allow creating 'type variables' which can be used to create classes,
 * functions & type aliases that don't need to explicitly define the types that they use.
 *
 * Generics makes it easier to write reusable code.
 */

/**
 * Generic Classes
 */

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, "Ankur");

// pair.key is number here
// pair.value is string here

let pair2 = new KeyValuePair<string, number>("XUV 700", 2022);

// pair2.key is string here
// pair2.value is number here

/**
 * Generic Functions
 */

function wrapInArray<T>(value: T): T[] {
  return [value];
}

let numberArr = wrapInArray(1);
let stringArr = wrapInArray("Ankur");

/**
 * Generic Interfaces
 */

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface Buyer {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Buyer>("url");
// result.data?.username - Properties of Buyer object is there

let result2 = fetch<Product>("url");
// result2.data?.title - Properties of Product object is there

/**
 * Generic Constraints
 */

function print<T extends number | string>(value: T) {}

// Restrict using a shape object
function print<T extends { name: string }>(value: T) {}

// Restrict using an interface or a class
function print<T extends Person>(value: T) {}
