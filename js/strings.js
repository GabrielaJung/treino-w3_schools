/*
Code	    Result	    Description
\'	        '	        Single quote
\"	        "	        Double quote
\\	        \	        Backslash
*/

//examples
const text = 'It\'s alright, you can choice:'
const options = "rice \\ beans"
const choice = "I choice \'beans\'"

// console.log( text, options, choice)

/*
Code	Result

\b	    Backspace
\f	    Form Feed
\n	    New Line
\r	    Carriage Return
\t	    Horizontal Tabulator
\v	    Vertical Tabulator
*/

const text2 = 'It\'s alright, you can choice:\n'
const options2 = "\trice \\ beans\n"
// console.log( text2, options2, choice)

// ------------------- String Methods:
// - String length
// - String slice() - (start, end)
// - String substring() - (start, end)
// - String substr() - (start, length)
// - String replace() - returns a new string; replaces only the first match(flag //g);  is case sensitive(flag //i)
// - String replaceAll()
// - String toUpperCase() - AAAAA
// - String toLowerCase() - aaaaa
// - String concat()
// - String trim() - removes whitespace from both sides of a string
// - String trimStart()
// - String trimEnd()
// - String padStart()
// - String padEnd()
// - String split() - converts to an array, breaking by param
// extracting string characters:
// - String charAt() -  returns the character at a specified index (position) in a string
// - String charCodeAt() - returns the unicode at a specified index in a string

const cep = '9090' // 9090
const padded = cep.padEnd(8,"0") // 90900000
// console.log(cep + ', padded -> ' + padded)

// A string is not an array!
const hello = 'Hello World!'
const charAt = hello.charAt(0) // H
const charCodeAt = hello.charCodeAt(0) // 72

hello[0] = "A";    // Gives no error, but does not work

// A string can be converted to an array with the split method
const phrase = 'Oh my god, this product is | 50% | off!'
const brakSpaces = phrase.split(' ') 
// (10) breakSpaces = ['Oh', 'my', 'god,', 'this', 'product', 'is', '|', '50%', '|', 'off!']

const breakComma = phrase.split(',')
// (2) breakComma = ['Oh my god,', 'this product is | 50% | off!']

const breakPipe = phrase.split('|')
// (3) breakPipe = ['Oh my god, this product is ', ' 50% ', ' off!']

const lines = 'line 1\nline 2\nline 3'
const breakLines = lines.split('\n')
// (3) breakLines = ['line 1', 'line 2', 'line 3']

const justHello = 'Hello'
const breakAll = justHello.split('')
// (5) breakAll = ['H', 'e', 'l', 'l', 'o']

// STRING METHODS:
// String indexOf() =>  returns the index (position) the first occurrence of a string in a string   \ return -1 if nothing's found
// String lastIndexOf() => returns the index of the last occurrence of a specified text in a string / return -1 if nothing's found
// String search() => searches a string for a string (or a regular expression) and returns the position of the match.
// String match() => returns an array containing the results of matching (1º) a string against a string (or a regular expression). //g to global matches, //gi to global and without case sensitive
// String matchAll() => returns all matches .
// String includes() => boolean, returns true if a string includes a specified value. You can set an inicial position. Is case sensitive!
// String startsWith() => boolean, returns true if a string begins with a specified value. You can set an initial position. Is case sentitive!
// String endsWith() => boolean,  returns true if a string ends with a specified value. You can set an limit. Is case sensitive!


// differences between indexOf and search:
// - The search() method cannot take a second start position argument. The indexOf() can.
// - The indexOf() method cannot take powerful search values (regular expressions). The search() can.


console.log(text.includes('alright', 5)) //true
console.log(text.endsWith('alright', 12)) //true