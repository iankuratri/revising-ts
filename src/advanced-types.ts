/**
 * Type Aliases
 */

type WorkMan = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let securityGuard: WorkMan = {
  id: 1,
  name: "Shaamu Kaka",
  retire: (date: Date) => {
    console.log(date);
  },
};

/**
 * Union Types
 */

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

const myWeight = kgToLbs(88);
const myFriendWeight = kgToLbs("75Kg");

console.log({ myWeight, myFriendWeight });

/**
 * Intersection Types
 */

type Draggable = {
  drag: () => void;
};

type Resiable = {
  resize: () => void;
};

type UIWidget = Draggable | Resiable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/**
 * Literal Types
 */

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Metric = "cm" | "inch";

/**
 * Nullable Types
 */

function greet(name: string | null | undefined) {
  if (name) console.log("Hi " + name);
  else console.log("Hi User");
}

greet("Ankur");
greet(null);
