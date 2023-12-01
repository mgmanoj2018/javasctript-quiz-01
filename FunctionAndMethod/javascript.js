// console.log("hi")
// function

// function sum(a,b){
//     return a+b
// }
// const result = sum;
// console.log(result(5,6))

// const sum1 = (a,b)=>{
//     return a+b
// }
// const result = sum1
// console.log(result(3,5))

// Q 1 Create a function using a function keyword that takes a string as an argument & return the numbers of vowels in the string

// function countValue(str){
//     let count = 0
//     for(let char of str){       
//         if( char === "a" || 
//             char === "e" || 
//             char === "o" || 
//             char === "u" || 
//             char === "i"){
//             count++
//         }       
//     }
//     console.log(count)
// }
// countValue("etasds");

// forEach Loop in Array 
// arr.forEach(callbackfunction)
// callbackfunction: Here, it is a function to execute for each element in the array
// a callback is a function passed as an argument to another function

//Q For a given array of numbers, print the square of each value using the forEach Loop.

// let data = [1,5,9,7,9,];

// data.forEach(num=>console.log(num*num));
// console.log(data);

// map create a new array with the some operation. the result its callback return are used to from new array

// const nub = [5,6,9,8];
// const newNum = nub.map((value)=>{
//     return value*value
// });
// console.log(newNum);

// filter create new array of elements that give true value will store in new array

// let num = [1,5,9,9,5,2]
// let newNum = num.filter((value)=>{
//     return value %2 !==0
// })
// console.log(newNum)

// reduce method performs some operations $ reduces the array to a single value. it returns that single value

// let num1 = [4,8,9,8,8]
// const newNum = num1.reduce((value, curr)=>{
//     //return value = value + curr
//     return value>curr?value:curr
// })
// console.log(newNum);

//Q We are given array of marks of students. and filter out of the marks of students that score 90

// let students = [ 94,96,98,98,16,58,89];
// const studendpass = students.filter(value=>{
//     return value >95
// });
// console.log(studendpass)


/* Take a number n as input from user. create an array of numbers from 1 to n. Use the reduce method to calculate sum of all number 
    in the array. Use the reduce method the calculate product all numbers in the array.
*/

const input = prompt("write the number");

const count = []
for(let i=1; i<=input; i++){
    count[i-1] = i
}
console.log(count)
const newresult = count.reduce((acc,curr)=>{
    return acc+curr
});
const factorail = count.reduce((acc,curr)=>{
    return acc*curr
});
console.log(newresult)
console.log(factorail)