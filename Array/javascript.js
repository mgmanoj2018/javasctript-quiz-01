// console.log("hello")

// price discount

const item = [100,200,56,60];
// for(let value of item){
//     const discount = 12;
//     const newvalue = value * discount/100
//     console.log(value-newvalue)    
// }

let index = 0
for(let value of item){
    const offerValue = value/10
    console.log(`new item ${index} = ${value}`)
    item[index]= item[index]-offerValue
    console.log(`value after offer ${item[index]}`)
    index++
}
// for(let i=0; i<item.length; i++){
//     const discount = 10
//     const discountAmount = item[i]*discount/100
//     const newPrice = item[i]-discountAmount
//     console.log(newPrice)
// }
console.log(item)


// push and pop this is change in origanal array

// const fruit = ["mango", "bannana","chairy"];
// fruit.push("apple", "barger")
//  fruit.pop(3)
// console.log(fruit)

// concat method

// let student = ["manoj" ,"kumar"];
// let student1 = ["ashok","mangit"]
// let allStudent = student.concat(student1)
// console.log(allStudent)

// unsift and sift 

const foodItem = ["mango","burger"];
foodItem.unshift("banana01");
console.log(foodItem)
foodItem.shift()
console.log(foodItem)