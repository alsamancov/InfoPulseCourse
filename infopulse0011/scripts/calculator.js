function calculator(){
	// console.log("ok");
	var num1 		= 	$(".num1")
		,num2 		= 	$(".num2")
		,operators 	= 	$(".operators")
		,result 	= 	$(".result")
		,zeroError	= 	$(".zeroError")
		;
		
	//console.log(num1.value, num2.value, operators.value);
	num2.css("box-shadow", "none");
	zeroError.css("display", "none");
	
		if(operators.val() == "+"){
			result.val(
				(+ num1.val()) + (+ num2.val())
			);
		}
		else if(operators.val() == "-"){
			result.val((+ num1.val()) - (+ num2.val()));
		}
		else if(operators.val() == "*"){
			result.val((+ num1.val()) * (+ num2.val()));
		}
		else if(operators.val() == "^"){
			result.val(Math.pow((+ num1.val()), (+ num2.val())));
		}
		else if(operators.val() == "/"){
			if(+ num2.val()){
				result.val((+ num1.val()) / (+ num2.val()));
			}
			else{
				result.val("");
				num2.css("0 0 3px #ff0000");
				zeroError.css("inline");
			}
		}
}

//var btn = document.getElementById("calc_btn");
//btn.onclick = calculator;

$(".calc_btn").click(calculator);