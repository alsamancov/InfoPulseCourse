for(var i = 1; i < 4; i++){
    console.log("step: ", i);
}

for(var i = 3; i > 0; i--){
    console.log("step: ", i);
}

var nums            = [1, -1, 3, 2, 5, -4, 8]
    ,colors         = ["red", "blue", "green"]
    ,colorsLength   = colors.length
    ,numsLength     = nums.length
    ;

console.log("Amount of elements ", numsLength);

for(var i = 0; i < numsLength; i++){
    if(nums[i] < 0) {
        console.log("element of array ", i, " :", nums[i]);
    }
}
console.log("Range from - 5 to 5");

for(i = 0; i < numsLength; i++){
    if(nums[i]>= -5 && nums[i] <= 5) {
        console.log("# ", i, " element :", nums[i]);
    }
}

console.log("Even numbers: ");
for(i = 0; i < numsLength; i++){
    if(nums[i] > 0 && !(nums[i] % 2)) {
        console.log("#", i, " element: ", nums[i]);
    }
}

/**
 * nums[i] % 2 == 0 - true
 * !(nums[i] % 2)   - true
 */

console.log("array elements through one");

for(i = 0; i < numsLength; i += 2){
    console.log("#", i, " element: ", nums[i]);
}

console.log("amount of zero");
var result = 0;
for(i = 0; i < numsLength; i++){
    if(!nums[i]){ //nums[i] == 0   // !nums[i]
        result++;
    }
}

console.log(result);

console.log("Odd numbers");

for(i = 0; i < numsLength; i++){
    console.log("Display :", nums[i] % 2);
    if(nums[i] % 2){ //nums[i] == 0   // !nums[i]
        console.log("#", i, " equal ", nums[i]);
    }
}


for(i = 0; i < colorsLength; i++){
    console.log("#", i, " color - ", colors[i]);
}