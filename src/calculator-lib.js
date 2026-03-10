/**
 * Calculator Library
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

module.exports = { calculate };
