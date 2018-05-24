function showWeather() {
    var currentBtn = this
        ,weather = {
        "s":{
            "text" : "clouds"
            ,"filename":"clouds"
        }
         ,   "m": {
                "text" : "rain"
                ,"filename":"rain"
            }
        ,"t":{
            "text" : "sun"
            ,"filename":"sun"
        }
         ,   "w" : {
                "text" : "sun"
                ,"filename":"sun"
            }
        ,"th" : {
            "text" : "rain"
            ,"filename":"rain"
        }
         ,   "f" : {
                "text" : "clouds"
                ,"filename":"clouds"
            }
        ,"sa" : {
            "text" : "sun"
            ,"filename":"sun"
        }
        }
        ,weatherDiv = document.getElementById("weather")
        ,weatherText = document.getElementById("weatherText")
        ,weatherImg = document.getElementById("weatherImg")
    ;
    console.log(weather[currentBtn.id]);
    weatherDiv.style.display = "block";
    weatherText.innerHTML = weather[currentBtn.id]["text"];
    weatherImg.src = "images/" + weather[currentBtn.id]["filename"] + ".png";
}

var btns = document.getElementsByTagName("button");
for(var i in btns){
    btns[i].onclick = showWeather;
}

