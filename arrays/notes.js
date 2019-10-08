const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My First Note')

//notes.splice(1, 1, 'new second item')

notes[2] = 'New note 3'

notes.forEach(function(item, index) {
  console.log(index)
  console.log(item)
})

console.log(notes)
// console.log(notes.length)
// console.log(notes[notes.length - 1])

// Counting... 1
for (let count = 0; count <= 2; count++) {
  console.log(count)
}

for (let count = 0; count < notes.length; count++) {
  console.log(notes[count])
}
