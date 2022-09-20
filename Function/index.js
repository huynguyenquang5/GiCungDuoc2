// function square(number){
//     var result = number * number;
//     return result;
// }

// let square0f2 = square(2);
// document.write("Square of 2 is: " + square0f2 + "<br>");
//
// let square0f5 = square(5);
// document.write("Square of 5 is: " + square0f5);

// function calculated(){
//     let input = document.getElementById("input").value;
//     let result = square(input);
//     document.getElementById("result").innerHTML = result;
// }

// function myFunction() {
//     let firstArg = arguments[0];
//     let secondArg = arguments[1];
//     alert("firstArg is: " + firstArg);
//     alert("secondArg is: " + secondArg);
// }
// myFunction("Hello","World");
//
// function myFunction(a,b) {
//     alert("firstArg is: " + a);
//     alert("secondArg is: " + b);
// }
// myFunction("Hello","World");

// function multiplyNums(x) {
//     return x * 2;
// }
// let theNumber = 10;
// let result = multiplyNums(theNumber);
// alert(result);

// function myFunction(x) {
//     if (x === 1){
//         return true;
//     }else {
//         return false;
//     }
// }
// let result= myFunction(+prompt("Enter a Number"));
// alert(result);

// function orderFruit() {
//     let total = 0;
//     // Call another function to place order
//     return total;
// }
// let result = orderFruit();
// alert("The total is " + result);

// function myFunction() {
//     let myNum = 10;
//     function showNum() {
//         alert(myNum);
//     }
//     return showNum();
// }
// let callFunc = myFunction();
// myFunction();

// Passing by value of primitives values
// function square(x) {
//     x = x * x;
// }
// let y = 10;
// square(y);
// console.log(y); // -- no change

// Passing by value of references
// function turnOn(machine) {
//     machine.isOn = true;
// }
// let computer = {
//     isOn: false
// };
// turnOn(computer);
// console.log(computer.isOn); // true;

function turnOn(machine) {
    machine = {
        isOn: true
    };
}
let computer = {
    isOn: false
};
console.log(computer.isOn); // false;