/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const arr = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    const newStr = str.toLowerCase(); // Creates new arr with all lowercase
    for(let i=0; i<newStr.length; i++){
      if(arr.includes(newStr[i])){ // if arr includes newStr[i] -> Count++;
        count++;
      }
    }
    return count;
}
module.exports = countVowels;