/* 
   .map(): iterates over each item in the array
        - takes a callback((element, index))
        - returns a new array
        - Initial array is intact
*/

const myArray = [1,2,3,4];
console.log(myArray.map(el => el +1)); // [ 2, 3, 4, 5 ]
console.log(myArray.map(() => "b"));   // [ 'b', 'b', 'b', 'b' ]
console.log(myArray);                   // [ 1, 2, 3, 4 ]


/* 
   .filter(): iterates over each item in the array
        - takes a callback((element, index))
            - callback returns true or false
        - returns a new array
        - everything that returns true from the callback in the new array
        - Initial array is intact
*/
const myFilterArray = [2, 6, 9, 12, 1];
console.log(myFilterArray.filter(el => el < 9)); // [ 2, 6, 1 ]
console.log(myFilterArray)                   // [ 2, 6, 9, 12, 1 ]


/*
    .includes(val, startIndex): returns bool, checks if argument exists in array
        - second argument is index from which we start searching
        - Only works on the 6 primitive types, not objects or functions
            - string, boolean, null, undefined, number, symbol
*/

const myIncludeArray = [1, 2, 3, 4, 5];
myIncludeArray.includes(2) // true
myIncludeArray.includes(2, 3) // false


