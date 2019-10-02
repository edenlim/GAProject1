var input = document.getElementById("input");
var output = document.getElementById("output");
var index;
var replyArr = [];
var matchArr = [];

var numberArr = ["1","2","3","4","5","6","7","8","9","10","one","two","three","four","five","six","seven","eight","nine","ten"];

var objectQns = [
    {
        question: "How many siblings do you have?",
        keyword: ["brother","sister","brothers","sisters","none","no","and","a","1","2","3","4","5","6","7","8","9","10","one","two","three","four","five","six","seven","eight","nine","ten"],
    },
    // {
    //     question: "What food do you like?",
    //     keyword: ["noodle","rice"],
    // },
]

function chooseAQuestion(){
    var objectLength = objectQns.length
    // console.log("object length: "+objectLength);
    var randomQnsIndex = Math.floor(Math.random()*objectLength);
    // console.log("The random index rolled: "+randomQnsIndex);
    var randomQns = objectQns[randomQnsIndex]["question"];
    // console.log("The question asked: "+randomQns);
    output.innerHTML = randomQns;
    index = randomQnsIndex;
}

function parrot(key,inputText){
    if (key === "Enter"){
        event.target.value = ""
        replyArr = inputText.split(" ");
        console.log("What was inputed: "+inputText);
        console.log("After being split: "+replyArr);
        console.log("Current index: "+index);
        for(var i = 0; i < replyArr.length; i++){
            for(var j = 0; j<objectQns[index]["keyword"].length; j++){
                if (replyArr[i] === objectQns[index]["keyword"][j]){
                    matchArr.push(objectQns[index]["keyword"][j]);
                    console.log(matchArr);
                }
            }
        }

        if(matchArr.includes("none")){
            output.innerHTML = "I see... You're a single child";
        } else if (matchArr.includes("and")){
            output.innerHTML = "I also have brothers and sisters!";
        } else if(matchArr.includes('a')){
            if(matchArr.includes("brother")){
                output.innerHTML = "I have a brother too!"
            } else if (matchArr.includes("sister")){
                output.innerHTML = "I have a sister too!"
            }
        } else if (matchArr != []){
            for (var i = 0; i<numberArr.length;i++){
                if(matchArr.includes(numberArr[i])){
                    if(parseInt(numberArr[i]) > 4){
                        var textoutput = `What! ${numberArr[i]} siblings is a lot!`;
                        output.innerHTML = textoutput;
                    } else{
                        var textoutput = numberArr[i];
                        if ((matchArr.includes("brother") || matchArr.includes("brothers")) && (matchArr.includes("sister") || matchArr.includes("sisters"))){
                            textoutput = textoutput + " brothers and sisters!";
                        } else if (matchArr.includes("brothers") || matchArr.includes("brother")){
                            textoutput = textoutput + " brothers    !";
                        } else if (matchArr.includes("sisters") || matchArr.includes("sister")){
                            textoutput = textoutput + " sisters!";
                        }
                        textoutput = "I see, you have " + textoutput;
                        output.innerHTML = textoutput
                    }
                }
            }
        }
        matchArr = [];
        replyArr = [];
    }
}

input.addEventListener("keypress", function(){
    var key = event.key;
    var inputText = event.target.value;
    inputText = inputText.toLowerCase();
    parrot(key,inputText);
})

chooseAQuestion();