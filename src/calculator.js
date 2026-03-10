#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const { calculate } = require('./calculator-lib');

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
