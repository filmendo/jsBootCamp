// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log('Welcome User!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


// Challenge

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
  //let tempK = (fahrenheit + 459.67) * 5 / 9
}

console.log(convertFahrenheitToCelsius(32))
console.log(convertFahrenheitToCelsius(68))