var x = "Marta";

var s = x.charAt(2);

console.log(s);

var number = x.charCodeAt(2);

console.log(number);

var s2 = String.fromCharCode(114);

console.log(s2);

var letters = "AZ"
    ,firstLetterNum = letters.charCodeAt(0)
    ,lastLetterNum = letters.charCodeAt(1);

console.log(letters[0], " ", letters.charAt(1));

console.log("UNICODE :", firstLetterNum, " - ", lastLetterNum);

var alphabet = "";

for(var i = firstLetterNum; i <= lastLetterNum; i++){
    alphabet += String.fromCharCode(i) + " ";
}
console.log(alphabet);
