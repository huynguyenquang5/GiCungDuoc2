function tran(){
    let arrayEnglish = ["apple", "banana", "orange", "go"];
    let arrayVietnamese = ["táo", "chuối", "cam", "đi"];
    let engWord = document.getElementById("text").value
    let result = "Not Found";
    for (let i = 0; i < 4; i++) {
        if (engWord === arrayEnglish[i]) {
            for (let j = 0; j < 4; j++) {
                if (i===j) {
                    result = arrayVietnamese[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML= result;
}


