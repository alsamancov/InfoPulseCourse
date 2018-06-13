//****************ES5****************
// class
function Menu(sSelector) {
    /**
     * sSelector
     * where s - String data type
     * Selector - name of variable
     */
    var m = this;

    //properties
    m.menu = $(sSelector); // menu - tag ul
    m.menuItems = m.menu.children("li");
    console.log(m.menuItems);

    //methods

    m.showMenu = function () {
        //$(this).children("ul").css("display", "block");
        //$(this).children("ul").show(300);

        //$(this).children("ul").addClass("b-submenu_shown");
        //$(this).children("ul").stop().slideDown();
        $(this).children("ul")
            .stop()
            .css("display", "block")
            .animate({"opacity" : 1}, 400)
        ;
    }

    m.hideMenu = function () {
        //$(this).children("ul").css("display", "none");
        //$(this).children("ul").hide(300);
        //$(this).children("ul").removeClass("b-submenu_shown");
        //$(this).children("ul").stop().slideUp();
        $(this).children("ul")
            .stop()
            .animate({"opacity" : 0}, 400, function () {
                $(this).css("display", "none")
            });
    }

    m.showHideMenu = function (event) {
        event.preventDefault();
        m.menuItems.children("ul").stop().slideUp();
        $(this).children("ul").stop().slideToggle();
    }

    //events
    // m.menuItems.mouseover(m.showMenu);
    // m.menuItems.mouseout(m.hideMenu);

        // .mouseover(m.showMenu)
        // .mouseout(m.hideMenu);
    m.menuItems.click(m.showHideMenu);
}


