// No 1.
// function isPalindrome(str) {
//     if (typeof str !== 'string') 
//         {console.log ('Data wajib string');
//         return false;}

//     const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
//     const reversed = cleaned.split('').reverse().join('');
//     console.log(reversed);
//     console.log(cleaned);
//     return cleaned === reversed;
// }

// console.log(isPalindrome('No Lemon, No Melon'));  // Output: true
// console.log(isPalindrome(1));  // Output: false
// validasi data wajib string

//No 2.
function findMax(arr) {
    if (!Array.isArray(arr)) {
        console.log('Data wajib array');
        return false;
    }

    if (!arr.every(item => typeof item === 'number')) { 
        console.log('Data wajib number');
        return false;
    }

    return arr.reduce((largest, current) => //reduce adalah alat bantu yang membandingkan isi array satu per satu, lalu menyimpan satu nilai akhir.
        (current > largest ? current : largest), arr[0]);
}


console.log(findMax([17, 10, 28, 35, 5]));
// kasih penjelasan reduce buat apa, bikin validasi array, yang masuk dalam perhitungan hanya integer

//No 3.
// function fizzBuzz(n) {
//     if (typeof n !== 'number') {
//         console.log('Data wajib number');
//         return false;
//     }
//     for (let i = 1; i <= n; i++) {
//         let output = '';

//         if (i % 3 === 0) output += 'Fizz';
//         if (i % 5 === 0) output += 'Buzz';

//         if (output === '') output = i;

//         console.log(output);
//     }
// }

// fizzBuzz(15);
//datanya harus number, validasi

// No 4.
// function reverseString(str){
//   let reverse = "";
//   for(let i = str.length - 1; i >= 0; i--){
//     reverse += str[i];
//   }
//   return reverse;
// }

// console.log(reverseString([1,2,3,4]));

// //No 5.
// function factorial(n) {
//     if (typeof n !== 'number') {
//         console.log('Data wajib number');
//         return false;
//     }
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }

// console.log(factorial(5));
//Pertama, mari kita memahami apa itu faktorial. Dalam matematika, faktorial dari sebuah bilangan bulat non-negatif n, 
//yang ditulis sebagai n!, adalah hasil perkalian dari semua bilangan bulat positif kurang dari atau sama dengan n. 
//Misalnya, faktorial dari 5 (ditulis sebagai 5!) adalah 5 x 4 x 3 x 2 x 1, yang hasilnya adalah 120.
//-----
// datanya harus number, validasi, kasih penjelasan tentang apa itu factorial, bikin validasi jika datanya bukan number, 