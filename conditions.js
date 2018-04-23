var orderSum 		= 5550
	,deliveryPrice 	= 40
	,discount		= 0
	,vipClient		= true
	,bonusCard		= 1000
	,bonus			= 500
	,weekend		= true
	;

	if(orderSum >= 450){
		console.log("Бесплатная доставка!");
		deliveryPrice = 0;
	}
	else{
		console.log("Стоимость доставки:", deliveryPrice, "грн.");
	}
	
	if(orderSum >= 700 && orderSum < 2000){
		discount = 3;
	}
	else if(orderSum >= 2000 && orderSum < 5000){
		discount = 5;
	}
	else if(orderSum >= 5000){
		discount = 7;
			if(vipClient){ // vipClient === true
				discount = 10;
				console.log("Ваша скидка вип-клиента :)");
			}
	}

console.log("Сумма заказа:", orderSum, "грн.");
console.log("Скидка:", discount, "%");

orderSum -= orderSum * discount / 100;
console.log("Сумма заказа со скидкой:", orderSum, "грн.");

console.log("На бонусной карте:", bonusCard);
	if(bonusCard){
		orderSum -= bonus / 100;
		bonusCard -= bonus;
		console.log("Сняли бонусов:", bonus);
	}
console.log("Сумма заказа c бонусами:", orderSum, "грн.");

// тернарный оператор
orderSum -= orderSum >= 500 && weekend ? 50 : 0;

orderSum += deliveryPrice;	
console.log("Сумма к оплате с доставкой:", orderSum, "грн.");

	