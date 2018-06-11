function Calculation (sSelector) {

	var c = this;

	// свойства
	c.calculation 	= $(sSelector); // главный див
	c.weight 		= c.calculation.children(".weight");
	c.height 		= c.calculation.children(".height");
	c.sex 			= c.calculation.children(".sex");
	c.result 		= c.calculation.children(".result");
	c.message 		= c.calculation.children(".message");
	c.btn 			= c.calculation.children(".okBtn");
		
	c.idealWeight = function (){
		var k = {
				"male" 		: [4, 128]
				,"female" 	: [3.5, 108]
				}
			,iw 	= Math.round((c.height.val() * k[c.sex.val()][0] / 2.54 - k[c.sex.val()][1]) * 0.453)
			,diff 	= iw - c.weight.val()
			; 
			console.log("Ваш идеальный вес:", iw, "кг");
			c.showMessage(iw, diff);
			// return [iw, diff];
			$(this).css("background", "red"); // this - элемент, который стал причиной события, в нашем случае - кнопка
		}
			
	c.showMessage = function (iw, diff){
		c.result.val(iw);
		
			if(diff > 0){
				//console.log("Рекомендуем Вам поправиться на", diff, "кг");
				c.message.html("Рекомендуем Вам поправиться на" + diff + "кг");
			}
			else if(diff < 0){
				//console.log("Рекомендуем Вам похудеть на", Math.abs(diff), "кг");
				c.message.html("Рекомендуем Вам похудеть на" +Math.abs(diff) + "кг");
			}
			else{
				c.message.html("Ваш вес идеален! Так держать ;)");
			}
		}		

	c.btn.click(c.idealWeight);	
	/*
	наш_метод_для_обработки_события = function(){
		1. this = элемент
		2. this = элемент из массив_элементов, который стал причиной событи (например, есть массив дивов, но кликнули только по одному, вот и и попадает в this)
	}
	
	1. элемент.событие(наш_метод_для_обработки_события);
	2. массив_элементов.событие(наш_метод_для_обработки_события);
	*/
}


