


var foodData = {
     "Гречневая каша":137
    ,"Колбаса вареная Докторская":257
    ,"Йогурт":65
    ,"Баранина":201
    ,"Кола":40
};

function getCals(title, weight) {

    return foodData[title] * weight / 100;
}

var cals = getCals("Гречневая каша", 150);

console.log(cals, "ccal");

var dinner = {
     "Гречневая каша":150
    ,"Баранина":100
    ,"Кола":200
    ,"Багет":50
}

function getDinnerCals(dinnerData) {
    var cals        = 0
        ,message    = ""
    ;

    for(var title in dinnerData){
        if(foodData[title]) {
            cals += foodData[title] * dinnerData[title] / 100;
        } else{
            message += title + " ";
        }
    }
    return {"cals" : cals, "message" : message};
}


var dinnerCals = getDinnerCals(dinner);

console.log("Dinner: ", dinnerCals["cals"], "ccal");

if(dinnerCals["message"]){
    console.log("There is no such product in our table - ", dinnerCals["message"]);

}

function getBirthday() {
    var birthdayData = {
        "5" : {
            "14":{
                "Kate" : 1990
                ,"Michael": 1982
            }
        }
    }
        ,today = new Date()
        ,day = today.getDate()
        ,month = today.getMonth() + 1
        ,year = today.getFullYear()
        ,friends =birthdayData[month][day]
        ,age = 0
    ;
    console.log("Today:", day + "/" + month + "/" + year);

    for(var name in friends){
        age = year - friends[name];
        console.log(name, " - ", age);
    }
}


getBirthday();

/***
 * 
 * Идеальный вес для женщины (кг) : (рост (см) х 3,5 : 2,54 - 108) х 0,453.
 Идеальный вес для мужчины (кг) : (рост (см) х 4,0 : 2,54 - 128) х 0,453.
 */

function getIW(height, sex, weight) {
    var k = {
        "male"      :   [4, 128]
        , "female"  :   [3.5, 108]
    }
        ,iw = Math.round((height * k[sex][0] / 2.54 - k [sex][1]) * 0.453)
        ,diff = iw - weight
        ;
    console.log("Your ideal weight is - ", iw);

    showMessage(diff);
}

function showMessage(deltaWeight) {
    if(deltaWeight > 0){
        console.log("You have to increase your weight for about ", deltaWeight, " kg");
    } else if(deltaWeight < 0){
        console.log("You have to decrease your weight for about ", deltaWeight, "kg");
    } else {
        console.log("Your weight is ideal! Keep it up!")
    }
}

getIW(170, "female", 60);