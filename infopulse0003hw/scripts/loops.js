var numbers = [-2, 11, 5, 2, 7, 4, -3, 1, -8, 9, 6, -4, 3, 0, 10, 8, -5];

console.log("Numbers that are less than 3, and even:")
for(i = 0; i < numbers.length; i++){
    if(numbers[i] < 3 && !(numbers[i]%2)){
        console.log(numbers[i]);
    }
}


console.log("Positive numbers on even positions:");

for(i = 0; i < numbers.length; i++){
    if(!(i % 2) && numbers[i] > 0){
        console.log("number - ", numbers[i], "; position - ", i);
    }
}

var sum = 0;

for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
//document.getElementById("demo").innerHTML = "The sum of all the numbers in the array: " + sum;
console.log("The sum of all the numbers in the array: ", sum);

