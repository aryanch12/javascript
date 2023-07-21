                    //   variables

// var myName='aryan';
// var myAge=26;

// console.log(myAge);

// var _myName="aryan";
// var 1myName="aryan";
// var _1my__Name="chaudhary";
// var $myName="ac"
// var myNaem%="acccc";


// console.log(_1my__Name);



//                            typeoff operator

//  var iam=22;
//  console.log(typeof(iam));


//          data types practice


// console.log(10+"20");
// console.log(10-"5");  // bug
// console.log("java"+"script");
// console.log("java"-"script");   //NaN
// console.log("true"-"false");
// console.log("true"+"false");
// console.log(" " + 0);


//          difference between null vs undefined?

// var iam=null;
// console.log(iam);
// console.log(typeof(iam));     this is a obejct type

// var iam;
// console.log(iam);
//  console.log(typeof(iam));   
 
//  this is a undefined


// var myPhoneNumber=8650547664;
// var myName="aryan";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// if(isNaN(myName)){
//     console.log("plz enter valid phone no");
// }


// NaN===NaN;
// Number.NaN===NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));


// var x=5;
// var y=5;

// console.log(x==y);
// console.log(`Is both the x and y are equal : ${x == y}`);


//                             increment and decrement

// var num=15;
// var newnum=num-- + 5;
// console.log(num);
// console.log(newnum);


// var num=15;
// var newnum=--num + 5;
// console.log(num);
// console.log(newnum);



//                              notes


// var myName="vinod";
// console.log(myName+ "thapa");


//       sol1:

// console.log(9**9);
// console.log(5+ "thapa");

//  var num1 = 5;
//  var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));


// console.log(num1 === num2 );




//             Function in java script

// function sum(){
//     var a=10;
//     var b=40;
//     var total=a+b;
//     console.log(total);

// }
// sum();


// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
// sum();
// sum(10,20);
// sum(1,2);


// function sum(a,b){
//     var total=a+b;
//     console.log
// }

// Why Functions? 

// You can reuse code: Define the code once, and use it many times.
// You can use the same code many times with different arguments, 
// to produce different results.

// function sum(a,b){
//     var total=a+b;
//     console.log(total);
// }
// var funExp=sum(3,14);

                  // Return Keyword

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a,b){
//     return total=a+b;
// }

// var funexp=sum(5,25);
// console.log(funexp)




//                                                6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var funexp=function(a,b){
//     return total=a+b;
// }
// var sum = funexp(15,15);
// var sum1=funexp(20,15);
// console.log(sum>sum1);



// var aryan=function(a,b){
//     return total=a+b;
// }

// var abhishek=aryan(10,12);
// var abhishek1=aryan(6,6);
// console.log(abhishek>abhishek1);





//                                      👻 Now It's Time for Modern JavaScript 😍😍 

//                                   🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

//                                                   1️⃣ LET VS CONST  vs  VAR

// var myName="aryan";
// console.log(myName);


// myName="aryan";
// console.log(myName);

// let myName="aryan"
// console.log(myName);

// myName="aryan";
// console.log(myName);

// const myName="aryan";
// console.log(myName);


// function biodata(){
//     const myFirstName="aryan";
//     console.log(myFirstName);

//     if(true){
//         const myLastName="chaudhary";

//     console.log('innerOuter'+myLastName);
// }
// console.log(myFirstName);
// }

// biodata();


// var => Function scope 
// let and const => Block Scope 

// { 
//     let x = 2;
//   }
//   // x can NOT be used here
//   Variables declared with the var keyword can NOT have block scope.
  
//   Variables declared inside a { } block can be accessed from outside the block.
  
//   Example
//   { 
//     var x = 2; 
//   }
  // x CAN be used here


// code here can NOT use carName

// function myFunction() {
//     let carName = "Volvo";
    // code here CAN use carName
//   }
  
  // code here can NOT use carName



  //                                     2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// for(let num=1;num<=10;num++){
//     let tableof=12;
//     // console.log(tableof+"*"+num+"="+tableof*num);
//     console.log( `${tableof}*${num}=${tableof * num}` );

// }



//                                           3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.


// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(3));





//                                                 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.



//                                                      -array destructing

// const myBiodata=["aryan","chaudhary",26];

// let myFName=myBiodata[0];
// let myLName=myBiodata[1];
// let myAge=myBiodata[2];
// console.log(myAge);
// console.log(myLName);
// console.log(myFName);


  //          we can add values too 

//   let [myFName,myLName,myAge,myDegree="btech"]=myBiodata;
//   console.log(myDegree);


//                                                       object destructing 
// const myBiodata ={
//     myFname : 'aryan',
//     myLname : 'chaudhary',
//     myAge : 23

// }
// let age =myBiodata.age;
// let myLname=myBiodata.myLname;

// let {myFname,myLname,myAge,myDegree="mcs"}=myBiodata;
// console.log(myDegree);

//             object properties

// ➡ we can now use Dynamic Properties

//  let myName ="vinod";
//  const myBio={
//     [myName] :"hello how are you?",
//     [20+6] :"is my age"
//  }

//  console.log(myBio);


  // ➡ no need to write key and value, if both are same

// let myName="vinod thapa"
// let myAge=26;

// const myBio={myName,myAge}
// console.log(myBio);



//                                                6️⃣ Fat Arror Function 
                                               
//                                                👻 Normal Way of writing Function

// console.log(sum());

// function sum(){
//     let a=5; b=6;
//     let sum =a+b;
//     return `the sum of the two number is ${sum}`;
// }

// 👻 How to convert in into Fat Arrow Function 

// const add=()=>`the sum of the two number is ${(a=5)+(b=6)}`;
// console.log(add());


//                                                      7️⃣Spread Operator
// const colors=['red','green','blue','white','pink'];
// console.log(colors);

// const myColors=['red','green','blue','white']

// // // // 2nd time add one more color on top and tell we need to write it again 
// // // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];
// console.log(MyFavColors);

//                                              ES7 features
//array include
// const colors=['red','green','blue','white','pink'];
// const isPresent=colors.includes('blue');
// console.log(isPresent);

// //2: **
// console.log(2**3);

//ES8 FEATURES

// String padding
// Object.values()
// Object.entries()

// const message="my name is aryan";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person ={name:'Fred',age:87};
// console.log(Object.values(person));
// const arrObj=Object.entries(person);
// console.log(Object.fromEntries(arrObj));

//ES2018

//  const person ={name: 'Fred',age: 87,degree:"mcs"};
//  const sPerson={...person};
//  console.log(person);
//  console.log(sPerson);

 //ES2019

//  Array.prototype.{flat,flatmap}
//  Object.fromEntries()

 //ES2020
 //#1:BigInt

//  let oldNum=Number.MAX_SAFE_INTEGER;
//  console.log(oldNum);
//  console.log( 9007199254740991n + 12n );


// const foo=null ?? 'default string';
// console.log(foo);

//ES2014

//"use Strict";

// x=3.14;
// console.log(x);


/**** Section 7👉 Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time.
// var friend1='ramesh';
// var friend2='arjun';
// var friend3=' vishal';

// var myFriend=['ramesh',22,male,'arjun',20,male,'vishal',true,52];
// console.log(myFriend)

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 

// example 🏁


// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

//                                           1️⃣ Array Subsection 1 👉 Traversal in array✌ 
//                                           navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length-3]);

// if we want to check the length of elements of an array 
// console.log(myFriends.length);

// we use for loop to navigate 
// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length;i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(let elements in myFriends){
//   console.log(elements);
// }
// for(let elements of myFriends){
//   console.log(elements);
// }



//                                      Array.prototype.forEach() 🙋‍♂️
// Calls a function for each element in the array.

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });



//                                                    2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 
                                                   
//                                                    Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

//  var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];
//  console.log(myFriendNames.indexOf("thapa",3));

// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// console.log(myFriendNames.lastIndexOf("thapa",3));


//                                                                      Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));




//                                                            Array.prototype.find() 🙋‍♂️

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// prices < 300
// const findElem = prices.find((currVal) =>  currVal < 300 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 300 )  );

// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.


// const prices = [200,300,350,400,450,500,600];

// prices < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);



//                                                        3️⃣ Array Subsection 3 👉 How to sort an Array

//                                                        Array.prototype.sort() 🙋‍♂️

//The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());


// const array1 = [1, 30, 4, 21, 100000, 99];
// console.log(array1.sort());




// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce an incorrect 
// result when sorting numbers.
