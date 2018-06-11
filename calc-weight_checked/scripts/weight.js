function Form(sSelector){
	var f = this;
	
	f.form 	 = $(sSelector);
	f.gender = f.form.find(".gender");
	f.height = f.form.find(".height");
	f.weight = f.form.find(".weight");
	f.message = f.form.find(".message");
	f.review = f.form.find(".review");
	f.btn 	 = f.form.find(".button");
	
	f.getIW = function(event){
		event.preventDefault();
		
		var k = {
				"male" 		: [4, 128]
				,"female" 	: [3.5, 108]
			}
			,iw 	= Math.round((f.height.val() * k[f.gender.val()][0] / 2.54 - k[f.gender.val()][1]) * 0.453)
			,diff 	= iw - f.weight.val()
			;
		f.showMessage(iw, diff);
	}
	
	f.showMessage = function(iw, diff){
	
		console.log("Ваша ідеальна вага:", iw, "кг");
		
		f.message.css("display", "block");
		f.review.css("display", "block");
		
		f.message.html("Ваша ідеальна вага:" + iw + "кг");
		
		if(diff > 0){
			console.log("Рекомендуем Вам поправиться на", diff, "кг");
			f.review.html("Рекомендуем Вам поправиться на" + diff + "кг");
		}
		else if(diff < 0){
			console.log("Рекомендуем Вам похудеть на", Math.abs(diff), "кг");
			f.review.html("Рекомендуем Вам похудеть на" + Math.abs(diff) + "кг");
		}
		else{
			console.log("Ваш вес идеален! Так держать ;)");
			f.review.html("Ваш вес идеален! Так держать ;)");
		}
	}
	
	f.btn.click(f.getIW);	
}