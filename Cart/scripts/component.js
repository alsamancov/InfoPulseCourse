function Component(){
	this.elem = null;
	
	this.init = function(sSelector){
		this.elem = $(sSelector);
	}
	
	this.findObj = function(sSelector){
		return this.elem.find(sSelector);
	}
}