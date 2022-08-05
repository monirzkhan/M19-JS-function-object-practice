///একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।
 
//ans: 
var number = 13;

for (i = 1; i <= 10; i++){
    var result = number * i;
    console.log(`${number} * ${i} = ${result}`);
}

// const number = 15;

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }