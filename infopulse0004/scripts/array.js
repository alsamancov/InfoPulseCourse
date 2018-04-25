var colors = ["red", "green", "blue"];
console.log(colors);
colors.unshift("orange");
console.log(colors);
colors.push("violet");
console.log(colors);
console.log(colors.length);

var shift = colors.shift();

console.log(shift);

var pop = colors.pop();

console.log(pop);

colors.splice(1, 0, "black");
console.log(colors);

colors.splice(2, 1);

console.log(colors);

colors.splice(2, 1, "white");

console.log(colors);

//delete colors[1];

colors.reverse();
console.log(colors);

colors.sort();

console.log(colors);

var s = colors.join("/");

console.log(s);

var number = colors.indexOf("red");

console.log(number);

console.log(colors);

