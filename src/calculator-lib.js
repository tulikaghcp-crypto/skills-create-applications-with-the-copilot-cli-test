/**
 * Calculator Library
 * Supports the following arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Power (^, **)
 * - Square Root (sqrt)
 */

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function calculate(operation, ...numbers) {
  const op = operation.toLowerCase();
  
  // Handle square root separately (only needs one argument)
  if (op === 'sqrt' || op === 'square-root' || op === 'squareroot') {
    if (numbers.length !== 1) {
      throw new Error('Square root operation requires exactly one number');
    }
    const n = parseFloat(numbers[0]);
    if (isNaN(n)) {
      throw new Error('Argument must be a valid number');
    }
    return squareRoot(n);
  }

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

    switch (op) {
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
      case 'modulo':
      case '%':
        result = modulo(result, num);
        break;
      case 'power':
      case '^':
      case '**':
        result = power(result, num);
        break;
      default:
        throw new Error(`Unknown operation: ${operation}. Supported operations: add (+), subtract (-), multiply (*), divide (/), modulo (%), power (^ or **), sqrt`);
    }
  }

  return result;
}

module.exports = { calculate, modulo, power, squareRoot };
