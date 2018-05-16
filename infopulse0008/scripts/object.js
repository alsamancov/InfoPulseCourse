//ES 5
function Person(weight, height, year) { //fuction-class

    var p = this;

    p.weight = weight || 0;
    p.height = height || 0;
    p.year = year || 0;

    var age = 0
        ,name = ""
    ;
    this.getAge = function () {
        var today = new Date()
            ,currentYear = today.getFullYear()
        ;
        age = currentYear - p.year;
        return age;
    }

    p.setName = function (sName) {
        name = sName;
        return name;
    }

}

//object
var person1 = new Person(78, 175, 1977);
console.log(person1)

var height = person1.height;
console.log(height);
person1.height = 30;

console.log(person1);


var person2 = new Person(55, 166);
console.log(person2);

var age = person1.getAge();
person1.setName("Ted");

console.log(person1.setName("Robbin"));

console.log(age);




function Bird(title, type) {
    this.title = title;
    this.type = type;

    this.fly = function () {
        console.log("I'm flying!!!");
    }
}

var nightingale = new Bird("nightingale", "singing");


nightingale.fly();
console.log(nightingale.title);
console.log(nightingale.type);

