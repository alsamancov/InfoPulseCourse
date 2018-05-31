function game(){
	// this - элемент, который стал причиной события
	console.log(this);
	var userAnswer 				= $(this).attr("class")
		,userAnswerImg 			= $(".userAnswerImg")
		,m 						= 0
		,n 						= 2
		,computerAnswerIndex 	= Math.floor(Math.random() * (n - m + 1)) + m
		,answers 				= ["rock", "scissors", "paper"]
		,computerAnswer 		= answers[computerAnswerIndex]
		,computerAnswerImg 		= $(".computerAnswerImg")
		,result 				= $(".result")
		,resultMessage			= $(".resultMessage")
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
	userAnswerImg.attr("src", "images/" + userAnswer + ".jpg");
	computerAnswerImg.attr("src", "images/" + computerAnswer + ".jpg");
	result.css("display", "block");

	/console.log(table[userAnswer][computerAnswer]);
	resultMessage.html( messages[table[userAnswer][computerAnswer]]);
}

$(".answers button").click(game);


	for(var i in btns){
		btns[i].onclick = game;
	}

