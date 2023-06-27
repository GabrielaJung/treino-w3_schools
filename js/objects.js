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
    lastName : "Doe",
    id       : 5566,
    fullName : function(){ return this.firstName + " " + this.lastName; }
  };

