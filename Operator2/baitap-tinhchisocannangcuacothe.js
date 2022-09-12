let Weight=+prompt("Enter weight:")
let Height=parseFloat(prompt("Enter height:"))

BMI=Weight / (Height**2)

if (BMI < 18) {
    document.write("Underweight");
}
else if (BMI < 25.0) {
    document.write("Normal");
}
else if (BMI < 30.0) {
    document.write("Overweight");
}
else {
    document.write("Obese");
}