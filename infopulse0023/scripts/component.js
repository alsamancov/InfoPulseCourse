function Component(){
	this.elem = null;
	
	this.init = function(sSelector){
		this.elem = $(sSelector);
	}
	
	this.findObj = function(sSelector){
		return this.elem.find(sSelector);
	}
	
	this.copyData = function(oSource,oDestination, aFieldNames){
		/*console.log('oSourceElemant:',oSource);*/
		/*console.log('oDestinationElement:',oDestination);*/
		
		$.each(aFieldNames, function(i,fieldName){
			var  oSourceElement 	 = oSource.find(fieldName)
				,oDestinationElement = oDestination.find(fieldName)
				,tagName             = oSourceElement.prop('tagName')
			;
			
			console.log('oDestinationElement.attr:',oDestinationElement.attr('src'));
			
			if(tagName == 'IMG'){
				oDestinationElement.attr(
				'src'
				,oSourceElement.attr('src')
				);
			}
			else if(
			tagName == 'INPUT' || tagName == 'TEXTAREA'
			){
				oDestinationElement.val(
					oSourceElement.val()
				)
			}
			else{
				oDestinationElement.html(
					oSourceElement.html()
				)
				
			}
			
			/*console.log('oSourceElemant.attr: ',oSourceElement.attr('src'));
			console.log('oDestinationElement.attr:',oDestinationElement.attr('src'));
			console.log('tagName: ', tagName);*/
			
		})
		console.log('oSourceElemant:',oSource);
		console.log('oDestinationElement:',oDestination);
	}
}