function factorial(N){
    return N<=1 ? 1 : N*factorial(N-1);
}

//console.log(factorial(5));

function showResult() {
    console.log(factorial(7));
}

function printRange(iNumber){
    if (iNumber){
        console.log(iNumber);
        printRange(--iNumber);
    }
}
//printRange(34);

/**
function sum(num) {
    //return num === 100 ? (num + sum(++num));
    return num ===100 ? 100 : num*sum(num+1);
}

console.log(sum(1));
 */


//object button
var btn1 = document.getElementById("btn1");
console.log(btn1.tagName);

function showMessage() {
    console.log("my message");
}

btn1.onclick = showMessage;