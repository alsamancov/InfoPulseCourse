function Cart(sSelector,sCartSelector){
	
	
	
	var c = this;
	c.init(sSelector);
	
	//console.log(c.elem);
	
	c.elem;
	c.cart     =  $(sCartSelector);
	c.goods    = {}; /*id: qty*/
	c.list     =  c.cart.find('.b-minicart__list');
	c.button   =  c.cart.find('.b-minicart__button');
	c.total    =  c.cart.find('.b-minicart__total');
	c.quantity =  c.cart.find('.b-minicart__quantity');
	$.cookie.json = true;
	
	console.log(c.list);
	
	c.add  =  function(event){
		event.preventDefault();
		var orderForm = $(this);
		currentGood = orderForm.closest('.b-good');
		var addedGood = c.put(currentGood);
		
			
		
		c.goods[addedGood.getId()] = orderForm.find('.b-order-form__quantity').val();
		
		c.saveCookie();
	};
	c.put  =  function(oCurrentGood){
		var addedGood = new Good(oCurrentGood);
		oCurrentGood.addClass('b-good_in-cart');
		
		var goodIdClass = 'b-good_id_' + addedGood.getId();
		
		console.log("addedGood: ",addedGood);
		var existingGood = c.list.find('.'+goodIdClass);
		
		if(existingGood.length){
			
		}
		else{
			var newGood = c.list.find('.b-good:first-child').clone();
			
			newGood.addClass(goodIdClass);
			console.log(newGood);
			c.copyData(oCurrentGood,newGood,[
			 '.b-good__image'
			,'.b-good__name'
			,'.b-order-form__quantity'
			]);
			/*console.log(newGood);*/
			
			newGood.find('.b-good__delete').click(c.del);
			
			c.list.find('.b-goods').append(newGood);
			return addedGood;
		
		}
	
		
	};
	c.load =  function(){
		c.goods = $.cookie('cartGoods');
	
		console.log('c.goods:',c.goods);
		if(c.goods){
			$.each(c.goods,function(goodId,quantity){
				var currentGood = c.findObj('.b-good_id_' + goodId);
				currentGood.find('.b_order-form__quantity').val(quantity);
				c.put(currentGood);
			})
		}
		else{
			c.goods = {};
		}
	};
	c.showHideCart = function(){
		c.list.slideToggle();
	};
	c.changeQuantity = function(){};
	c.del = function(event){
		event.preventDefault();
		var currentGood = $(this).closest('.b-good')
		   ,goodDel = new Good(currentGood)
		   ,goodId = goodDel.getId();
		  
		 console.log('goodId:', goodId);
		 currentGood.remove(); 
		 
		 c.cart.find('b-good_id_'+goodId).removeClass('b-good_in-cart');
		 // delete from cookie
		 delete c.goods[goodId];
		c.saveCookie();
		  
	};
	
	c.saveCookie = function(){
		$.cookie('cartGoods',c.goods,
		{"expires":7,"path":"/"});
		c.list.stop().slideDown();
	};
	c.showCartInfo = function(){
        var qty	 	= 0
            ,total 	= 0
        ;
        $.each(c.goods, function (goodsId, goodsQty) {
			qty += + goodsQty;
			total += + c.findObj(".b-good_id_" + goodsId + " .b-good__price");
        	"b-good_id_" +
        })
	};
	
	c.load();
	c.button.click(c.showHideCart);
	
	c.findObj('.b-order-form').submit(c.add);
	

}

Cart.prototype = new Component();