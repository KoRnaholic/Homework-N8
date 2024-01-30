var strSum = prompt("შეიყვანეთ ანაბრის თანხა")

var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი")

var finalAmount = parseInt(strSum)

var finalPercent = parseInt(strPercent)

finalAmount = finalAmount + finalAmount * finalPercent / 100


if (finalPercent <= 5) {
    alert("პროცენტის დარიცხვის შემდეგ ჩვენი თანხა იქნება" + finalAmount + ",რაც ცუდია")
} else if (finalPercent > 5) {
    alert("პროცენტის დარიცხვის შემდეგ ჩვენი თანხა იქნება" + finalAmount + ",რაც ნორმალურია")
} else {
    alert("პროცენტის დარიცხვის შემდეგ ჩვენი თანხა იქნება" + finalAmount + ",რაც კარგია")
}
