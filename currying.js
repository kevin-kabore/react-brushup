/**
 *  Currying
 *  - Translating the evaluation of a function that takes MULTIPLE arguments
 *  - and evaluating a SEQUENCE of functions that take ONE argument
 *  - Function that takes multiple parameters, into one parameter
 *  - Makes REUSING functions possible, like methods on components
 *
 */

const multiply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
multiply(3, 4); // => 12
curriedMultiply(3, 4); // => [Function]
curriedMultiply(3)(4); // => 12

// Useful because can create multiple utility functions from this
const curriedMultiplyBy5 = curriedMultiply(5);

// A long time later
curriedMultiplyBy5(10); // => 50;
