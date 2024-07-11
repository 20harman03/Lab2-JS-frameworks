// First Function: Greet User
export function greetUser(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Second Function: Convert Celsius to Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Third Function: Calculate Factorial
export function calculateFactorial(num) {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return num * calculateFactorial(num - 1);
}

// Fourth Function: An advanced function of choice
export function advancedFunction(base, exponent) {
    return Math.pow(base, exponent);
}
