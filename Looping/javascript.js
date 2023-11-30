// 1
// for(var i=1; i<=10; i++){
//    var result = i*5 // table of 5
//     console.log(result)
// }
// console.log(result);

// 2

// let value = "manoj";
// for(var i=0; i<=value.length; i++){
//     console.log(value[i]);
// }
// for(key of value){
//     console.log(key)
// }


// add sum of 5 
// var  sum = 0
// var n = 100
// for(var i=1; i<=n; i++){
//     sum = sum + i
   
// }
// console.log(sum);

// infinite loop

// while loop
// var i =0
// while(i<=10){
//     console.log("apna college");
//     i++
// }

// do while loop

// let a =1
// do{
//     console.log("apna college")
//     a++
// }while(a<=10);

// for of loop

//  let arr = ["java", "javascript","react"];
//console.table(arr)
// let str = "javascript"
// let obj = {
//     name:"manoj",
//     title:"gupta",
//     age:25
// }
// let length = 0
// for(let value in obj){
//     console.log(value);
//     //console.table(value)
//     length++
// }
// console.log(length)


// print the even number 1 to 100

// let number = 0
// for(let i = 1; i<=100; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
  
// }

// create a game where you start with any random game number. ask the user to keep gaussing the game number until the user enters corrects vaue

// let number = prompt("write a number is it envent")

// while(number % 2 !=0){
//     number = prompt("this is not event number write angain")
// }
// console.log("congratulation you write even number");

// let str = "apnacollege"
// console.log(str[8]);

// let templat = `  manoj is    ` // templat literal
// console.log(templat.trim().length);
// console.log(templat[6]);

// let le = "apna\ncollege"
// console.log(le.length)

// let item = {
//     name:"pen",
//     price:100,
    
// }
// console.log(`my item is ${item.name} and ${item.price} price`);


// let st = "  manoj kumar       "
// console.log(st.toUpperCase())
// console.log(st.toLowerCase());
// console.log(st.trim().length)

// string method there is in build function to manupate string
// upperCase
//lowerCase
//trim

// strr = "manoj kumar";
// console.log(strr.slice(1,5))
// console.log(st.trim().concat(strr))

let h = "hello"
console.log(h.replace("h" , "y"))

let userName = prompt("what is your name");
let modify = userName.replaceAll(" ", "_")

console.log(`your usename ${modify}@${modify.length}.com`)