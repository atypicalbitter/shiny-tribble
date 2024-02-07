let myAge = 28;
// This line of code is a variable and is set to equal my age as a number
let earlyYears = 2;
// This line of code is also a variable which will potentially change, this is why it is a 'let' variable not a 'const'
earlyYears *= 10.5 
// I have used the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassigned it to earlyYears.
let laterYears = myAge -= 2;
//+=: Adds and assigns a new value to a variable.
//! -=: Subtracts and assigns a new value to a variable.
//! *=: Multiplies and assigns a new value to a variable.
//! /=: Divides and assigns a new value to a variable.
//! %=: Assigns the returned remainder (modulo) as a new value to a variable.
//! **=: Assigns the left operand raised to the power of the right operand.
console.log(earlyYears);
console.log(laterYears);
//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears; 
console.log(myAgeInDogYears);
//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName. The toLowerCase method returns a string with all lowercase letters.
const myName = 'MATT'.toLowerCase(); 
console.log('My name is'+ ' ' + myName + ' ' + 'and I am ' + myAge + ' years old, which is' + ' ' + myAgeInDogYears + ' ' + 'in dog years!'); 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const kelvin = 293; 
// The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.
let celsius = kelvin - 273; 
// Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.
console.log(celsius);
let fahrenheit = celsius * (9/5) + 32; 
fahrenheit = Math.floor(fahrenheit);
// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
console.log(`The temp is ${fahrenheit} degrees Fahrenheit. Also using the Dollar sign with backticks is called STRING INTERPOLATION`);

let newton = celsius *(33/100); 
newton = Math.floor(newton); 
console.log(`This is the newton value ${newton}`);
// If you’d like extra practice, try this:

// Convert celsius to the Newton scale using the equation below
// Newton = Celsius * (33/100)

// Round down the Newton temperature using the .floor() method
// Use console.log and string interpolation to log the temperature in newton to the console