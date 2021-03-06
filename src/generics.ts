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

/**
 * Extending Generic Classes
 */

interface Item {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T) {
    this._objects.push(obj);
  }

  /**
   * The keyof Operator
   */

  // T is item here, keyof T is 'name' or 'price'
  search(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Item>();
store.add({ name: "iphone", price: 1000 });
store.search("name", "iphone");
store.search("price", 1000);

// Compilation Error: Argument of type '"nonExistingProperty"' is not assignable to parameter of type 'keyof Item'.
// store.search("nonExistingProperty", 1);

// Passing on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
let compressibleStore = new CompressibleStore<Item>();

// Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fixing the the generic type parameter
class ItemStore extends Store<Item> {}

/**
 * Type Mapping
 *
 * Utility Types
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 */

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let readonlyItem: ReadOnly<Item> = {
  name: "a",
  price: 1,
};

// Compilation Error: Cannot assign to 'name' because it is a read-only property.
// readonlyItem.name = "b"

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]?: T[K] | null;
};
