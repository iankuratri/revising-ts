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

/**
 * Static Members
 */

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

/**
 * Method Overriding
 */

class Boy {
  constructor(public name: string) {}

  about(): void {
    console.log(this.name + " is an intelligent boy..");
  }
}

class Student extends Boy {
  constructor(
    public rollnumber: number,
    public marks: number,
    public name: string
  ) {
    super(name);
  }

  displayStudentInformation(): void {
    console.log(
      "Name : " +
        this.name +
        ", Roll Number : " +
        this.rollnumber +
        ", Scores : " +
        this.marks +
        " out of 100"
    );
  }

  about(): void {
    console.log(this.name + " scores well...");
  }
}

let student = new Student(2, 96, "Rohit");
student.displayStudentInformation();
student.about();

/**
 * Polymorphism
 */

class CollegeStudent {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Professor extends CollegeStudent {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

class Principal extends CollegeStudent {
  override get fullName() {
    return `Principal ${super.fullName}`;
  }
}

function printNames(students: CollegeStudent[]) {
  for (const student of students) {
    console.log(student.fullName);
  }
}

printNames([
  new CollegeStudent("Ankur", "Atri"),
  new Professor("Neha", "Dhupiya"),
  new Principal("Rohit", "Shetty"),
]);

/**
    
TypeScript supports three access modifiers - public, private, and protected.

1.  Public - By default, members (properties and methods) of the TypeScript class are 
    public - so you don’t need to prefix members with the public keyword. 
    Public members are accessible everywhere without restrictions even from the 
    multiple level sub-classes without any compile errors.

2.  Private - A private member cannot be accessed outside of its containing class. 
    Private members can be accessed only within the class and even their sub-classes 
    won't be allowed to use their private properties and attributes.

3.  Protected - A protected member cannot be accessed outside of its containing class. 
    Protected members can be accessed only within the class and by the 
    instance of its sub/child class.

*/

/**
 * Abstract Classes and Methods
 *
 * Abstract classes are base classes from which other classes may be derived.
 * They may not be instantiated directly. Unlike an interface,
 * an abstract class may contain implementation details for its members.
 * The abstract keyword is used to define abstract classes
 * as well as abstract methods within an abstract class.
 */

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): any;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle...");
  }
}

// let shape = new Shape("black"); - Cannot create an instance of an abstract class.
