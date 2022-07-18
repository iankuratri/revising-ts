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
