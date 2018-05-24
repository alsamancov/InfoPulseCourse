function calculator(){
	// console.log("ok");
	var num1 		= document.getElementById("num1")
		,num2 		= document.getElementById("num2")
		,operators 	= document.getElementById("operators")
		,result 	= document.getElementById("result")
		,zeroError	= document.getElementById("zeroError")
		;
		
	console.log(num1.value, num2.value, operators.value);
	num2.style.boxShadow = "none";
	zeroError.style.display = "none";
	
		if(operators.value == "+"){
			result.value = (+ num1.value) + (+ num2.value);
		}
		else if(operators.value == "-"){
			result.value = (+ num1.value) - (+ num2.value);
		}
		else if(operators.value == "*"){
			result.value = (+ num1.value) * (+ num2.value);
		}
		else if(operators.value == "^"){
			result.value = Math.pow((+ num1.value), (+ num2.value));
		}
		else if(operators.value == "/"){
			if(+ num2.value){
				result.value = (+ num1.value) / (+ num2.value);
			}
			else{
				result.value = "";
				num2.style.boxShadow = "0 0 3px #ff0000";
				zeroError.style.display = "inline";
			}
		}
}

//var btn = document.getElementById("calc_btn");
//btn.onclick = calculator;

$(".calc_btn").click(calculator);