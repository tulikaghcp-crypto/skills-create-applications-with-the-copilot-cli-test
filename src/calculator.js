#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

function calculate(operation, ...numbers) {
  if (numbers.length < 2) {
    throw new Error('At least two numbers are required for calculation');
  }

  const validNumbers = numbers.every(num => !isNaN(num));
  if (!validNumbers) {
    throw new Error('All arguments must be valid numbers');
  }

  let result = parseFloat(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    const num = parseFloat(numbers[i]);

    switch (operation.toLowerCase()) {
      case 'add':
      case '+':
        result += num;
        break;
      case 'subtract':
      case '-':
        result -= num;
        break;
      case 'multiply':
      case '*':
        result *= num;
        break;
      case 'divide':
      case '/':
        if (num === 0) {
          throw new Error('Division by zero is not allowed');
        }
        result /= num;
        break;
      default:
        throw new Error(`Unknown operation: ${operation}. Supported operations: add (+), subtract (-), multiply (*), divide (/)`);
    }
  }

  return result;
}

// Main CLI logic
const args = process.argv.slice(2);

if (args.length < 3) {
  console.log('Usage: calculator.js <operation> <number1> <number2> [number3] ...');
  console.log('');
  console.log('Supported operations:');
  console.log('  add, +        : Addition');
  console.log('  subtract, -   : Subtraction');
  console.log('  multiply, *   : Multiplication');
  console.log('  divide, /     : Division');
  console.log('');
  console.log('Examples:');
  console.log('  calculator.js add 5 3');
  console.log('  calculator.js multiply 4 2 3');
  console.log('  calculator.js divide 100 5 2');
  process.exit(0);
}

try {
  const operation = args[0];
  const numbers = args.slice(1);
  const result = calculate(operation, ...numbers);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
