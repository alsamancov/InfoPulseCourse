function Cart(sSelector,sCartSelector){
	
	
	
	var c = this;
	c.init(sSelector);
	
	//console.log(c.elem);
	
	c.elem;
	c.cart     =  $(sCartSelector);
	c.list     =  c.cart.find('.b-minicart__list');
	c.button   =  c.cart.find('.b-minicart__button');
	c.total    =  c.cart.find('.b-minicart__total');
	c.quantity =  c.cart.find('.b-minicart__quantity');
	console.log(c.list);
	
	c.add  =  function(event){
		event.preventDefault();
		var orderForm = $(this);
		currentGood = orderForm.closest('.b-good');
		c.put(currentGood);
		
	};
	c.put  =  function(oCurrentGood){
		var addedGood = new Good(oCurrentGood);
		oCurrentGood.addClass('b-good_in-cart');
		
		var goodIdClass = 'b-good_id_' + addedGood.getId();
		
		console.log(c.list);
		var existingGood = c.list.find('.'+goodIdClass);
		
		if(existingGood.length){
			
		}
		else{
			var newGood = c.list.find('.b-good:first-child').clone();
			
			newGood.addClass(goodIdClass);
			
			c.copyData(oCurrentGood,newGood,[
			 '.b-good__image'
			,'.b-good__name'
			,'.b-order-form__quantity'
			]);
			
		}
		//console.log(newGood);
		
	};
	c.load =  function(){};
	c.showHideCart = function(){};
	c.changeQuantity = function(){};
	c.del = function(){};
	c.showCartInfo = function(){};
	
	c.findObj('.b-order-form').submit(c.add);
	

}

Cart.prototype = new Component();