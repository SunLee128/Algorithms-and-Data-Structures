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
