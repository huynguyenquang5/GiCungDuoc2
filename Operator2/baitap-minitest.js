// 4a
// let a = + prompt("Enter a");
// if (a>0){
//     S=a*a;
//     P=a*4;
//     document.write("Circumference = " + P);
//     document.write("<br>");
//     document.write("Area = " + S);
// }
// else {
//     document.write("Không hợp lệ")
// }
//


// 4b
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// Expo=a**2;
// Expo2=a**b;
// document.write("a ^ 2 = " + Expo)
// document.write("<br>")
// document.write("a ^ b = " + Expo2)

// 4c
// let a=+prompt("Enter a")
// let b=+prompt("Enter b")
// if (a === b) {
//     Result = a
//     document.write("Total = " + Result)
// }
// if (a < b) {
//
//     Result = z + c;
//     document.write("Total = " + Result)
// }

// 4d


// 4e
let a=+prompt("Enter a")
let b=+prompt("Enter b")
let c=+prompt("Enter c")

if (a<0 || b<0 || c<0) {
    alert("Khong phai tam giac")
} else if (a + b < c || b + c < a || c + a < b) {
    alert("Khong phai tam giac")
} else {
    alert("Day la tam giac")
    if (a === b) {
        if (a === c) {
            alert("Tam giac deu");
        } else {
            alert("Tam giac can")
        }
    }
    x = a * a
    y = b * b
    z = c * c
    if (x + y === z || x + z === y || y + z === z) {
        alert("Tam giac vuong");
    }
}


