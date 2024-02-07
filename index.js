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

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let today = 'Tuesday'; 
let time = '10:30pm'; 
console.log(`The time is ${time} and the day is ${today}.`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function multiple (number) {
    // function multiple(number): This line defines a function named multiple that takes a parameter called number. Functions are blocks of reusable code.
    if (number <= 0) {
        return false; 
        // if (number <= 0): This is a conditional statement. It checks whether the provided number is less than or equal to 0.
// return false;: If the condition is true (number is less than or equal to 0), the function returns false, indicating that the number is not valid (since it should be a positive number).
    }


return (number % 3 === 0) || (number % 7 === 0);
}
// return (number % 3 === 0) || (number % 7 === 0);: This line returns true if the number is a multiple of 3 or 7. The % operator calculates the remainder when number is divided by 3 or 7.

var testNumb = 1000; 
// const testNum = 1000;: This line declares a constant variable named testNum and assigns it the value 1000.
if (multiple(testNumb)){
    // if (multiple(testNum)) { ... }: This checks if the result of calling the multiple function with the argument testNum is true.
    console.log(`${testNumb} is a multiple of 3 or 7!.`);
    // console.log(${testNum} is a multiple of 3 or 7!.');: If the condition is true, this logs a message indicating that testNum` is a multiple of 3 or 7.
 } else {
    // else { console.log(The number ${testNum} is not a multiple of 3 or 7.'); }: If the condition is false, this logs a message indicating that testNum` is not a multiple of 3 or 7.
console.log(` The number ${testNumb} is not a multiple of 3 or 7.`);
    }
    // So, in summary, this code checks if a given positive number (testNum in this case) is a multiple of 3 or 7 and prints a corresponding message. If testNum is 1000, it will output that 1000 is not a multiple of 3 or 7.


    function multiple (number) {
        if (number <= 0) {
            return false; 
        }
    return (number % 3 === 0) || (number % 7 === 0);
    }
    const testNum = 3; 
    if (multiple(testNum)){
        console.log(`This is now the full code snippet. ${testNum} is a multiple of 3 or 7!.`);
     } else {
    console.log(`This is now the full code snippet. The number ${testNum} is not a multiple of 3 or 7.`);
        }



