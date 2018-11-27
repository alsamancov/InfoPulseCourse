function Gallery(sSelector){
	var g = this;
	
	g.gallery       = $(sSelector);
	g.pictures 		= g.gallery.find('.b-picture');
	g.preview 		= g.gallery.find('.b-preview');
	g.arrowPrev 	= g.gallery.find('.b-preview__arrow_prev');
	g.arrowNext 	= g.gallery.find('.b-preview__arrow_next');
	g.previewImage 	= g.gallery.find('.b-preview__image');
	g.previewText 	= g.gallery.find('.b-preview__text');
	g.current 		= 0;
	g.max 			= g.pictures.length;
	g.currentPlace 	= g.gallery.find('.b-preview__currentPlace');
	g.maxPlace 		= g.gallery.find('.b-preview__maxPlace');
	
	
	g.showPreview = function (){
		var currentPicture =$(this)
		g.current = g.pictures.index(currentPicture);
		g.display(currentPicture);
		
		
	};
	
	
	g.closePreview = function (event){
		
		//console.log(!event);
		//console.log(event);
		//console.log($(event.target).attr('class'));
		
		if(!event || $(event.target).hasClass('b-preview')){
			g.preview.removeClass("b-preview_shown");
		}
	};
	
	g.display = function (oPicture){
		var smallImage 		= oPicture.find('.b-picture__image');
			smallImageURL 	= smallImage.attr('src');
			bigImageSrc 	= smallImageURL.replace('small_','');
			//g.previewImage.attr('scr',bigImageSrc);
			
			g.previewImage.attr("src", bigImageSrc);
			g.previewText.html(smallImage.attr("alt"));
			g.preview.addClass("b-preview_shown");
			g.currentPlace.html(g.current+1);
			g.maxPlace.html(g.max);
		
	};
	
	g.showImage = function (iShift){
		
		console.log(g.current);
		g.current+=iShift;
	
		if(g.current>=g.max){
			g.current = 0;
		}
		else if(g.current<0){
			g.current = g.max-1;
		}
		
		
		g.display(g.pictures.eq(g.current));
	
	};
	
	g.showPrevious = function (){
		g.showImage(-1);
	};
	
	g.showNext = function (){
		g.showImage(1);
	};
	
	g.galleryEvents = function(event){

		console.log(event.shiftKey);
		console.log(event.which);
		
		if(event.which == 27){
			g.closePreview();
		}
		else if (event.which == 13 || event.which == 39 ){
			g.showNext();
		}
		else if(event.which == 32 ){
			g.showPrevious();
		}
        else if(event.shiftKey && event.which == 49){
            g.showPreview(g.pictures.eq(0));
        }
	};
	
	g.pictures.click(g.showPreview);
	g.preview.click(g.closePreview);
	g.arrowPrev.click(g.showPrevious);
	g.arrowNext.click(g.showNext);
	$('body').keyup(g.galleryEvents);
	
	//console.log(g.max);
	
	
}

