// Bai 1
// let a = 1
// let b = -1
// let c = 0
// for (let i=0;i<20;i++){
//     c=a+b
//     b=a
//     a=c
//     document.write(a + "<br>");
// }

// Bai 2
// let number = +prompt("Enter a number")
// let multi = 1
// for(let no = 1; no <= number; no++){
//     multi *= no;
// }document.write(number + "!" + " = " + multi)

// Bai 3
// let star=""
//     for(let j=1;j<=5;j++){
//         star += "*"
//         document.write(star + "<br>")
//     }

// let space = ""
// for(let i=0;i<5;i++){
//     for(let j=0;j<5-i;j++){
//         space+="*"
// }
// space += "<br>"
// }
// document.write(space)

// let space = ""
// for(let i=1;i<=5;i++){
//     for(let j=0;j<5-i;j++){
//         space+="&nbsp;&nbsp;"
//     }
//     for(let k=0;k<i;k++){
//         space+="*"
//     }
//     space += "<br>"
// }
// document.write(space)

// let space = ""
// for(let i=0;i<5;i++){
//     space+="*"
// }
// space+="<br>"
// for(let j=0;j<5;j++){
//     for(p=0;p<1+j;p++){
//         space+="&nbsp;&nbsp;"
//     }
//     for(let k=0;k<4-j;k++){
//         space+="*"
//     }
//     space+="<br>"
// }
// document.write(space)

// Bai 4
// let space=""
// for(let i = 0; i<= 21; i++){
//     space+="*"
// }
// space+="<br>"
// for(let j = 0; j < 5; j++){
//     space += "*"
//     for (let k = 0; k <= 19; k++){
//         space+="&nbsp;&nbsp;"
//     }
//     space += "*"
//     space += "<br>"
// }
// for(let i = 0; i<= 21; i++) {
//     space += "*"
// }
// document.write(space)


//Bai 5
// let money = +prompt("Enter money")
// let moneyChange=parseInt(money)
// let month = +prompt("Enter month")
// let interest;
// for (let i = 1; i <= month; i++) {
//     moneyChange = moneyChange + moneyChange * 5.8 / 100
//     interest = parseInt(moneyChange)
// }
// profit = interest - money
// document.write("Profit = " + profit)


// Nhap
// let data = ""
// for (let i = 1; i<=5;i++){
//     for(let j = 1; j <= 1; j--){
//         data += "* "
//     }
//     data += "<br>"
// }
// document.write(data)

// c=a+b b=a a=c a=1 b=0; c=a a=b+a b=c a=1 b=-1; a=a+b b=a-b a=1 b=0
