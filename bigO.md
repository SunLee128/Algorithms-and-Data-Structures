# Big O Definition
## Time Complexity in Javascript

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

- O(1)
```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```
always 3 operations

- O(n)
```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
Number of operations is (eventually) bounded by a multiple of n (say, 10n)


- O(n)
```
function countUpAndDown(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down. Bye!");
}
```
Number of operations is (eventually) bounded by a multiple of n (say, 10n)

- o(n^2)
```
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
```
O(n) operation inside of an O(n) operation.

### Simplyfying Big O Expressions
#### Constants don't matter
O(2n) -> O(n)
O(500) -> O(1)
O(13n^2) -> O(n^2)

#### Smaller terms don't matter
O(n+10) -> O(n)
O(1000n +50) -> O(n)
O(n^2 +5n +8) -> O(n^2)

#### Big O Shorthands
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space Complexity

### Rule of Thumb
- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O( n), where n is the length (for arrays) or the number of keys (for objects)

