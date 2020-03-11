
// //Preliminaries


// // Write an if statement that prints "is greater than" if 5 is greater than 3

// const x = 5;
// const y = 3;
// if(x>y){
//     console.log("is greater than")
// }

// //Write an if statement that prints "is the length" if the length of "cat" is 3

// const z = "cat"
// const a = z.length
// if(a === 3){
//     console.log("is the length")
// }

// //Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

// const b = "cat"   
// const c = "dog"
// if(b === c){
//     console.log("the same")
// }
// else{console.log("not the same")}


// //Bronze Medal


// const person = {
//     name: "Bobby",
//     age: 12
// }
// // The person is only allowed to watch the movie if he is 18 or older

// if(person.age >= 18){
//     console.log(person.name + " is allowed to watch the movie")
// }
// else{console.log(person.name + " is not allowed to watch the movie")}

// // The person is only allowed to go into the movie if their name starts with the letter b

// if(person.name[0]=b){
//     console.log(person.name + " is allowed to watch the movie")
// }
// else{console.log(person.name + " is not allowed to watch the movie")}

// // The person is only allowed to go into the movie if their name starts with the letter b, and if they are 18 or older

// if(person.name[0]=b && person.age >= 18){
//     console.log(person.name + " is allowed to watch the movie")
// }
// else{console.log(person.name + " is not allowed to watch the movie")}


// //Silver Medal

// //Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.

// if(1 === "1"){
//     console.log("strict")
// } else if(1 == "1"){
//     console.log("loose")
// }else{
//     console.log("not equal at all")
// }

// //Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4

// if(1<=2 && 2 === 4){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// //Gold Medal

// //Write an if statement that checks to see if "dog" is a string

// const myDog ="dog"
// if(typeof myDog === "string"){
//     console.log("it is a string")
// }

// //Write an if statement that checks to see if "true" is a boolean

// const myTrue = "true"
// if(typeof myTrue === "boolean"){
//     console.log("It is a boolean")
// }else{
//     console.log("it is not a boolean")
// }

// //Write an if statement that checks to see if a constiable has been defined or not

// const myDefine

// if(typeof myDefine !== "undefined"){
//     console.log("myDefine is undefined")
// }else{
//     console.log("myDefine is defined")
// }

// //Write an if statement asking if "s" is greater than 12?

// if("s">12){
//     console.log("s is greater than 12")
// }else{
//     console.log("s is not greater than 12")
// }
// //Try it with a few more letters and a few numbers.

// if("a">12){
//     console.log("a is greater than 12")
// }else{
//     console.log("a is not greater than 12")
// }

// //letters

// if("A">"B"){
//     console.log("A is greater than B")
// }else{
//     console.log("A is not greater than B")
// }
//Write a ternary statement that console.logs whether a number is odd or even. For example:
//const myNum = 10;
// Write your ternary here to log if `myNum` is odd or even.

const myNum = 4;
const isEvenOdd = myNum % 2 === 0 ? 'even' : 'odd';
//console.log(`${myNum} is ${isEvenOdd}`)
console.log(myNum + ' is' + ' ' + isEvenOdd)

//(It should continue to work correctly even if myNum changes to a different number).

