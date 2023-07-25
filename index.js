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



// result when sorting numbers.



//                                                                       Section 10👉 Document Object model in JavaScript 

// 1️⃣ Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object. 


// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM is the child of Window Object

// 2️⃣ All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.


// For example
// 👉 window.screen or just screen is a small information 
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.

// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file










// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 



// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL
// if (confirm("Want to Visit ThapaTechnical?")) {
//   location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
// }

// Section 3️⃣: Navigate through the DOM 

// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length


// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling








                                                              /**** Section 11👉 EVENTS in JavaScript ****/
// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.


// Here are some examples of HTML events:

// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.


// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File



// section 2️⃣: What is Event Object?
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc

// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.

//                                                           formm showing or not

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button onclick="toggleForm()">Show Form</button>
//     <form id="demo" style="display: none;">
//         <label for="fname">First name:</label><br>
//         <input type="text" id="fname" name="fname"><br>
//         <label for="lname">Last name:</label><br>
//         <input type="text" id="lname" name="lname">
//     </form>

//     <script>
//         function toggleForm() {
//             var form = document.getElementById("demo");
//             if (form.style.display === "none") {
//                 form.style.display = "block";
//             } else {
//                 form.style.display = "none";
//             }
//         }
//     </script>
// </body>
// </html>

//                                                  The ondblclick Event


/* <p ondblclick="myFunction()">Double-click this paragraph to trigger a function.</p>

<p id="demo"></p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML += "Hello World ";
}
</script> */

                                                //The onmousedown Event

/* <p>Clock the text below!</p>
<p id="myP" onmousedown="mouseDown()" onmouseup="mouseUp()">
The mouseDown() function sets the color of this text to red.
The mouseUp() function sets the color of this text to blue.
</p>

<script>
function mouseDown() {
  document.getElementById("myP").style.color = "red";
}

function mouseUp() {
  document.getElementById("myP").style.color = "blue";
}
</script> */




                                                        //The onmouseenter Event


/* <img onmouseenter="bigImg(this)" onmouseleave="normalImg(this)" border="0" src="smiley.gif" alt="Smiley" width="32" height="32">

<p>The function bigImg() is triggered when the user moves the mouse pointer onto the image.</p>
<p>The function normalImg() is triggered when the mouse pointer is moved out of the image.</p>

<script>
function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
} */






// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.



 
// let biodata={
//   myName:"aryan",
//   myAge:26,
//   getData:function(){
//     console.log(`My name is ${biodata.myName} and my age is ${biodata.myAge}`);
//   }
// }
// biodata.getData();

// 2nd way no need to write functions as well after es6

// let biodata={
//   myName:"aryan chaudhary",
//   myAge:26,
//   getData(){
//     console.log(`my name is ${biodata.myName} and my age is ${biodata.myAge}`);
//   }

// }
// biodata.getData();

// function myName(){
//   console.log(this);
// }
// myName();


// var myNames="aryan";
// function myName(){
//   console.log(this.myNames);
// }
// myName();


// // ex 3 

// var myNames = 'vinod';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 26,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();

// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "vinod thapa",
//         channelName : 'thapa technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();


// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 










// // **********************************************************************

// // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript

// // **********************************************************************


// //                                                     Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // check html file 

// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 

// callback function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai

// // // we need to create a calculator 
// const add=(a,b)=>{
//   return a+b;
// }
// console.log(add(5,2));

// const subs =(a,b)=>{
//   return Maths.abs(a-b);
// }
// const mult=(a,b)=>{
//   return a*b;
// }

// const calculator=(num1,num2,operator)=>{
//   return operator(num1,num2);
// }

// calculator(5,2,subs)
// console.log(calculator(5,2,subs));

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 

// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 

// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?

// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 

// const fun2=()=>{
//   console.log(`function 2 is called`);
// }

// const fun1=()=>{
//   console.log(`function 1 is called`);
// fun2();
// console.log(`function 1  is called again.`);
// }
// fun1();





// const fun2=()=>{
//   setTimeout(()=>{
//   console.log(`function 2 is called`)
// },2000);
// }

// const fun1=()=>{
//   console.log(`function 1 is called`);
// fun2();
// console.log(`function 1  is called again.`);
// }
// fun1();

// //👻 What is Event Loop in JavaScript?
// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

//For example 
// console.log(myName);
// let myName;
// myName = "thapa";

// // How it will be in output during creation phase 

// var myName=undefined;
// console.log(myName);
// myName="aryan";



// / //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // // instead of var. (The other difference is that variables declared 
// // // with let are local to the surrounding block, not the entire function.)




// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


//For Example

// let a="hello guys";//global scope

// const first=()=>{
//   let b="how are you?"

//   const second=()=>{
//     let c="hi, i am fine thanku";
//     console.log(a+b+c);
//   }
//   second();
//   // console.log(a+b+c); //I can't use C 
// }
// first();


// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);


// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);


// Currying

// const sum=(num1)=>(num2)=>(num3)=> console.log(num1+num2+num3);
// sum(5)(3)(6);

// // 8️⃣: CallBack Hell 
// setTimeout(()=>{
//   console.log(`1works is done`);
//   setTimeout(()=>{
//     console.log(`2 work is done`);
//     setTimeout(()=>{
//       console.log(`3works is done`);
//       setTimeout(()=>{
//         console.log(`4 work is done`);
//       },1000)
//     },1000)
//   },1000)
// },1000)




// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************

// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:
// var my_object={key_1:"some text",key_2:true,key_3:5};

// var object_as_string=JSON.stringify(my_object);
// // "{"key_1":"some text","key_2":true,"key_3":5}"
// console.log(object_as_string);
// typeof(object_as_string);







// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });

