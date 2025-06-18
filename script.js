// No 1.
// function isPalindrome (str) {
//     const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
//     const reversed = cleaned.split('').reverse().join('');
//     return cleaned === reversed;
// }

// console.log(isAdvancedPalindrome('No Lemon, No Melon'));  // Output: true
// console.log(isAdvancedPalindrome('No apple, no apple'));  // Output: false

//No 2.
// function findMax(arr) {
//     return arr.reduce((largest, current) =>
//         (current > largest ? current : largest), arr[0]);
// }

// console.log(findMax([10, 25, 17, 99, 3]));

//No 3.
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     let output = '';

//     if (i % 3 === 0) output += 'Fizz';
//     if (i % 5 === 0) output += 'Buzz';

//     if (output === '') output = i;

//     console.log(output);
//   }
// }

// fizzBuzz(15);

// No 4.
// function reverseString(str){
//   let reverse = "";
//   for(let i = str.length - 1; i >= 0; i--){
//     reverse += str[i];
//   }
//   return reverse;
// }

// console.log(reverseString("javascript"));

//No 5.
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial(5));
