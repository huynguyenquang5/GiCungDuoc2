// Bai 1
// for(let num = 1; num <= 100; num++){
//     document.write(num + "<br>")
//     if (num===99){
//         break;
//     }
// }

// Bai 2
// let c = null;
// while (c<200){
//     let c=+prompt("Enter c")
//     if (c<20){
//         alert("Increase the temperature")
//     if (c>100){
//         alert("Decrease the temperature")
//     }
// } else {
//         alert("Normal temperature")
//     }
// }

// Bai 3
// let a = 1
// let b = -1
// let c = 0
// for (let i=0;i<20;i++){
//     c=a;
//     a=a+b;
//     b=c;
//     document.write(a + "<br>");
// }

// Bai 4
// let a = 1
// let b = -1
// let c = 0
// let i = 0
// while (i>=0) {
//     c=a
//     a=a+b;
//     b=c;
//     if (a%5===0 && a !== 0){
//         document.write(a);
//         break;
//     }
//     i++
// }

//Bai 5
// let a = 1
// let b = -1
// let c = 0
// let total = 0
// for (let i=0;i<20;i++){
//     c=a
//     a=a+b;
//     b=c;
//     total+=a;
//     document.write(a + "<br>")
// }
// document.write(total)

// Bai 6
// let total=0
// for(let i=0;i<30;i++){
//     num=i*7;
//     total += num
// }
// document.write(total)

// Bai 7
// for(let num = 1; num <= 100; num++){
//     if (num%3===0){
//         if(num%5===0){
//             document.write("FizzBuzz" + "<br>");
//             continue;
//         } else{
//             document.write("Fizz" + "<br>");
//             continue;
//         }
//     } else if (num%5===0){
//         document.write("Buzz" + "<br>");
//         continue;
//     }
//         document.write(num + "<br>")
// }


// Bai 8
// let numbers = +prompt("Enter a string ")
// numberPredict = Math.floor(Math.random() * numbers)
// let i = 0
// while(i<=3){
//     let no = +prompt("Enter a number ")
//     if (no===numberPredict) {
//         alert("Congratulation");
//         break;
//     }
//     if (no > numberPredict) {
//         alert("Smaller")
//     } else {
//         alert("Larger")
//     }
//     i++
//     if(i===3){
//         alert("Game Over")
//         break;
//     }
// }

