// - Loop

// -- For loop (forEach, map)
// basic for loop

// what is for loop
// - for loop is to ITERATE the items inside and array or object

const myArr = [1,2,3,4,5,6]

// 6 < 6 = false

for(let i = 0; i < myArr.length; i++) {
  console.log('what is i? ', i)
  console.log('index: ', i, ' > ', myArr[i])
}

console.log('\nget index>>')
for (let x in myArr) {
  console.log('x: ', x)
}

console.log('\nget element>>')
for (let x of myArr) {
  console.log('x: ', x)
}



// -- While loop
// -- do while
// -- Switch
