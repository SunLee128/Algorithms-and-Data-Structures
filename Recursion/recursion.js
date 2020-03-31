/* 
Two essential parts of a recursive function
Base Case
Different Input */

function countDown (num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(100);

function sumRange (num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(10));

function factorial (num) {
  if (num === 1) return 1;
  return num * factorial(num);
}

/* Power */
function power (base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

/* Factorial 
Fuction which accepts a number and returns the factorial of the number.
factorial(1) 1 //1*1
factorial(2) 2 // 2*1
factorial(4) 24 // 4*3*2*1
factorial(7) 5040

*/
function factorial (x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(4)); //24

// PRODUCT OF ARRAY SOLUTION
function productOfArray (arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
console.log(
  productOfArray([
    1,
    2,
    3
  ])
); // 6

// RECURSIVE RANGE SOLUTION
function recursiveRange (x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

console.log(recursiveRange(6)); //21 1+2+3+4+5+6

// FIBONACCI SOLUTION - accpets a number and returns the nth number in the Fibonacci sequence. 1,1,2,3,5,8,...
function fib (n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(4)); //3
