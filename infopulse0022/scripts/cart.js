function Cart(sSelector,sCartSelector){
    var c = this;
    c.init(sSelector);
    console.log(c.elem);
    c.cart     =  $(sCartSelector);
    c.list     =  c.cart.find('.b-minicart__list');
    c.button   =  c.cart.find('.b-minicart__button');
    c.total    =  c.cart.find('.b-minicart__total');
    c.quantity =  c.cart.find('.b-minicart__quantity');

    c.add  =  function(event){
        event.preventDefault();
        var orderForm = $(this);
        var addedGood = c.put(currentGood);
    };
    c.put  =  function(oCurrentGood){
        var addedGood = new Goods(oCurrentGood);
        oCurrentGood.addClass("b-good_in-cart");
        var goodIdClass = "b-good_id_" + addedGood.getId()
            ,existingGood = c.list.find("." + goodIdClass);
        if(existingGood){

        }
        else {
            var newGood = c.list.find('.b-good:first-child').clone();
            nGood.addClass(goodIdClass);
            c.copyData(oCurrentGood, newGood, [
                  '.b-good__image'
                , '.b-good__name'
                , '.b-order-form__quantity'
            ]);
        }

    };


    c.load =  function(){};
    c.showHideCart = function(){};
    c.changeQuantity = function(){};
    c.del = function(){};
    c.showCartInfo = function(){};




    c.put = function () {

    }


}

Cart.prototype = new Component();

function Cart() {
   var good1 =  new Goods();

   var addedGood = new Goods();

   var goodIdClass = 'b-good_id_'+ addedGood.getId();
   console.log(goodIdClass);
    //var existingGood = c.list.find('.' + goodIdClass);
}