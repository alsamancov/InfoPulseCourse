var  foo        = []
    ,array      = [1, 2, 3, 4, 5, 6]
    ,holidays   = {1:"Labor Day", 8:"Day of Memory", 9:"Victory Day", 13:"Mothers Day", 17:"Ascension of Our Lord", 27:"Day of the Holy Trinity"}
    ;

function fillEvenNumbers(n) {
    for(var i = -15; i <= n; i++){
        if(i % 2){
            foo.push(i);
        }
    }
    return foo;
}

function findMin(foo){
    var temp = 0;
    for(var i = 0; i < foo.length; i++){

        if(foo[i] < temp ){
            temp = foo[i];
        }
    }
    return temp;
}

function getSecondHalf(array){
    var mid = array.length / 2;
    var secondArr = array.splice(mid);
    return secondArr;

}


function randomPass(length){
    var rtn = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < length; i++){
        rtn += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return rtn;
}

function getCurrentTime(){
    return new Date().getHours() + ":" + new Date().getMinutes();
}

console.log("Filling an array........");

console.log(fillEvenNumbers(15));

console.log("Minimum number: ", findMin(foo));

console.log("Source array: ", array);

console.log("Array after change: ",getSecondHalf(array).concat(array));

console.log("Random password :", randomPass(8));

console.log("Current time : ", getCurrentTime());

for(var i = 1; i < 31; i++){
    if(holidays[i] != null) {
        console.log("May ", i, " today is  - ", holidays[i]);
    }
}

