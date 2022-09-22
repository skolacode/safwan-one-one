// Non-Premitive data
// - data yang kita tak boleh compare
const array = []
const obj = {}

const array1 = [1,2,3]
const array2 = [1,2,3]

const object1 = {name: 'burhan', title: 'tutor'}
const object2 = {name: 'burhan', title: 'tutor'}

console.log('arr >', array1 === array2)
console.log('obj >', object1 === object2)
console.log('obj in >', object1.name === object2.name)

/**
 * = bermasksud, set a value
 * == bermaksud, compare a variable
 * === bermaksud, compare a variable including it's data type
**/

console.log('== >>', 1 == "1")
console.log('=== >>', 1 === "1")

// Premitive data
const a = "day 3"
const b = "day 3 "

console.log("a and b, ", a === b)

// START ---
// declaration type
// =======
// var - sudah tidak di gunakan
// let - sangat di galakkan
//   - di gunakan untuk data yang berubah ubah
// const - sangat di galakkan
//   - di gunakan untuk data yang tidak berubah

let name = ""

name = "Safwan"

const nameTwo = ""

const myArr = ["a"]

console.log('myArr before: ', myArr)

myArr.push("Hello")
console.log('myArr after: ', myArr)

// const array and obj


// START ---
// functions
// ES5 / ES6

// ES5
function myFunc() {
  return "hi"
}

// ES6
const myFuncTwo = () => "hi"

// what is parameters

const myFirstFunc = (name = "", age) => {
  // ES5
  // console.log('my name is '+name)
  
  // ES6 - backtick
  console.log(`my name is ${name} i am ${age}`)
}

myFirstFunc("Safwan", 28)
myFirstFunc("Izz", 30)
myFirstFunc("Anis", 29)
myFirstFunc(29)

// function with obj params
const myFirstParamObjFunc = ({ name = "NULL", age }) => {
  // ES5
  // console.log('my name is '+name)
  
  // ES6 - backtick
  console.log(`my name is ${name} i am ${age}`)
}

myFirstParamObjFunc({
  age: "28",
  name: "Rock"
})


// Requirement

/**
 * 1. create a function that accept 2 parameters
 * 2. Working Place & Distance
 * 3. Display the params in a sentence
**/ 
