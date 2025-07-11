/*
We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

    Zero is even.

    One is odd.

    For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(n) {
  n = Math.abs(n);
  // Base case: if n is 0, it is even
  if (n === 0) {
    return true;
  }
  // Base case: if n is 1, it is odd
  if (n === 1) {
    return false;
  }
  // Recursive case: reduce n by 2 and check again
  return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));