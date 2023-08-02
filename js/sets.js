// Collection of unique values.

// Each value can only occur once in a Set.

// keyed collection => uses keys and has elements that can't be iterable in insertion order

// Methods: 
new Set //=> creates a new set
add() //=> Adds a new element to the Set
delete() //=> Removes an element from a Set
has() //=> Returns true if a value exists in the Set
forEach() //=> Invokes a callback for each element in the Set
values() //=> Returns an iterator with all the values in a Set
clear() //=> removes all elemenst of the set

// Property:
size //=> Returns the number of elements in a Set

// Creating a Set

const fset = new Set([1, 2, 3]) // {1, 2, 3}

fset.has(1) //true
fset.has(0) //false
fset.has(4) //false

fset.add(4)

fset.has(4) //true