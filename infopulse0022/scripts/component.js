function Component() {
    this.elem = null;

    this.init = function (sSelector) {
        this.elem = $(sSelector);
    };

    this.findObj = function (sSelector) {
        return this.elem.find(sSelector);
    };

    this.copyData = function (oSource, oDestination, aFieldNames) {

        $.each(aFieldNames, function (i, fieldName) {
            var oSourceElement = oSource.find(fieldName)
                ,oDestinationElement = oDestination.find(fieldName)
                ,tagName = oSourceElement.prop("tagName");
            console.log(oSourceElement, oDestinationElement, tagName);
        });

    };
}
