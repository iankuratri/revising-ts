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

  getBalance(): number {
    return this._balance;
  }
}

// Creating object from a class

let account = new Account(1, "Mosh", 0);
account.deposit(100);

console.log(account.getBalance());
console.log(account instanceof Account);
