/**
 * Khai báo biến
 * - Khai báo biến với const và let
 * - So sánh giữa let, const và var
 * - Nên dùng cái nào, trong trường hợp nào
 */

// var

// console.log(fullName); // Work (undefined)
// // Undefined : có tồn tại chả qua là chưa được gán giá trị thôi
// fullName = "Như cute";
// console.log(fullName);
// var fullName = "Như Mập Địt";
// console.log(fullName);

// function showErrorWithError(){
//     var isError = true;
//     var error = '';
//     if(isError){
//         var error = "Something went wrong";
//         console.log(error);
//     }
//     console.log(error);
// }

// showErrorWithError();

// let
// console.log(age);
// let age = 21;
// // console.log(window.age);//Undefined

// function showErrorWithError(){
//     let isError = true;
//     let error = '';
//     if(isError){
//         let error = "Something went wrong";
//         console.log(error);
//     }
//     console.log(error);
// }

// showErrorWithError();

//const

// const birthYear; // bắt buộc phải gán giá trị khi khai báo

/**
 * Function
 * So sánh declaration function, expression function, arrow function vs arrow function
 * Cú pháp, con trỏ this
 */

// const calcAgeNormal = function(birthYear){
//      console.log(2021 - birthYear);
// }

// calcAgeNormal(2000);

// const calcAgeArrow = (birthYear) =>{
//     return console.log(2021 - birthYear);
// }

// calcAgeArrow(2000);

// const ageArrowShort = (birthYear) => 2021-birthYear;

// const ageOneParam = birthYear => 2021 - birthYear;

// const student = {
//     name : 'Tay',
//     birthYear: '2000',
//     calcAgeNormal : function(){
//         // console.log(2021 - this.birthYear);
//         var age = 2021 - this.birthYear;
//         // console.log(this);
//         const checkAgeNormal = function(){
//             console.log(this);
//             if(age >= 18){
//                 console.log("You are mature");
//             }else{
//                 console.log("You are not old enogh");
//             }
//         }.bind(student);
//         checkAgeNormal();
//     },

//     // calcAgeArrow : () =>{
//     //     console.log(2021 - this.birthYear);
//     // }

// }

// // student.calcAgeNormal();
// student.calcAgeNormal();

/**
 * Default params
 */

// const withoutDefaultParam = (typeOfUser) =>{
//     if(typeOfUser  === 'user'){
//         console.log('redirect to user page');
//     }else{
//         console.log('Redirect to admin page');
//     }
// }

// withoutDefaultParam("user");

// const withDefaultParam = (typeOfUser = 'user') =>{
//     if(typeOfUser  == 'user'){
//         console.log('redirect to user page');
//     }else{
//         console.log('Redirect to admin page');
//     }
// }

// withoutDefaultParam();
// withoutDefaultParam('admin');

/**
 * Destructuring
 * - Array
 * - Object
 */

//With array

// const students = ['Tây', 'Hoàng', 'Huy'];

// const [tay, hoang, huy] = students;
// console.log(tay, huy);

// // With object;

// const student = {
//     name: 'Như mập',
//     age: 21,
//     className: 'mập'
// }

// const {name,className,age} = student;
// console.log(name, className)

/**
 * Template string
 */

// const fullName = "QUỳnh Như";
// const str = "My name is " + fullName;
// const templateString = `My name is ${fullName}`;
// console.log(str);
// console.log(templateString);

/**
 * Enhance object literals (Short hands syntax)
 */
// const age = 18;
//  const person = {
//      name: 'QN',
//      age,
//     //  age:age,
//      calcAge : function(){
//          return 2021 - this.age;
//      }
//  }

//  console.log(person);

/**
 * Spread Operator(...)
 */

// const person = ['Nhu', 'Thinh', 'Giang'];

// // + Use for clg array
// console.log(...person);

// // Use for copy array

// let num1 = [1,2,3];
// // let num2 = num1;
// // // console.log(num1);
// // // console.log(num2);
// // num2.push(4);
// // console.log(num2);
// // console.log(num1);
// // => num2 = num1 => Tham chiếu trong JS
// let num2 = [...num1];

// num2.push(4);
// console.log(num1);
// console.log(num2);

//MErge array, concatenation

// let num1 = [1,2,3];
// let num2 = [4,5,6];

// let num3 = [...num1, ...num2];
// console.log(num3);

// const obj1 = {
//     a: 1,
//     b: 2
// }

// let obj2 = {...obj1};
// console.log(obj1);
// console.log(obj2);

// const user = ['nhu', 'thinh', 'giang'];

// const showUser = (user1, user2, user3) => console.log(user1);

// showUser(...user);

/**
 * Rest params
 */

// const calcSum = (num1, num2 , num3) => console.log(num1+num2+num3);

// const calcSum = (...num) => {
//   let sum = 0;
//   num.forEach((num) => {
//     sum += num;
//   });
//   console.log(sum);
// };

// calcSum(1, 2, 3, 4, 5, 6, 9);

// import { getLocalStorage, setLocalStorage } from "./utils.js";


/**
 * Class: bản chất vẫn là 1 function, chỉ có js custom lại cho special hơn mà thôi
 */

// const Person = class{

// }


// class Person{
//     constructor(firstName, lastName, birthYear){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear
//     }

//     calcAge(){
//         return 2021 - this.birthYear;
//     }
// }

// const nhu = new Person("Nguyen","Nhu",2000);
// console.log(nhu);

