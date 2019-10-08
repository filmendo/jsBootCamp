// Create an aray with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog

let todos = ['Do 1', 'Do 2', 'Do 3', 'Do 4', 'Do 5']

console.log(`You have ${todos.length} todos`)

// console.log(`First ToDo: ${todos[0]}`)
// console.log(`Second to last ToDo: ${todos[todos.length - 2]}`)

// ----- Exercise 2 -----

// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

//console.log(todos)
todos.splice(2, 1)
todos.push('new item')
todos.shift()
// console.log(todos)

// ----- Exercise 3 -----

// Print out list
// 1. The first item
// 2. The second item

todos.forEach(function(todo, index) {
  console.log(`${index + 1}. ${todo}`)
})

// ----- Exercise 4 -----

// Same as above
// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`)
// }
