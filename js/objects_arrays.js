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
// console.log(person.name);

// 2
// console.log(person['age'])

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
const fruitsObj = { one: 'banana', two: 'orange', three: 'apple' }

// console.log(Array.isArray(fruits)) // true
// console.log(fruits instanceof Array) // true

// console.log(Array.isArray(fruitsObj)) // false
// console.log(fruitsObj instanceof Array) // false

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

const points = [40, 100, 1, 5, 25, 10, 40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b }); // => 1, 5, 10, 25, 40, 100

// Math.max.apply(null, arr) =>  to find the highest number in an array:
// Math.min.apply(null, arr) =>  to find the lowest number in an array:


// Array iteraction => operate on every array item

// forEach() => calls a function once for each array element.
points.forEach(point => point + 10)

// map() => creates a new array by performing a function on each array element
// => doesn't execute the func for arr elements without values
// => doesn't change the original array
const pointsTwice = points.map(point => point * 2)
// console.log(pointsTwice)

// flatMap() => first: map all elements of an array, then creates a new array by *flattening the array (*achatando)
const pointsDouble = points.flatMap(point => point * 2)
// console.log(pointsDouble)

const words = ['Hello', 'world', 'JS'];
const letters = words.flatMap(word => word.split(''));
// console.log(letters);
// saída: 
/* [
  'H', 'e', 'l', 'l',
  'o', 'w', 'o', 'r',
  'l', 'd', 'J', 'S'
] */

const letters2 = words.map(word => word.split(''));
// console.log(letters2);
// saída:
/* [
  [ 'H', 'e', 'l', 'l', 'o' ],
  [ 'w', 'o', 'r', 'l', 'd' ],
  [ 'J', 'S' ]
] */

// Array filter() => creates a new array with array elements that pass a test
const biggers = points.filter(point => point >= 40)
// console.log(biggers); // [ 40, 40, 100, 100 ]

// Array reduce() => runs a function on each array element to produce (reduce it to) a single value
// works from left-to-right in the array. 
// It doesn't reduce the original array!
const sum = points.reduce((total, value) => total + value)
// console.log(sum) // => 362

// @params: total (initial value), value, index, array.

// accepting an initial value:
const sum2 = points.reduce((total, value) => { return total + value }, 50)
// console.log(sum2) // => 412

// Array reduceRight() => reduces from right-to-left

// Array every() => checks if all array values pass a test
// boolean. 
// @params: value, index, array
const allOver = points.every(value => value > 18)
// console.log(allOver) // false

const people = [
  { name: 'joe', age: 35, language: 'pt' },
  { name: 'alice', age: 20, language: 'pt' },
  { name: 'betina', age: 30, language: 'pt' },
  { name: 'carlos', age: 34, language: 'pt' },
  { name: 'debora', age: 28, language: 'pt' },
]
let allPt = people.every(person => person.language = 'pt')
// console.log(allPt) // true

people.push({ name: 'evelyn', age: 24, language: 'fr' })
people.push({ name: 'flamengo', age: 26, language: 'es' })
allPt = people.every(person => person.language = 'pt')
// console.log(people) // evelyn and flamengo's languages = 'pt'
// console.log(allPt) // true

// Array some() => checks if some array values pass a test // => boolean
let some = points.some(point => point = 100)
// console.log(some) // true

some = points.some(point => point > 100)
// console.log(some) // false

// Array indexOf() => searches an array for an element value and returns its position
const colors = ['red', 'blue', 'green', 'blue']
let index = colors.indexOf('blue') + 1;
// console.log(index) // position 2

// Array lastIndexOf()
index = colors.lastIndexOf('blue') + 1
// console.log(index) // position 4
// @params: item, start

//Array find() => returns the value of the first element that passes a test function
let finded = colors.find(color => color.includes('b'))
// console.log(finded) // blue
// console.log(colors.indexOf(finded)) // 1
// @params: value, index, array

// Array findIndex() => returns the index of the first array element that passes a test function
let indexFinded = colors.findIndex(color => color.includes('g'))
// console.log(indexFinded) // 2

// Array.from() => returns an array object from any object with a length property of any iterable object
let arrayLetters = Array.from(words[0])
// console.log(arrayLetters) // [ 'H', 'e', 'l', 'l', 'o' ]

//Array keys() => returns an Array Iterator object with the keys of the array
let keys = colors.keys()
// console.log(keys)

let i = "";
for (let x of keys) {
  i += x + "\t";
}
// console.log(i)
/*
saída: 
0       1       2       3
*/

// Array entries() => returns an Array Iterator object with key/value pairs
// doesn't change the original array
const fruitsEntries = fruits.entries();

i = []
for (let x of fruitsEntries){ i.push(x) }
// console.log(i)
/* saída: 
[
  [ 0, 'Banana' ],
  [ 1, 'Orange' ],
  [ 2, 'Lemon' ], 
  [ 3, 'Kiwi' ],  
  [ 4, 'Apple' ]  
]
*/

// Array includes() => allows to check for NaN values. Unlike Array.indexOf()
// boolean
let includes = colors.includes('green')
// console.log(includes) // true

includes = colors.includes('purple')
// console.log(includes) // false

// Array spread (...) => The ... operator expands an iterable (like an array) into more elements
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year)
/* saída:
[
  'Jan', 'Feb', 'Mar',
  'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'May' 
]
*/
