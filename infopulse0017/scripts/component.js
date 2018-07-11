function Gallery(sSelector){
    var g = this;

    g.gallery       = $(sSelector);
    g.pictures      = g.gallery.find('.b-picture');
    g.arrowPrev     = g.gallery.find('.b-preview__arrow_prev');
    g.arrowNext     = g.gallery.find('.b-preview__arrow_next');
    g.preview       = g.gallery.find('.b-preview');
    g.previewImage  = g.gallery.find('.b-preview__image');
    g.previewText   = g.gallery.find('.b-preview__text');

    g.current = 0;
    g.max = g.pictures.length;
    g.pictures.click(g.showPreview);

    g.preview.click(g.closePreview);

    g.arrowPrev.click(g.showPrevious);
    g.arrowNext.click(g.showNext);

    g.showPreview = function () {

    };

    g.closePreview = function () {

    };

    g.showPrevious = function () {
        g.showImage(-1);
    };

    g.showNext = function () {
        g.showImage(1)
    };

    g.galleryEvents = function(event){
        if(event.which == 27){
            g.closePreview();
        }
    }

    g.display = function (oPicture) {
        var smallImage = oPicture.find('.b-picture_image');
        smallImageURL = smallImage.attr('src');
        bigImageSrc = smallImageURL.replace('small_', '');
        console.log(bigImageSrc);
        g.previewImage.attr('src', bigImageSrc);
        g.previewText.html(smallImage.attr('alt'));
        g.preview.addClass('b-preview__shwon');
        console.log($(this).attr("class"));
        console.log($(event.target).attr("class"));
        if($(event.target).hasClass('b-preview')){
            g.preview.removeClass('b-preview_shown');
        }
    };

    g.showImage = function(iShift){
        g.current += i
    }
}