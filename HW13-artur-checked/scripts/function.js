var foodData = {
		 "Гречневая каша" 				: 137
		,"Колбаса вареная Докторская" 	: 257
		,"Йогурт 1.5%" 					: 65
		,"Баранина" 					: 201
		,"Кола"							: 40
	};

function getCals(title, weight){
	var cals = foodData[title] * weight / 100
	;
	
	return cals;
}

console.log("Гречневая каша:", getCals("Гречневая каша", 150), "ккал");

var dinner = {
		"Гречневая каша" 	: 150
		,"Баранина"			: 100
		,"Кола"				: 200
		,"Багет"			: 50
	};
	
function getDinnerCals(dinnerData){
	var  cals 		= 0
		,message 	= ""
		;
		for(var title in dinnerData){
			if(foodData[title]){
				cals += foodData[title] * dinnerData[title] / 100;
			}
			else{
				message += title + " ";
			}
		}
	return {"cals" : cals, "message" : message};
}

var myDinner = getDinnerCals(dinner);
console.log("Обед:", myDinner["cals"], "ккал");

	if(myDinner["message"]){
		console.log("В нашей таблице нет таких продуктов: ", myDinner["message"]);
	}

function getBirthday(){
	var birthdayData = {
			"5" : {
				"14" : {
					"Kate" 		: 1990
					,"Misha" 	: 1982
				}
			}
		}
		,today 	= new Date()
		,day	= today.getDate()
		,month	= today.getMonth() + 1
		,year	= today.getFullYear()
		,friends= birthdayData[month][day]
		,age	= 0
 		;
	console.log("Сегодня:", day + "/" + month + "/" + year);
	
		for(var name in friends){
			age = year - friends[name];
			console.log(name, "-", age);
		}
}

getBirthday();

/*
Идеальный вес для женщины (кг) : 
(рост (см) х 3,5 : 2,54 - 108) х 0,453. 
Идеальный вес для мужчины (кг) : 
(рост (см) х 4,0 : 2,54 - 128) х 0,453.
*/
	
	function getIW(height, sex, weight){
		var k = {
				"male" 		: [4, 128]
				,"female" 	: [3.5, 108]
			}
			,iw 	= Math.round((height * k[sex][0] / 2.54 - k[sex][1]) * 0.453)
			,diff 	= iw - weight
			;
		console.log("Ваш идеальный вес:", iw, "кг");
		showMessage(diff);
	}
	
	function showMessage(diff){
		if(diff > 0){
			console.log("Рекомендуем Вам поправиться на", diff, "кг");
		}
		else if(diff < 0){
			console.log("Рекомендуем Вам похудеть на", Math.abs(diff), "кг");
		}
		else{
			console.log("Ваш вес идеален! Так держать ;)");
		}
	}

getIW(170, "female", 60);

