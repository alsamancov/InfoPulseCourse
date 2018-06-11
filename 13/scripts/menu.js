// ********** ES5 ********** 
// класс
function Menu(sSelector){ 
/* 
sSelector:
- s - string - тип данных переменной для читабельности кода
- Selector - имя
*/
	var m = this;
	
	console.log("this", this);
	
// свойства
	m.menu = $(sSelector); // меню - ul
	m.menuItems = m.menu.children("li"); // пункты меню - li
	// console.log(m.menuItems);

// методы	
	m.showMenu = function(){
		// console.log(this);
		// $(this).children("ul").css("display", "block");
		// $(this).children("ul").show(300);
		// $(this).children("ul").addClass("b-submenu_shown");
		// $(this).children("ul").stop().slideDown();
		$(this).children("ul")	
			.stop()
			.css({"display" : "block"})
			.animate({"opacity" : 1}, 400)
			;
	}
	m.hideMenu = function(){
		// $(this).children("ul").css("display", "none");
		// $(this).children("ul").hide(300);
		// $(this).children("ul").removeClass("b-submenu_shown");
		// $(this).children("ul").stop().slideUp();
		$(this).children("ul")	
			.stop()
			.animate({"opacity" : 0}, 400, function(){
				$(this).css("display", "none");
			});
	}

// события
	m.menuItems
		.mouseover(m.showMenu)
		.mouseout(m.hideMenu);
}


