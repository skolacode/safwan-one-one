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

// Foreach and Map

const myArr2 = ["a","b", "c", "d", "e"]

console.log('\n')

const isReturn = myArr2.forEach((el, index) => {
  console.log('index is > ', index)
  console.log('el is > ', el)
})

console.log('is: ', isReturn)

const newArr = myArr2.map((el, index) => 
 el += "_+" 
)

console.log('is: ', newArr)


// -- While loop
// -- do while
// -- Switch
