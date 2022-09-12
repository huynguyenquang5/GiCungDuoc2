// // Bai 1
// let C = + prompt("Enter C")
// if (C>=0){
//     F = C  *  9 / 5 + 32
//     alert("F = " + F)
// }
// else {alert("Khong hop le")}

// Bai 2
// let m=+prompt("Enter m")
// if (m>=0){
//     ft=m*3.2808
//     alert("ft = " + ft)
// }
// else{alert("Khong hop le")}

// Bai 3
// let a=+prompt("Enter a")
// if (a>0){
//     S=a*a
//     alert("S = " + S)
// }
// else {alert("Khong hop le")}



// Bai 4
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// if (a>0&&b>0){
//     S=a*b
//     alert("S = " + S)
// }
// else {alert("Khong hop le")}

// Bai 5
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// let c=+prompt("Enter c")
// z = c*c
// if (a*a + b*b === z) {
//     alert("Tam giac vuong")
//     S = a * b / 2
//     alert("S = " + S)
// }
// else {
//     alert("Khong phai tam giac vuong")
// }

// Bai 6
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// if (a !== 0){
//     x = - b / a
//     alert("X = " + x)
// }
// else {alert("Phuong trinh vo nghiem")}

// Bai 7
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// let c=+prompt("Enter c")
// d=b*b-4*a*c
// if (d<0 || a === 0) {
//     alert("Vo Nghiem")
// }
// else if (d === 0) {
//     x = -b/(2*a)
//     alert("Mot Nghiem x = " + x)
// }
// else {
//     x = (-b + Math.sqrt(d)) / (2*a)
//     y = (-b - Math.sqrt(d)) / (2*a)
//     alert("Hai Nghiem x = " + x + " y = " + y)
// }

// Bai 8
// let age=+prompt("Enter age")
// if (age > 0 && age < 120 && Number.isInteger(age)) {
//     alert("This is a person age")
// }
// else{alert("This is not a person age")}

// Bai 9
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// let c=+prompt("Enter c")
// if (a<0 || b<0 || c<0) {
//     alert("Khong phai tam giac")
// } else if (a + b < c || b + c < a || c + a < b) {
//     alert("Khong phai tam giac")
// }
// else{
//     alert("Day la tam giac")
// }

// Bai 10
// let no =+prompt("Nhap so dien")
// if (no<=50){
//     total=(1678*no) * 1.08
//     alert("Gia dien thang nay = " + total)
// } else if (no<=100){
//     total=((1678*50)+(1734*(no-50))) * 1.08
//     alert("Gia dien thang nay = " + total)
// } else if (no<=200){
//     total=((1678*50)+(1734*50)+(2014*(no-100))) * 1.08
//     alert("Gia dien thang nay = " + total)
// } else if (no<=300){
//     total=((1678*50)+(1734*50)+(2014*100)+(2536*(no-200))) * 1.08
//     alert("Gia dien thang nay = " + total)
// } else if (no<=400){
//     total=((1678*50)+(1734*50)+(2014*100)+(2536*100)+(2834*(no-300))) * 1.08
//     alert("Gia dien thang nay = " + total)
// } else{
//     total=((1678*50)+(1734*50)+(2014*100)+(2536*100)+(2834*100)+(2927*(no-400))) * 1.08
//     alert("Gia dien thang nay = " + total)
// }

// Bai 11
// let no =+prompt("Nhap thu thap ca nhan (tr)")
// if (no<=5){
//     tax=no*0.05
//     alert("Thue thu nhap la " + tax + "tr")
// } else if (no<=10){
//     tax=no*0.1 - 0.25
//     alert("Thue thu nhap la " + tax + "tr")
// } else if (no<=18){
//     tax=no*0.15 - 0.75
//     alert("Thue thu nhap la " + tax + "tr")
// } else if (no<=32){
//     tax=no*0.2 - 1.65
//     alert("Thue thu nhap la " + tax + "tr")
// } else if (no<=52){
//     tax=no*0.25 - 3.25
//     alert("Thue thu nhap la " + tax + "tr")
// } else if (no<=80){
//     tax=no*0.3 - 5.85
//     alert("Thue thu nhap la " + tax + "tr")
// } else {
//     tax=no*0.35 - 9.85
//     alert("Thue thu nhap la " + tax + "tr")
// }

// Bai 12
// let no1=+prompt("So tien ban dau")
// let no2=+prompt("So thang cho vay")
// let no3=+prompt("lai xuat hang thang")
//
// T = no1 * (1 + no2*no3)
// alert("Lai ngan hang = " + T)