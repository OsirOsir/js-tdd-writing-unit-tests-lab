// Your tests here
import {isPalindrome} from '../utils';

describe('isPalindrome', () => {
  test('returns true for a simple palindrome like "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome like "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for a palindrome with mixed case like "RaceCar"', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws an error if the input contains non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar123')).toThrow('Input must contain only alphabetic characters');
  });

  test('throws an error if the input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});