var  num1 	= 5
	,num2 	= 9
	,result = 0
	,name	= "Masha"
	,message= "Hello"
	;
	
console.log("num1:", num1, "num2:", num2, "result:", result);

result = num1 + num2;
console.log(num1, "+", num2, "=", result);

result = num1 / num2;
console.log(num1, "/", num2, "=", result);

num1 = 18;
num2 = 4;
result = 0;
console.log("num1:", num1, "num2:", num2, "result:", result);

result = num1 % num2;
console.log(num1, "%", num2, "=", result);

result += 5; // result = result + 5;
console.log("result += 5:", result);

num1 = 1;
num2 = 1;
result = 0;
console.log("num1:", num1, "num2:", num2, "result:", result);

result ++; // result += 1;
console.log("result ++:", result);

++ result;
console.log("++ result:", result);

result = 0;
console.log("num1:", num1, "num2:", num2, "result:", result);

result = num1 ++;
console.log("num1:", num1, "result:", result);

result = ++ num2;
console.log("num2:", num2, "result:", result);

console.log("num1 == num2:", num1 == num2);
console.log("num1 != num2:", num1 != num2);

num2 = "2";
// сравнение по значению
console.log("num1 == num2:", num1 == num2);
// сравнение по значению и по типу
console.log("num1 === num2:", num1 === num2);

num1 = 0;
num2 = 3;
console.log("!num1:", !num1, "!num2:", !num2);

message += ", " + name + "!";
console.log(message);



