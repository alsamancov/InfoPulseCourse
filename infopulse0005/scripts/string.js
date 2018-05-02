var sDate = "2-05-2018"
    ,aDate = sDate.split("-")
    ,months = {
        "05" : "May"
    }
;

console.log(aDate[0], months[aDate[1]], aDate[2]);

var sTime = "19:41"
    ,aTime = sTime.split(":")
    ,sText = "This program is free software"
    ,aText = sText.split(" ")
    ,word = sText.substr(5, 7)
    ,word1 = sText.slice(5, 12)
    ,substrIndex = sText.search("free")
    ,sNewText = sText.replace(" is", " was")
    ,message = "ты где?"
    ,symbols = {"т" : "t", "ы" : "y", "г" : "g"}
    ,newMessage = ""
    ,n = 0
    ,m = 9
    ,randNum = Math.floor(Math.random() * (n - m + 1)) + m
    ;

console.log(aTime);

console.log(aTime[0], " hours ", aTime[1], "minutes");

console.log(aText);

console.log(word);
console.log(word1);
console.log("position in string: ", substrIndex);
console.log(sNewText);

for(var i = 0; i < message.length; i++){

    newMessage += symbols[message[i]] ? symbols[message[i]] : message[i];
}

console.log(message, newMessage);

console.log("Random number is : ", randNum);


