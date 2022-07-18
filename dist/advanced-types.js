"use strict";
/**
 * Type Aliases
 */
let securityGuard = {
    id: 1,
    name: "Shaamu Kaka",
    retire: (date) => {
        console.log(date);
    },
};
/**
 * Union Types
 */
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
const myWeight = kgToLbs(88);
const myFriendWeight = kgToLbs("75Kg");
console.log({ myWeight, myFriendWeight });
//# sourceMappingURL=advanced-types.js.map