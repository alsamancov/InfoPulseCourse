function Form(sSelector){
	var f = this;
	
// свойства
	f.form 		= $(sSelector); // $("#form1")
	f.name 		= f.form.find(".b-form__name");
	f.surname 	= f.form.find(".b-form__surname");
	f.seasons 	= f.form.find(".b-form__season");
	f.fruit 	= f.form.find(".b-form__fruit");
	f.animal 	= f.form.find(".b-form__animals");
	f.review 	= f.form.find(".b-form__review");
	f.btn	 	= f.form.find(".b-form__ok-button");
	
// методы
	f.showInfo = function(){
		// console.log("ok");
		var seasonsList = "";
		// цикл по выборке html-элементов
		f.seasons.filter(":checked")
			.each(function(){
				seasonsList += $(this).val() + " ";
				});
		
		console.log(
			f.name.val()
			+ "\n"
			+ f.surname.val()
			+ "\n"
			+ seasonsList
			+ "\n"
			+ f.fruit.filter(":checked").val()
			+ "\n"
			+ f.animal.val()
			+ "\n"
			+ f.review.val()
		);
		
		console.log(
				f.getVal(f.name)
				+ "\n"
				+ f.getVal(f.surname)
				+ "\n"
				+ f.getVal(f.seasons, ",")
			);
	}
	
	f.getVal = function(oElem, sSeparator){
		var type 		= oElem.attr("type") // тип элемента управлени€, например, radio
			,tagName 	= oElem.prop("tagName").toLowerCase()
			;
			
			if(type == "radio"){
				return oElem.filter(":checked").val();
			}
			else if(type == "text" || type == "password" || tagName == "select" || tagName == "textarea"){
				return oElem.val();
			}
			else if(type == "checkbox"){
				var checkboxesList = "";
				// цикл по выборке html-элементов
				oElem.filter(":checked")
					.each(function(){
							if(checkboxesList){
								checkboxesList += sSeparator;
							}
						checkboxesList += $(this).val();
						});
				return checkboxesList;	
			}
			else{
				console.log("Ёлемент управлени€ с типом", type, "и именем тега", tagName, "не существует");
			}
	}	
		
/* 
	цикл по массивам (объектам)
		var users = {
				 "qwerty" 	: 1000
				,"admin" 	: 5000
				,"editor" 	: 3500
			};
			
		$.each(users, function(userName, messagesQty){
			console.log(userName, "-", messagesQty);
			});	 
*/

	
// событи€
	f.btn.click(f.showInfo);
}