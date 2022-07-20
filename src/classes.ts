/**
 * Creating classes
 */

class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid Amount.");
    this._balance += amount;
  }

  get balance(): number {
    return this._balance;
  }
}

// Creating object from a class
let account = new Account(1, "Mosh", 0);
account.deposit(100);

console.log(account.balance);
console.log(account instanceof Account);

/**
 * Index Signatures
 */

class SeatAssignment {
  // A1, A2 ...
  // Mosh, Jhon ...

  // Index Signature Property - using it we can create properties dynamically in an object
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Jhon";
