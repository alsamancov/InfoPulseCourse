function Form(sSelector) {
    var f = this;

    //properties

    f.form          = $(sSelector);
    f.name          = f.form.find(".b-form__name");
    f.surname       = f.form.find(".b-form__surname");
    f.seasons       = f.form.find(".b-form__season");
    f.fruit         = f.form.find(".b-form__fruit");
    f.animal        = f.form.find(".b-form__animals");
    f.review        = f.form.find(".b-form__review");
    f.links         = f.form.find(".b-langs__lang");
    f.btn           = f.form.find(".b-form__ok-button");

    //methods
    f.showInfo = function () {
        //console.log("ok");

        var seasonsList = "";
        f.seasons.filter(":checked")
            .each(function () {
                seasonsList += $(this).val() + " ";
            });

        console.log(
            f.name.val()
            + "\n"
            + f.surname.val()
            + "\n"
            + f.seasons.val()
            + "\n"
            + f.fruit.filter(":checked").val()
            + "\n"
            + f.animal.val()
            + "\n"
            + f.review.val()

        );

        console.log(
            "#############################"
        +f.getVal(f.name))
        + "\n"
        + f.getVal(f.surname)
        + "\n"
        + f.getVal(f.seasons, ",")
        + "\n"
        + f.getVal(f.fruit)
        + "\n"
        + f.getVal(f.animal)
        + "\n"
        + f.getVal(f.review)
    }

    f.getVal = function (oElem) {
        var type    = oElem.attr("type")
            ,tagName = oElem.prop("tagName").toLowerCase()
        ;

        if(type == "radio"){
            return oElem.filter(":checked").val();
        }
        else if(type == "text" ||  type == "password" || tagName == "select" || tagName == "textarea"){
            return oElem.val();
        }
        else if(type == "checkbox"){
            var checkboxesList = "";
            oElem.filter(":checked")
                .each(function () {
                    checkboxesList += $(this).val() + " ";
                });
            return checkboxesList;
        }
        else {
            console.log("there is no such element");
        }
    }

    var users = {
        "qwerty"    : 1000
        ,"admin"    : 5000
        ,"editor"   : 3500
    };

    $.each(users, function (userName, messageQty) {
        console.log(userName, "-", messageQty);
    });

    f.changeLang = function(event) {
        event.preventDefault();
        var currentLang = $(this).data("lang");
        //console.log(currentLang);
        //console.log(_pageSettings.langs);
        $.each(_pageSettings.langs, function (className, data) {
            console.log(className, "-", data);
            f.form.find("." + className).text();
        });
    }

    //events

    f.btn.click(f.showInfo);
    f.links.click(f.changeLang());
}