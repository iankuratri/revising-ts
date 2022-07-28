/**
 * Decorators
 *
 * A Decorator is a special kind of declaration that can be attached to a
 * class declaration, method, accessor, property, or parameter.
 * Decorators use the form @expression, where expression must evaluate
 * to a function that will be called at runtime with information
 * about the decorated declaration.
 */

//  For example, given the decorator @sealed we might write the sealed function as follows:

function sealed(target: unknown) {
  // do something with 'target' ...
}

/**
 * Class Decorators
 */

function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

// Decorator Composition:
// Applying multiple decorator to a class, will be called in bottom to top approach
@Component
@Pipe(10)
class ProfileComponent {}

/**
 * Parameterized Decorators
 */

function Pipe(value: number) {
  return function (constructor: Function) {
    console.log("Pipe decorator called with value:", value);
  };
}

@Pipe(100)
class CurrencyPipe {}

/**
 * Method Decorators
 */

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

class Cat {
  @Log
  say(message: string) {
    console.log("Cat says:", message);
  }
}

let cat = new Cat();
cat.say("Meow...");

/**
 * Accessor Decorators
 */

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Human {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let human = new Human("ankur", "atri");
console.log(human.fullName);
