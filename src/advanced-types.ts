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