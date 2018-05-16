function sumDigits(num) {
    var lastDigit  = 0
        ,sum        = 0
    ;

    while(num != 0){
        lastDigit = num % 10;
        sum += lastDigit;
        num = parseInt(num / 10);
    }

    return sum;
}


console.log(sumDigits(1583));


function reverseNum(num){
    var strNum = num.toString();
    //var strNum = num.toString().split("").reverse().join("");
    //return parseInt(strNum);

    var splitString = strNum.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return parseInt(joinArray);
}

console.log(reverseNum(5167));

