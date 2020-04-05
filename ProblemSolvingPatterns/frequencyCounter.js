/* Frequency Counters
This pattern uses objects or sets to collect values/frequencies of values
This can often avoid the need for nested loops or O(N^2) operations with arrays / strings
*/

/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// Naive Solution, Time Complexity - O(N^2)
// function same (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// same(
//   [
//     1,
//     2,
//     3,
//     2
//   ],
//   [
//     9,
//     1,
//     4,
//     4
//   ]
// );

//Refactored, Time Complexity - O(n)
function same (arr1, arr2) {
  //check the length
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  //creating an object to count the same number of items for arr1
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  //creating an object to count the same number of items for arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  //matching key and the number of occurrence in arr1 and arr2.
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

/* Anagrams
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
*/

function validAnagram (first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm');

/* sameFrequency
Given two positive integers, find out if the two numbers have the same frequency of digits. */

function sameFrequency (num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
  let countNum1 = {};
  let countNum2 = {};
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1] || 0) + 1;
  }
  for (let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
