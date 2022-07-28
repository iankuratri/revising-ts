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
