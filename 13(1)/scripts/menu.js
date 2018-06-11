// ********** ES5 ********** 
// �����
function Menu(sSelector){ 
/* 
sSelector:
- s - string - ��� ������ ���������� ��� ������������� ����
- Selector - ���
*/
	var m = this;
	
	console.log("this", this);
	
// ��������
	m.menu = $(sSelector); // ���� - ul
	m.menuItems = m.menu.children("li"); // ������ ���� - li
	// console.log(m.menuItems);

// ������	
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

// �������
	m.menuItems
		.mouseover(m.showMenu)
		.mouseout(m.hideMenu);
}


