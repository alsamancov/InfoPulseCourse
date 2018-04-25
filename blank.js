var price = 350
    , delay = 15
    , fine = 0
    , privilege = 15
;
console.log("Сумма к оплате составит", price, "грн.");

if(delay > 0 && delay <= 10){
    pc = 10;
}
else if(delay > 10) {
    pc = 30;
}

fine = price * pc / 100;
price += fine;
console.log(delay > 10 ? "При просрочке больше 10 дней пеня составит" : "Пеня составит", fine, "грн.");
console.log("Cумма к оплате", price, "грн.")

if (privilege >= 1){
	price -= price * (privilege/100);
    console.log("Субсидия составит", privilege, "грн.");
    console.log("Сумма к оплате с учетом субсидии", price - privilege, "грн.");
}

