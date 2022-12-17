'use strict'
// const quarterOf = (month) => {
//    // Your code here
//    if (month <=3){
//      return 1
//    }else if(month <=6 && month >=4){
//      return 2
//    }else if(month <=9 && month >=7){
//      return 3
//  }else if(month <=12 && month >=10){
//      return 4
//    };
//    }
//    console.log(quarterOf(3))
//    console.log(quarterOf(8))
//    console.log(quarterOf(11))



//14.12.20222 *********************************************************************************************************************************************



// function findMultiples(integer, limit) {
//   let arr = [];
//  const int = integer;
//  while(integer <= limit){
//    arr.push(integer);
//    integer+=int
//  }


//  console.log(arr)
// }
// findMultiples(5,25);


// let b = 5;
// ff()
// function ff (){
//     pp();
// }

// function pp () {
//     b +=10 ;
// }

// console.log(b)
// a = true;


// const Obl = {

// }
// console.log(typeof Obl)
// console.log(Boolean(Obl))
// console.log(!!Obl)


// var summation = function (num) {
//    let count = 1;
//    let wholeFigure = 1;
//    while (count < num) {
//       count++;
//       wholeFigure += count
//    }
//    return wholeFigure
// }

// console.log(summation(8))




// let a = false;
// let b = 5;
// console.log(a === (5>10))


// const Dog = {
//    name: 'GavGav',
//    age: 20
// }


// console.table(Dog)
// let name = 'Kostia'
// let coty = 'Montreal'
// let result = `men9 zovyt ${name} gorod ${coty}`
// console.log(result)

// const function myf(){
//    return 5
// }
// myf = 'lolllka'

// console.log(myf)

// const newPost = (post,addedAt = Date()) => {
//    let result = {
//       ...post,
//       addedAt
//    }
 
//   return result
   
// } 

// const firstPost = {
//    id: 1,
//    author: 'Bogdan'
// }

// console.table(newPost(firstPost))



// 17 / 12 /2022 **********************************************************************************************
// function nextInLine(arr, item) {
//    // Змініть код лише під цим рядком
//  arr.push(item)
//  arr.shift
 
//    return arr.shift();
//    // Змініть код лише над цим рядком
//  }
 
//  // Налаштування
//  let testArr = [1, 2, 3, 4, 5];
 
//  // Відобразити код
//  console.log("Before: " + JSON.stringify(testArr));
//  console.log(nextInLine(testArr, 6));
//  console.log("After: " + JSON.stringify(testArr));

// function welcomeToBooleans() {
//    // Змініть код лише під цим рядком
 
//    return true; // Змініть цей рядок
 
//    // Змініть код лише над цим рядком
//  }


// Налаштування
// function compareEquality(a, b) {
//    if (a === b) { // Змініть цей рядок
//      return "Equal";
//    }
//    return "Not Equal";
//  }
 
//  compareEquality(10, "10");




// let a = 1;
// let b = '1';
// console.log(a == b)



function testGreaterThan(val) {
   if (val) {  // Змініть цей рядок
     return "Over 100";
   }
 
   if (val.length < 10) {  // Змініть цей рядок
     return "Over 10";
   }
 
   return "10 or Under";
 }
 
 testGreaterThan(10);





 function testGreaterOrEqual(val) {
   if (val => 20) {  // Змініть цей рядок
     return "20 or Over";
   }
 
   if (val => 10) {  // Змініть цей рядок
     return "10 or Over";
   }
 
   return "Less than 10";
 }
 
 testGreaterOrEqual(10);


 function testLessOrEqual(val) {
   if (val <= 12) {  // Змініть цей рядок
     return "Smaller Than or Equal to 12";
   }
 
   if (val<= 24) {  // Змініть цей рядок
     return "Smaller Than or Equal to 24";
   }
 
   return "More Than 24";
 }
 
 testLessOrEqual(10);