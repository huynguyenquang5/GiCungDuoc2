function monthToDay() {
    let Month = +document.getElementById("month").value;
    switch (Month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("result").innerHTML = "Thang " + Month + " co 31 ngay";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML = "Thang " + Month + " co 30 ngay";
            break;
        default:
            document.getElementById("result").innerHTML = "Thang " + Month + " co 28 hoac 29 ngay";
            break;
    }
}