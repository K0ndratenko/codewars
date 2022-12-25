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



// function getAge(inputString){
//   let number = Number(inputString.split(" ", 1));
// //console.log(parseInt(number))
// return parseInt(number)
//    //Number(number[0])
// }


// getAge("4 years old")


// function buildString(...template){
//   let resultStr = 'I like '
//   for( let el in template){
//     resultStr += template[el] + ', '
//     console.log(template[el])
//   }
//  let a = resultStr.substring(0, resultStr.length-2) + "!"

//   console.log(a)
//   //console.log(typeof template)
//   return a;
// }



// buildString('Chocolate')




// let a = {
//   name: 'maks',
//   age:22
// }

// let b = {
//   rank:100500,
//  __proto__: a,

//    print1 () {
//     console.log(b.name + b.age)

//   }
// }
// let c = { 
// //   class: '3B',
// //   __proto__ : b,

// // }
// // console.log(c.hasOwnProperty('class'))



// class Student {
//   constructor(){
    
//   }
//   set firstName(name){
//     this._name = name;
//   }
// }

// class Teacher {
//   constructor(name,age){
    
//     this.name = name
//     this.age = age
//   }
// }


// let st = new Student('Maks',23);

// let st1 = new Student('Gregoriy',25)


// let teacher = new Teacher('Ana',35)


// let n = [];
// let x = new Number(6)

// // console.log(n.__proto__ === x.__proto__)
// // console.log(x)

// let worker = {
//   name: 'lola'
// }
// let worker2 = {
//   name: 'wowa'
// }

// class man {
//   constructor(name){
//     this.name= name
//   }
// }
// class man2 extends man {
//   constructor(name){
//       super(name)
//       this.age = '25'
//   }
  
// }
// class man3 extends man2 {
//   constructor(name){
//       super(name)

//   }
  
// }

// let MAN = new man3('zack')


// console.log(man3.prototype)

// const s = [5, 7, 2];
// function editInPlace() {
   
//      s.reverse()
//      console.log(s)
//    return s
  
   
// }
// editInPlace();

// const obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// let str = 'mama'
// Object.freeze(str);
// str = 'lala'
// console.log(str); 




// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Змініть код лише під цим рядком

// const {today : highToday} = HIGH_TEMPERATURES;
// const {tomorrow : highTomorrow} = HIGH_TEMPERATURES; 

// console.log(highToday)


//let a = 8, b = 6;
// const arr = [8,6]
// console.log(arr)
// const[b,a] = arr
// console.log(b,a )


// function removeFirstTwo(arr) {
//   // Змініть код лише під цим рядком
  
//   const [one,two,...shorterList] = arr; // Змініть цей рядок
//   // console.log(shorterList)
//   // Змініть код лише над цим рядком
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);





// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(failure) {
//   let failureItems = [];

//   failureItems =  failure.map( (el,ind) => 
//   //console.log(`element ${el}  index${ind}`)
//    failureItems[ind] = `<li class="text-warning">${el}</li>`

  

//   )
//  return failureItems;
// }

// const failuresList = makeList(result.failure);



// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });
// getMousePosition.x
// console.log(getMousePosition(1,2))


// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book('maks');
// Object.freeze(novel)
// //novel._author = 'zack'

// console.log(novel._author)



// function fun (item){ return item > 5 }

// let none1= [1,2,3,4,5]

// function none(arr, fun){
//   let result = true
//   arr.forEach((el) => {
//     // console.log(el)
//    if(fun(el)){
//     result= false;
//     console.log('ia tyt')
//    }
  
//   }
// )
// console.log(result)
// //return true
// }

// console.log(none(none1,fun))



// let count = 0;
// let str = ''
// function f3 (){
//   for(;count<10;count++){
//     str += ` ${count} `
//       count++
//       //console.log(str)
//       f3()
      
//       return
//     }
//     console.log(str)
//   // console.log(str)
//   // return
// }

// // f3()

// let wallet = 0
// let count = 0 
// function someSum(min,max){
  

//   wallet += Math.floor(Math.random()* (max - min+1) + min)
//   return wallet
// }


// function asking(){
//   if(wallet >= 300){
//     return
//   }
// someSum(5,40)
// asking()
// count++

// }



// // asking()
// // console.log(count)
// // console.log(wallet)




// wallet = (Math.random())
// console.log(wallet)\\


// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding the/; // Змініть цей рядок
// let result = extractStr.match(codingRegex); 
// console.log(typeof(result))


// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/ig; // Змініть цей рядок
// let result = twinkleStar.match(starRegex);

// console.log(result)
// console.log(typeof result)
// let arr = []
// console.log(typeof arr)



// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Змініть цей рядок
// let result = quoteSample.match(vowelRegex); // Змініть цей рядок

// console.log(result)


// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[e-q]ig/; // Змініть цей рядок
// let result = quoteSample.match(alphabetRegex); // Змініть цей рядок


// console.log(result)

//  let crim = 'P1P5P4CCCcP2P6P3'
// let c = 'C'

// let reCriminals = /[C*?]/gi;
// let result = crim.match(reCriminals)
// console.log(result)



// let username = "BadUs3rnam3";
// let userCheck = /^[a-z]{2}[a-z]*\d*$/i; // Змініть цей рядок
// let result = userCheck.test(username);
// console.log(result)


// let quit = "qu";
// let noquit = "qt";
// let quRegex= /q(?=u)/;
// let qRegex = /q(?!u)/;
// // console.log(quit.match(quRegex)[0])
// // console.log(noquit.match(qRegex)[0])
// //noquit.match(qRegex);


// console.log(quRegex.test(quit))
// console.log(qRegex.test(noquit))




// let str = "one two three";
// let fixRegex = /([a-z]{3}\s[a-z]{3}\s[a-z]{5})/; // Змініть цей рядок

// let replaceText = str.match(fixRegex); // Змініть цей рядок
// console.log(replaceText)
// let result = str.replace(fixRegex,'$3 $2 $1');
// console.log(result)


let hello = "   Hello, World!  ";
let wsRegex = /\S*\S*$/gi; // Змініть цей рядок
let result2 = hello.match(wsRegex)


 console.log(result2)

// let result = hello.replace(wsRegex); 



// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);