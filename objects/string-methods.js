let name = ' Andrew Mead '

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Include method
let password = 'abc123asdf098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())

// isValidPassword
// length is more than 8 - and it doesn't contain the word password

let isValidPassword = function(password) {
  let isValid = password.length > 8 && !password.includes('password')
  return isValid
}

console.log(isValidPassword('asdf1234'))
console.log(isValidPassword('asdf12345'))
console.log(isValidPassword('asdfasdfasdfpassword'))
