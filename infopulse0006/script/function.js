function  calcSum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

console.log(calcSum(1, 5));

console.log(calcSum(2, 8));

var a = 4, b = 7;

console.log(calcSum(a, b));

var x = 3;
function test() {
     x = 4;
     console.log("local : ", x);
     var x = 1;
     console.log("local2 : ", x);
}

test();

console.log("global : ", x);