let number = 20
let countMath = 0
let countNum = 0
    for (let n = 2;n <= 100;n++) {
        if (countNum < number) {
            for (let i = 1; i <= n; i++) {
                if (n % i === 0) {
                    countMath++;
                }
                }
            if (countMath === 2){
                document.write(n + "<br>");
                countNum++;
            }
            countMath = 0;
        } else{
            break;
        }
    }