#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Power (^ or **)
 * - Square Root (sqrt)
 */

const { calculate } = require('./calculator-lib');

// Main CLI logic
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: calculator.js <operation> <number1> [number2] ...');
  console.log('');
  console.log('Supported operations:');
  console.log('  add, +        : Addition (requires at least 2 numbers)');
  console.log('  subtract, -   : Subtraction (requires at least 2 numbers)');
  console.log('  multiply, *   : Multiplication (requires at least 2 numbers)');
  console.log('  divide, /     : Division (requires at least 2 numbers)');
  console.log('  modulo, %     : Modulo/Remainder (requires at least 2 numbers)');
  console.log('  power, ^, ** : Exponentiation (requires at least 2 numbers)');
  console.log('  sqrt          : Square Root (requires exactly 1 number)');
  console.log('');
  console.log('Examples:');
  console.log('  calculator.js add 5 3');
  console.log('  calculator.js multiply 4 2 3');
  console.log('  calculator.js modulo 10 3');
  console.log('  calculator.js power 2 8');
  console.log('  calculator.js sqrt 16');
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
