// for (let i=1; i <= 10; i++){
//     let product = 5 * i;
//     document.write("5 x " + i + " = " + product)
//     document.write("<br>")
// }

// biến i là biến control
// i gán GT là 1
// States dc danh gia va tra ve result true
// cac cau lenh trong than loop dc thuc thi
// cau lenh tang GT cua i dc thuc thi: i=2
// loop 2 3 4

// Duoc dung nhieu cau lenh
// for(let i=0,j=10;i<=10;i++,j--) {
//     let sum = i+j;
//     document.write(i + " + " + j + " = " + sum);
//     document.write("<br>");
// }

// states (.) for ko bat buoc
// let i = 0;
// for(;i<=100;i++){
//     document.write("i = " + i);
//     document.write("<br>");
// }

// Break
// let text=""
// let i
// for (i=0;i<5;i++){
//     if (i===3){
//         break;
//     }
//     document.write(text += "The number is " + i);
// }

//Continue
// for (let i=0;i<5;i++){
//     if (i===3){
//         continue;
//     }
//     document.write("The number is " + i + "<br>");
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
//
// let i, len, text;
//
// for (i = 2, len = cars.length, text = ""; i < len; i++) {
//
//     text += cars[i]+" ";
//
// }
// alert(text);

//for-in
// let person={firstName: "Le", lastName:"Loi", address:"Ha Noi"};
// for (let p in person){
//     console.log(person[p]);
// }

//for-of
// let webpage = "codegym.com"
// for (let w of webpage) {
//     console.log(w)
// }

// for-each
// let animal = [
//     {
//         id:1,
//         name:"cat",
//         size:"small"
//     },
//     {
//         id:2,
//         name:"dog",
//         size:"small"
//     }
// ]
// animal.forEach(function (animal){
//     console.log(animal);
// })

// do-while
// let index=1
// do{
//     console.log(index);
//     index++;
// }while (index <= 10)

// while
// let index=10;
// while(index>0){
//     console.log(index);
//     index --;
// }

// let text = "Hello";
// while(text!=="q"){
//     document.write(text + "<br>");
//     text=prompt('Enter a text to print. Enter "q" to quit.');
// }

// for & while
// let count=0;
// while(count<100){
//     document.write("<hr width= "+count+"%>");
//     count++;
// }

// let count;
// for (count=0;count<100;count++){
//     document.write("<hr width= " +count+"%>");
// }

// do-while

let sum=0;
let number;
do{
    number=parseInt(prompt("Enter a number"));
    sum += number;
}while(number !== 0);
document.write("The sum is " + sum);