var     num1 = 5
    ,num2 = 9
    ,result = 0
    ,name = "Masha"
    ,message = "Hello"
;

console.log(num1, num2, result);

result = num1 + num2;

console.log(num1, " + ", num2, " = ", result);

result = num1 / num2;

console.log(num1, " / ", num2, " = ", result);

num1 = 18;
num2 = 4;

result = 0;

result = 18 % 4;

console.log(result);

result += 5;
console.log(result);

result = 0;


console.log(result++);

num1 = 2;

num2 = 2;

console.log("num1 : ", num1, " num2 : ", num2, " == ",  (num1 == num2));

num2 = "2";

console.log("num1 : ", num1, " num2 : '", num2, "' === ",  (num1 === num2));


num1 = 0;
num2 = 3;

console.log("num1 :", !num1, "num2 : ", !num2);

message += ", " + name + "!";
console.log(message);



