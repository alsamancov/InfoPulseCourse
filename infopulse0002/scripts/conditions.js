var orderSum        = 5550
    ,deliveryPrice  = 40
    ,discount       = 0
    ,vipClient      = true
    ,bonusCard      = 1000
    ,promokod       = true;
    ;

    if(orderSum >= 450){
        console.log("You got free delivery!");
        deliveryPrice = 0;
    } else {
        console.log("Price of delivery: ",
            deliveryPrice, "hrn");
    }

    console.log("Price without discount: ", orderSum);
    if(bonusCard){
        orderSum -= bonusCard / 100;
        bonusCard = 0;
    }

    if(orderSum >= 700 && orderSum < 2000){
        discount = 3;
    } else if(orderSum >= 2000 && orderSum < 5000){
        discount = 5;
    } else if(orderSum > 5000){
        discount = 7;
        if(vipClient){
            discount += 3;
            console.log("You got 10% discount");

        }
    }
    if(promokod){
        orderSum -= 10;
    }



    console.log("discount :", discount, "%");

    orderSum -= orderSum * discount / 100;

    console.log("Total price :", orderSum);