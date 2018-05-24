function game(){
	// this - элемент, который стал причиной события
	console.log(this);
	var userAnswer 				= this.className
		,userAnswerImg 			= document.getElementById("userAnswerImg")
		,m 						= 0
		,n 						= 2
		,computerAnswerIndex 	= Math.floor(Math.random() * (n - m + 1)) + m
		,answers 				= ["rock", "scissors", "paper"]
		,computerAnswer 		= answers[computerAnswerIndex]
		,computerAnswerImg 		= document.getElementById("computerAnswerImg")
		,result 				= document.getElementById("result")
		,resultMessage			=document.getElementById("resultMessage")
		,table					= {
								"rock" : {
										"rock"		: 0
										,"scisoors"	:1
										,"paper"	:-1
								}
								,"scissors" : {
										"rock"		:-1
										,"scisoors"	:0
										,"paper"	:1
								}
								,"paper" : {
										"rock"		:1
										,"scisoors"	:-1
										,"paper"	:0
								}
		}
		,messages = {
		"-1" : "you lose"
		,"1" : "dead heat"
		,"0" : "you win"
		}
		;
	userAnswerImg.src = "images/" + userAnswer + ".jpg";
	computerAnswerImg.src = "images/" + computerAnswer + ".jpg";
	result.style.display = "block";

	console.log(table[userAnswer][computerAnswer]);
	resultMessage.innerHTML = messages[table[userAnswer][computerAnswer]];
}

var btns = document.getElementsByTagName("button");
console.log(btns);



	for(var i in btns){
		btns[i].onclick = game;
	}

