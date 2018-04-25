var nums        = [58, 9, -5, -1, 4, -2, 7]
    ,numsLength = nums.length
    ,goods      = {
         "ASD"   :   1000
        ,"QWE"   :   1300
        ,"ZXC"   :   900
    }
    ,vocabular = {
        "yellow" : "желтый"
        ,"white" : "белый"
        ,"green" : "зеленый"
    }
    ,good2 = {
        1 : {
            "title" : "one"
            ,"brand" : "samsung"
            ,"price" : 1000
        }
        ,2 :{
                "title" : "two"
                ,"brand" : "hp"
                ,"price" : 100000
            }
        ,3 :{

            "title" : "two"
            ,"brand" : "hp"
            ,"price" : 100000
        }

    }
    ;

for(var i = 1, max = nums[0]; i < numsLength; i++){
    if(nums[i] > max){
        max = nums[i];
    }
}

//document.getElementById("demo").innerHTML = "Max number is: " + max;

console.log("Max number is :", max);

for(var id in goods){
    console.log(id, " - ", goods[id], "hrn");
}

//document.getElementById("key").innerHTML = ""

for(var id in vocabular){
    console.log(id, " is ", vocabular[id]);
}

for(var id in good2){
    console.log(id, " - ", good2[id]["title"]);
    console.log(id, " - ", good2[id]["brand"]);
    console.log(id, " - ", good2[id]["price"]);
}

