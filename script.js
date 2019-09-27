console.log("Working JS")
//Declare variables
var menured;
var paragraph = document.querySelector(".loadfont")
var body = document.body;
var input;
var counter = 0;
var path;
var red = 0;
var green = 0;
var blue = 0;

//Makes the screen white
var whitescreen = function(){
    menured.remove();
    body.style.background = `rgb(${red},${green},${blue})`;
}

//Changing fonts. Variable x and random is assigned to make sure no repeats.
var x = 0;
var random = 0;
var changefont = function(y){
    random = Math.floor((Math.random()*10));
    while(x===random){
        random = Math.floor((Math.random()*10));
    }
    x = random;
    y.style.fontFamily = fontList[random];
    counter++;
}

//Clear function
var clearFunction = function(clear) {
    clearInterval(clear);
}

//Create the body
var createBoard = function(){
    var createRed = document.createElement("div");
    createRed.id = "menured"
    body.appendChild(createRed);
    menured = document.getElementById("menured")
    menured.addEventListener("click", clickonred);
}

var floattext = function(speedms,displacementpx,id){
    var text = document.getElementById(id);
    var position = 0;
    var move = setInterval(frame,speedms);
    function frame(){
        if (position === displacementpx){
            clearInterval(move);
        } else {
            position++;
            text.style.bottom = position + "px"
        }
    }
}

//Create textbox
var createInput = function() {
    setTimeout(function() {
        input = document.createElement("input");
        input.addEventListener("keypress", function(event){
            key = event.key;
            return inputFunction(key)
        });
        fadeIn(input,20);
        input.setAttribute('type', 'text');
        input.id = "inputtext";
        var tir = document.getElementById("thisisred");
        tir.appendChild(input);
    }, 1000);
}

//Input Function
var inputFunction = function(key){
    if(key === 'Enter'){
        console.log("input registers enter!")
    }
}

//When you click on red menu
var clickonred =function(x){
    red = 255;
    var id = this.id;
    this.id = "menuredclick"
    setTimeout(whitescreen, 400);
    setTimeout(function(){
        var thisisred = document.createElement("p");
        thisisred.id = "thisisred";
        thisisred.innerHTML = "This Is Red.";
        body.appendChild(thisisred);
        counter = 0;
        changeFontSet = setInterval(changefont, 1500, thisisred);
        var defineClearFunction = function(){
            clearFunction(changeFontSet);
        }
        thisisred.addEventListener("click",defineClearFunction, {once: true});
        thisisred.addEventListener("click",function(){return floattext(5,200,"thisisred")}, {once: true});
        thisisred.addEventListener("click",createInput, {once: true});
    },2000);
}








//Terence code for fade in
function fadeIn(element, speed) {
    element.style.opacity = 0;
    let opacity = 0.1;
    const timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        element.style.filter = `aplha(opacity=${opacity * 100})`;
        opacity += opacity * 0.1;
    }, speed);
}







//be sure to make a function to loop through the fonts in the array
var loadfont = document.querySelector(".loadfont");
var loadfontset = setInterval(changefont,1,loadfont);
setTimeout(createBoard, 3000);
setTimeout(function(){
    clearInterval(loadfontset);
},2999)

// var banana = function(someValue){
// }

// new.addEventListener("click",function(kkkk){
//     banana(kkkk);
// })