/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

module.exports = isPalindrome;

// [^a-zA-Z0-9] { ^ means Includes } {g -> global}
// If it includes a-z A-Z 0-9 dont remove, Remove everthing else