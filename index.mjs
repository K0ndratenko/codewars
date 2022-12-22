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



// function testGreaterThan(val) {
//    if (val) {  // Змініть цей рядок
//      return "Over 100";
//    }

//    if (val.length < 10) {  // Змініть цей рядок
//      return "Over 10";
//    }

//    return "10 or Under";
//  }

//  testGreaterThan(10);





//  function testGreaterOrEqual(val) {
//    if (val => 20) {  // Змініть цей рядок
//      return "20 or Over";
//    }

//    if (val => 10) {  // Змініть цей рядок
//      return "10 or Over";
//    }

//    return "Less than 10";
//  }

//  testGreaterOrEqual(10);


//  function testLessOrEqual(val) {
//    if (val <= 12) {  // Змініть цей рядок
//      return "Smaller Than or Equal to 12";
//    }

//    if (val<= 24) {  // Змініть цей рядок
//      return "Smaller Than or Equal to 24";
//    }

//    return "More Than 24";
//  }

//  testLessOrEqual(10);



// Налаштування
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   let count = 0

//   let result = ''

//   while (count < contacts.length && (result === '' || result === undefined)) {
//     result = search(contacts[count], name, prop)
//     count++;
//   }
//     if(result === undefined){
//       return "No such contact"
//     }
//   return result
// }
// console.log(lookUpProfile("Akira", "address"))


// function search(obj, name, prop) {
//   //console.log(obj)

//   let namebol = false;
//   let propbol = false;
//   let nameAns;
//   let propAns;
//   Object.values(obj).forEach((element) => {
//     if (element === name) {
//       nameAns = element
//       namebol = true;
//     }


//   })

//   if (namebol) {
//     Object.keys(obj).forEach((element) => {
//       if (element === prop) {
//         propAns = element
//         propbol = true;
//       }
//     });
//   }


//     return (Boolean(namebol) && Boolean(propbol)) ? obj[propAns] : Boolean(namebol) ? 'No such contact' : Boolean(propbol) ? 'No such property' : undefined




// }


// function randomRange(myMin, myMax) {
//   // Змініть код лише під цим рядком
//  // return Math.floor((Math.random() * (myMax - myMin))+myMin+1);
//   // Змініть код лише над цим рядком

// }
// let i =0
// while(i<40){
// console.log(randomRange(5,10))
// i++
// //randomRange(5,10);}}}
// }


// function convertToInteger(str) {
//   return  parseInt(str,2)
// }

// console.log(convertToInteger("10011"))

// const Student = {
//   name: 'valera',
//   age: 12,
//   class: 'math'
// }



// let name1 = 'class'
// console.log(Student[name1])

// const Student = {
//   name: 'valera',
//   age: 12,
//   class: 'math'
// }


// Object.values(Student).forEach((v) => {
//   v += '111111111111111'
//   console.log(v)

// }
// )
// console.log(Student)

// var hotpo = function(n){
//   if(n === 0){
//     return 0}; 
//  while(n !==1 ){
//   console.log(n)
//  if(n% 2 === 0){
//     n  /= 2 
//   }else {
//     n *= 3 
//     n+=1
//   }


//    }

//  return n
// }
// console.log(hotpo(5))


// function arrayMadness(a, b) {
//  let resultSumArrayOne = 0
//  let resultSumArrayTwo = 0
//   a.forEach(element => {
//     element*=2
//     resultSumArrayOne+=element
//   });

//   b.forEach((element) => {
//     element*=3
//     resultSumArrayTwo += element
//   })
//   if((resultSumArrayOne && resultSumArrayTwo) === 0 ) return false
//   return (resultSumArrayOne>resultSumArrayTwo) ? true : false
// }


// console.log(arrayMadness([5,6,7],[4,5,6]))


// function saleHotdogs(n){


//   return  (n<5) ? (n * 100) : (n>=5 && n<10) ? (n * 95) : (n >= 10) ? (n * 90) : undefined
// }
// console.log(saleHotdogs(9))



// var arthmetic = require(arthmetic);
// printMyName()





// class Student {
//    constructor(name,age,rank){
//       this.im9 = name,
//       this.age = age,
//       this.rank = rank
//    }
  
//    static  studentFunction() {
//       console.log('Hello I m static function')
//    }

//     frintName() {
//       console.log(this.im9)      
//    }

// }

// class TableStudents extends Student {
      

//       constructor(name,age,rank,clas){
//          super(name,age,rank)
//          this.clas = clas
//       }

//       printAllinformation(){
//          console.log(`Name ${this.im9}  years ${this.age}  rank ${this.rank} class ${this.clas}`)
//       }

// }

// const newStudent = new TableStudents('maks',23,400,'B'

// )
// newStudent.printAllinformation()



// console.log(newStudent instanceof TableStudents)
// console.log(typeof Student)





//  it("test", () => {
//    Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 5 }), true)
//    Test.assertEquals(none([1,2,3,4,5],function(item){ return item > 4 }), false)




// function findDifference(a, b) {
//       return Math.abs(fun(a)-fun(b))
// }

//   function fun(a){
//   let resultOne = 0;
//    for(let i =0;i<a.length;i++){
//        if(i===0){
//          resultOne = a[i];
//        }else{
//        resultOne *= a[i]
//        }
//    }
//    return resultOne
// }

// console.log(findDifference([21,5,4], [19,18,2]))


// let resultx = -(x);         
// let resulty = -(y);  
// let result = -Math.abs(-10)

// console.log(result)

// function invert(array) {
  
//    return array.map(elem => -(elem));
// }

// console.log(invert([[0]]))




// function sayHello(name) {
//    return `Hello, ${name}`
//  }







// function mystery() {
//    const  results = {
//      sanity: 'Hello'};
//    return results;
//  }

// Просто́е число́ — натуральное число, имеющее ровно два различных натуральных делителя.
//  Другими словами, натуральное число {\displaystyle p}p является простым, если оно отлично от {\displaystyle 1}
// 1 и делится без остатка только на {\displaystyle 1}1 и на само {\displaystyle p}p[1].

// function isPrime(num) {
//    if(num > 1){
//       for(let i = 2;i<num;i++){
//          if(num % i === 0){
//             return false
//          }else{
//             continue
//          }
//       }
//    }else{
//       return false
//    }
//    return true
//  }
 
//  console.log(isPrime(-500))


// function likes(names) {
//    if(names.length === 0){
//       return `no one likes this`
//    }
//   if(names.length ===1){
//    return `${names[0]} like this`
//   }else if(names.length === 2){
//    return `${names[0]} and ${names[1]} like this`
//   }else if (names.length ===3){
//    return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   }else{
//    return `${names[0]}, ${names[1]} and ${names.length-2} like this`
//   }
// }

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))

// function duplicateEncode(word){
//    let strResult = ''
//    let arr = []
//    let c = 0
//    for(let el of word){
//    arr[c] = el
//    c++
   
// }
//       let bl = false
//    for(let el of word){
//       arr.forEach((element) => { 
//          if(el === element){
//             if(bl === true){
//                strResult += ')'
//                bl = false
//             }
//                bl = true
//          }
//          if(bl === true){
//             bl = false
//             strResult += '('
//          }
         
//       });

//    }
// c = 0
//    //console.log(arr)
  
// }



// function duplicateEncode(word){
//    return word
//      .toLowerCase()
//      .split('')
//      .map( function (a, i, w) {
//        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//      })
//      .join('');
//  }
// let result = 0

// function findOutlier(integers){
//       let even = 0
//       let odd = 0 
//       for(let i = 0;i<3;i++){
//         ((integers[i] %2) === 0) ? even++ : odd ++
//        }
//    // console.log(even , odd)
//    even > odd ? search('even',integers) : search('odd',integers)
//       return result
//  }

//  function search(mark,integers){
   
//    let count = 1
//    if(mark === 'even'){
//       count = 0
//    }
//  for(let i = 0 ;i < integers.length ;i++){
//    if(integers[i] % 2 !== count){
//     //  console.log(integers[i])
//       result = integers[i]
//       return integers[i]
//    }
 
      
//    };



//  }

//  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))



function getAge(inputString){
  let number = Number(inputString.split(" ", 1));
//console.log(parseInt(number))
return parseInt(number)
   //Number(number[0])
}


getAge("4 years old")