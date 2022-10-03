// Learn about helper / utils functions
// - we don't want to re-invent the wheel
// - where is the documentation to find all this helper or utils function?

// Function to learn today
// All are ARRAY Family (array helper functions)

// - at - DONE
const array1 = [5, 12, 8, 130, 44];

// -- instead of using array lenght, we can use "at" to get the last element
console.log(array1[array1-length - 1])
console.log(array1.at(-1))

// - Sort - 
// ES6
console.log( array1.sort())

// Inline function
console.log('inline func >', array1.sort((a, b) => a-b) )

// Call a function
console.log('ES5 function >', array1.sort(sortMe) )
function sortMe(a,b) {
  return a-b
}

// ES6 - shorthand
const sortMe6 = (a,b) => a-b
console.log('ES6 - shorthand >', array1.sort(sortMe6) )


// ES6 - longhand
const sortMe6long = (a,b) => {
  return a-b
}
console.log('ES6 - longhand > ', array1.sort(sortMe6long) )



// - Find
const findMe = (indexElement) => {
  const testRules = indexElement - 1 
  
  if(testRules === 14) {
    return indexElement
  }
}

const found = array1.find(findMe);
console.log('FIND >', found);

const found2 = array1.find((element) => element > 10);
console.log('FIND2 >', found2);



// - Filter
const words = [1,2,3,4,10,15,13,5,6];


const result = words.filter(element => element > 10);

console.log(result);

// - Join

// - Loop
// -- For loop (forEach, map)
// -- While loop
// -- do while
// -- Switch

