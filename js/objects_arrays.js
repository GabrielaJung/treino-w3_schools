// Example: cars {}

// All cars have the same properties, but the property values differ from car to car.

// All cars have the same methods, but the methods are performed at different times.

/* Common practice:
declare objects with const */

// sintax:
const object = {
  property: 'propertyValue 1',
  property1: 'propertyValue 2',
  property2: 'propertyValue 3',
}

// example:
const person = {
  name: "John Doe",
  age: 50,
  eyeColor: "blue"
};

// -------

// Ways to access the properties:
// objectName.propertyName || objectName["propertyName"]

// examples:
// 1
console.log(person.name);

// 2
console.log(person['age'])

// -------

// Functions in objects:

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () { return this.firstName + " " + this.lastName; }
};

// -------

// The Difference Between Arrays and Objects
//
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.

// typeof array returns object
// you can use Array.isArray(arr) to know if it's an array or not

const fruits = ["Banana", "Orange", "Apple"];
const fruitsObj = { one: 'banana', two: 'orange', three: 'apple'}

console.log(Array.isArray(fruits)) // true
console.log(fruits instanceof Array) // true

console.log(Array.isArray(fruitsObj)) // false
console.log(fruitsObj instanceof Array) // false

// When to use arrays or objects?
//
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// -------

// Array methods
//
// Array.length => length of array
// Array.toString() => transforms array to string, separeted by commons ','
// Array.pop() => removes the last element from an array, returning this value. ex.: let fruit = fruits.pop() => returns 'apple'
// Array.push() => adds a new element to an array (at the end). ex.: fruits.push('kiwi') => fruits = ['banana', 'orange', 'apple', 'kiwi']
// Array.shift() => removes the first array element and 'shifts' all other elements to a lower index. returns the value removed => let fruit = fruits.shift() => fruits = 'banana'
// Array.unshift() => adds a new element to an array (at the beginning), ans 'unshifts' other elements
// Array.join() => the same as toString(), but you decide what will separate => ex.: fruits.join(-) returns 'banana-orange-apple'
// Array delete => using delete leaves undefined holes in the array. 
// Array.concat() => creates a new array by concatenating existing arrays
// Array.flat() => creates a new array with sub-array elements concatenated to a specified depth.
// Array.splice() => adds new items to an array.
// Array.slice() => slices out a piece of an array.

// splice:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
fruits.splice(2, 0, "Lemon", "Kiwi");


// Array sort

// sort() => sorts an array alphabetically
// reverse() => sorts an array alphabetically reverse

// if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1"

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b}); // => 1, 5, 10, 25, 40, 100

// Math.max.apply(null, arr) =>  to find the highest number in an array:
// Math.min.apply(null, arr) =>  to find the lowest number in an array: