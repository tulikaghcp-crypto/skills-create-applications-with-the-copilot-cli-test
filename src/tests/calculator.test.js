const { calculate } = require('../calculator-lib');

describe('Calculator - Basic Operations', () => {
  // Addition tests
  describe('Addition', () => {
    test('should add two numbers: 2 + 3 = 5', () => {
      expect(calculate('add', 2, 3)).toBe(5);
    });

    test('should add using + operator: 2 + 3 = 5', () => {
      expect(calculate('+', 2, 3)).toBe(5);
    });

    test('should add multiple numbers: 2 + 3 + 5 = 10', () => {
      expect(calculate('add', 2, 3, 5)).toBe(10);
    });

    test('should add negative numbers: -5 + 10 = 5', () => {
      expect(calculate('add', -5, 10)).toBe(5);
    });

    test('should add decimal numbers: 2.5 + 3.5 = 6', () => {
      expect(calculate('add', 2.5, 3.5)).toBe(6);
    });

    test('should add zero: 5 + 0 = 5', () => {
      expect(calculate('add', 5, 0)).toBe(5);
    });
  });

  // Subtraction tests
  describe('Subtraction', () => {
    test('should subtract two numbers: 10 - 4 = 6', () => {
      expect(calculate('subtract', 10, 4)).toBe(6);
    });

    test('should subtract using - operator: 10 - 4 = 6', () => {
      expect(calculate('-', 10, 4)).toBe(6);
    });

    test('should subtract multiple numbers: 20 - 5 - 3 = 12', () => {
      expect(calculate('subtract', 20, 5, 3)).toBe(12);
    });

    test('should subtract resulting in negative: 5 - 10 = -5', () => {
      expect(calculate('subtract', 5, 10)).toBe(-5);
    });

    test('should subtract decimal numbers: 10.5 - 3.5 = 7', () => {
      expect(calculate('subtract', 10.5, 3.5)).toBe(7);
    });

    test('should subtract zero: 5 - 0 = 5', () => {
      expect(calculate('subtract', 5, 0)).toBe(5);
    });
  });

  // Multiplication tests
  describe('Multiplication', () => {
    test('should multiply two numbers: 45 * 2 = 90', () => {
      expect(calculate('multiply', 45, 2)).toBe(90);
    });

    test('should multiply using * operator: 45 * 2 = 90', () => {
      expect(calculate('*', 45, 2)).toBe(90);
    });

    test('should multiply multiple numbers: 2 * 3 * 4 = 24', () => {
      expect(calculate('multiply', 2, 3, 4)).toBe(24);
    });

    test('should multiply by zero: 5 * 0 = 0', () => {
      expect(calculate('multiply', 5, 0)).toBe(0);
    });

    test('should multiply negative numbers: -3 * 4 = -12', () => {
      expect(calculate('multiply', -3, 4)).toBe(-12);
    });

    test('should multiply decimal numbers: 2.5 * 4 = 10', () => {
      expect(calculate('multiply', 2.5, 4)).toBe(10);
    });

    test('should multiply two negative numbers: -3 * -4 = 12', () => {
      expect(calculate('multiply', -3, -4)).toBe(12);
    });
  });

  // Division tests
  describe('Division', () => {
    test('should divide two numbers: 20 / 5 = 4', () => {
      expect(calculate('divide', 20, 5)).toBe(4);
    });

    test('should divide using / operator: 20 / 5 = 4', () => {
      expect(calculate('/', 20, 5)).toBe(4);
    });

    test('should divide multiple numbers: 100 / 5 / 4 = 5', () => {
      expect(calculate('divide', 100, 5, 4)).toBe(5);
    });

    test('should divide resulting in decimal: 10 / 4 = 2.5', () => {
      expect(calculate('divide', 10, 4)).toBe(2.5);
    });

    test('should divide zero by number: 0 / 5 = 0', () => {
      expect(calculate('divide', 0, 5)).toBe(0);
    });

    test('should divide negative numbers: -20 / 4 = -5', () => {
      expect(calculate('divide', -20, 4)).toBe(-5);
    });

    test('should divide decimal numbers: 7.5 / 2.5 = 3', () => {
      expect(calculate('divide', 7.5, 2.5)).toBe(3);
    });
  });

  // Edge cases and error handling
  describe('Edge Cases and Error Handling', () => {
    test('should throw error for division by zero', () => {
      expect(() => calculate('divide', 10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for division by zero in chain', () => {
      expect(() => calculate('divide', 100, 10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for insufficient arguments', () => {
      expect(() => calculate('add', 5)).toThrow('At least two numbers are required for calculation');
    });

    test('should throw error with no numbers', () => {
      expect(() => calculate('add')).toThrow('At least two numbers are required for calculation');
    });

    test('should throw error for non-numeric input', () => {
      expect(() => calculate('add', 5, 'abc')).toThrow('All arguments must be valid numbers');
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate('unknown', 9, 2)).toThrow('Unknown operation: unknown');
    });

    test('should handle string numbers correctly: "5" + "3" = 8', () => {
      expect(calculate('add', '5', '3')).toBe(8);
    });

    test('should be case-insensitive for operation names', () => {
      expect(calculate('ADD', 2, 3)).toBe(5);
      expect(calculate('Subtract', 10, 4)).toBe(6);
      expect(calculate('MULTIPLY', 3, 4)).toBe(12);
      expect(calculate('DiViDe', 20, 4)).toBe(5);
    });
  });

  // Modulo tests
  describe('Modulo', () => {
    test('should perform modulo: 5 % 2 = 1', () => {
      expect(calculate('modulo', 5, 2)).toBe(1);
    });

    test('should perform modulo using % operator: 5 % 2 = 1', () => {
      expect(calculate('%', 5, 2)).toBe(1);
    });

    test('should perform modulo with larger numbers: 17 % 5 = 2', () => {
      expect(calculate('modulo', 17, 5)).toBe(2);
    });

    test('should perform modulo with sequential operations: 10 % 3 % 2 = 1', () => {
      expect(calculate('modulo', 10, 3, 2)).toBe(1);
    });

    test('should perform modulo with negative numbers: -10 % 3 = -1', () => {
      expect(calculate('modulo', -10, 3)).toBe(-1);
    });

    test('should perform modulo when result is zero: 10 % 5 = 0', () => {
      expect(calculate('modulo', 10, 5)).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => calculate('modulo', 10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should be case-insensitive for modulo: MODULO', () => {
      expect(calculate('MODULO', 10, 3)).toBe(1);
    });
  });

  // Power tests
  describe('Power (Exponentiation)', () => {
    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(calculate('power', 2, 3)).toBe(8);
    });

    test('should calculate power using ^ operator: 2 ^ 3 = 8', () => {
      expect(calculate('^', 2, 3)).toBe(8);
    });

    test('should calculate power using ** operator: 2 ** 3 = 8', () => {
      expect(calculate('**', 2, 3)).toBe(8);
    });

    test('should calculate power: 5 ^ 2 = 25', () => {
      expect(calculate('power', 5, 2)).toBe(25);
    });

    test('should calculate power with large exponent: 2 ^ 8 = 256', () => {
      expect(calculate('power', 2, 8)).toBe(256);
    });

    test('should calculate power with zero exponent: 5 ^ 0 = 1', () => {
      expect(calculate('power', 5, 0)).toBe(1);
    });

    test('should calculate power with negative exponent: 2 ^ -2 = 0.25', () => {
      expect(calculate('power', 2, -2)).toBe(0.25);
    });

    test('should calculate power with decimal base: 2.5 ^ 2 = 6.25', () => {
      expect(calculate('power', 2.5, 2)).toBe(6.25);
    });

    test('should calculate power with sequential operations: 2 ^ 3 ^ 2 = 64 (left-to-right)', () => {
      expect(calculate('power', 2, 3, 2)).toBe(64);
    });

    test('should be case-insensitive for power: POWER', () => {
      expect(calculate('POWER', 3, 4)).toBe(81);
    });
  });

  // Square Root tests
  describe('Square Root', () => {
    test('should calculate square root: √16 = 4', () => {
      expect(calculate('sqrt', 16)).toBe(4);
    });

    test('should calculate square root with decimal result: √2 ≈ 1.414', () => {
      expect(calculate('sqrt', 2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of perfect square: √25 = 5', () => {
      expect(calculate('sqrt', 25)).toBe(5);
    });

    test('should calculate square root of 1: √1 = 1', () => {
      expect(calculate('sqrt', 1)).toBe(1);
    });

    test('should calculate square root of zero: √0 = 0', () => {
      expect(calculate('sqrt', 0)).toBe(0);
    });

    test('should calculate square root with small decimal: √0.25 = 0.5', () => {
      expect(calculate('sqrt', 0.25)).toBe(0.5);
    });

    test('should calculate square root with large number: √10000 = 100', () => {
      expect(calculate('sqrt', 10000)).toBe(100);
    });

    test('should throw error for square root of negative number', () => {
      expect(() => calculate('sqrt', -4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for square root of negative decimal', () => {
      expect(() => calculate('sqrt', -2.5)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for square root with more than one argument', () => {
      expect(() => calculate('sqrt', 16, 2)).toThrow('Square root operation requires exactly one number');
    });

    test('should throw error for square root with no arguments', () => {
      expect(() => calculate('sqrt')).toThrow('Square root operation requires exactly one number');
    });

    test('should be case-insensitive for sqrt: SQRT', () => {
      expect(calculate('SQRT', 9)).toBe(3);
    });

    test('should accept alternative sqrt naming: square-root', () => {
      expect(calculate('square-root', 16)).toBe(4);
    });

    test('should accept alternative sqrt naming: squareroot', () => {
      expect(calculate('squareroot', 36)).toBe(6);
    });
  });

  // Extended Operations - Image Examples
  describe('Extended Operations Examples', () => {
    test('should calculate modulo with 5 % 2 = 1', () => {
      expect(calculate('modulo', 5, 2)).toBe(1);
    });

    test('should calculate power with 2 ^ 3 = 8', () => {
      expect(calculate('power', 2, 3)).toBe(8);
    });

    test('should calculate square root with √16 = 4', () => {
      expect(calculate('sqrt', 16)).toBe(4);
    });

    test('should handle modulo with decimal operands: 7.5 % 2 = 1.5', () => {
      expect(calculate('modulo', 7.5, 2)).toBe(1.5);
    });

    test('should handle power with decimal base: 1.5 ^ 2 = 2.25', () => {
      expect(calculate('power', 1.5, 2)).toBe(2.25);
    });

    test('should handle square root with decimal result: √2 ≈ 1.414', () => {
      expect(calculate('sqrt', 2)).toBeCloseTo(1.414, 3);
    });

    test('should handle fractional powers: 4 ^ 0.5 = 2', () => {
      expect(calculate('power', 4, 0.5)).toBe(2);
    });

    test('should handle modulo with larger numbers: 23 % 5 = 3', () => {
      expect(calculate('modulo', 23, 5)).toBe(3);
    });

    test('should handle power with larger exponents: 3 ^ 4 = 81', () => {
      expect(calculate('power', 3, 4)).toBe(81);
    });

    test('should handle square root of perfect squares: √36 = 6', () => {
      expect(calculate('sqrt', 36)).toBe(6);
    });
  });

  // Complex scenarios combining operations
  describe('Complex Scenarios', () => {
    test('should handle multiple additions: 1 + 2 + 3 + 4 + 5 = 15', () => {
      expect(calculate('add', 1, 2, 3, 4, 5)).toBe(15);
    });

    test('should handle multiple subtractions: 100 - 10 - 20 - 5 = 65', () => {
      expect(calculate('subtract', 100, 10, 20, 5)).toBe(65);
    });

    test('should handle multiple multiplications: 2 * 3 * 4 * 5 = 120', () => {
      expect(calculate('multiply', 2, 3, 4, 5)).toBe(120);
    });

    test('should handle sequential divisions: 1000 / 10 / 5 / 2 = 10', () => {
      expect(calculate('divide', 1000, 10, 5, 2)).toBe(10);
    });

    test('should handle large numbers', () => {
      expect(calculate('multiply', 1000000, 2)).toBe(2000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(calculate('add', 0.0001, 0.0002)).toBeCloseTo(0.0003, 5);
    });

    test('should chain modulo operations: 100 % 7 % 3 = 2', () => {
      expect(calculate('modulo', 100, 7, 3)).toBe(2);
    });

    test('should chain power operations: 2 ^ 2 ^ 3 = 64 (left-to-right)', () => {
      expect(calculate('power', 2, 2, 3)).toBe(64);
    });

    test('should handle power with very large exponents: 10 ^ 5 = 100000', () => {
      expect(calculate('power', 10, 5)).toBe(100000);
    });

    test('should handle modulo with zero result: 15 % 5 = 0', () => {
      expect(calculate('modulo', 15, 5)).toBe(0);
    });

    test('should handle square root of large numbers: √1000000 = 1000', () => {
      expect(calculate('sqrt', 1000000)).toBe(1000);
    });
  });
});
