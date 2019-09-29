console.log("Working JS")
//Declare variables
var menured;
var menublue;
var menugreen;
var paragraph = document.querySelector(".loadfont")
var body = document.body;
var main = document.querySelector("#main");
var input;
var convocounter = 0;
var path;
var red = 0;
var green = 0;
var blue = 0;
var currentAttribute;
var acceptInput = false;

//Makes the screen white
var whitescreen = function(){
    menured.remove();
    menublue.remove();
    menugreen.remove();
    if(path === "menu"){
        body.style.background = `rgb(${red},${green},${blue})`;
    } else if (path === "red"){
        body.style.background = `rgb(255,0,0)`;
    } else if (path === "green"){
        body.style.background = `rgb(0,255,0)`;
    } else if (path === "blue"){
        body.style.background = `rgb(0,0,255)`;
    }
}

//Changing fonts. Variable x and random is assigned to make sure no repeats.
var x = 0;
var random = 0;
var changefont = function(y){
    var num = fontList.length
    random = Math.floor((Math.random()*num));
    while(x===random){
        random = Math.floor((Math.random()*num));
    }
    x = random;
    y.style.fontFamily = fontList[random];
}

var changetext = function(y){
    if(path==="red"){
        var num = redWordList.length;
        random = Math.floor((Math.random()*num));
        while(x===random){
            random = Math.floor((Math.random()*num));
        }
        x = random;
        y.innerHTML = redWordList[random];
    } else if(path==="blue"){
        var num = blueWordList.length;
        random = Math.floor((Math.random()*num));
        while(x===random){
            random = Math.floor((Math.random()*num));
        }
        x = random;
        y.innerHTML = blueWordList[random];
    } else if(path==="green"){
        var num = greenWordList.length;
        random = Math.floor((Math.random()*num));
        while(x===random){
            random = Math.floor((Math.random()*num));
        }
        x = random;
        y.innerHTML = greenWordList[random];
    }
}

//Clear function
var clearFunction = function(clear) {
    clearInterval(clear);
}

//Function for greeting
var greetingFunc = function(){
    var replyText = document.getElementById("text");
    var num = question.greeting.length;
    var random = Math.floor((Math.random()*num));
    console.log("Random number: "+random)
    var greetText = question["greeting"][random]["Reply"];
    currentAttribute = question["greeting"][random]["value"];
    replyText.innerHTML = greetText;
    //Removes the question after being asked.
    // var index = question["greeting"][random];
    // question["greeting"].splice(index,1);
    // console.log(question["greeting"]);
    acceptInput = true;
}

var questionFunc = function(){
    var replyText = document.getElementById("text");
    var numqeustion = questionArr.length;
    var rng1 = Math.floor((Math.random()*numqeustion));
    var randomquestion = questionArr[rng1];
    var num = question[randomquestion].length;
    // var num = question.greeting.length;
    var random = Math.floor((Math.random()*num));
    var questionText = question[randomquestion][random]["Reply"];
    currentAttribute = question[randomquestion][random]["value"];
    replyText.innerHTML = questionText;

    // var index = question[randomquestion][random];
    // question[randomquestion].splice(index,1);
    // console.log(question[randomquestion]);
    acceptInput = true;
}


//Create the body
var createBoard = function(){
    main = document.querySelector("#main");
    body.removeChild(main);
    if(path === "menu"){
        body.style.background = `rgb(${red},${green},${blue})`;
    }
    if(red != 255){
        var createRed = document.createElement("div");
        createRed.id = "menured"
        body.appendChild(createRed);
        menured = document.getElementById("menured")
        menured.addEventListener("click", clickonred);
    }
    if(green != 255){
        var createGreen = document.createElement("div");
        createGreen.id = "menugreen"
        body.appendChild(createGreen);
        menugreen = document.getElementById("menugreen")
        menugreen.addEventListener("click", clickongreen);
    }
    if(blue != 255){
        var createBlue = document.createElement("div");
        createBlue.id = "menublue"
        body.appendChild(createBlue);
        menublue = document.getElementById("menublue")
        menublue.addEventListener("click", clickonblue);
    }
}

var floattext = function(speedms,displacementpx,id,currentColor){
    var main = document.querySelector("#main");
    var text = document.getElementById(id);
    if(currentColor === "red"){
        fire.muted = false;
        fire.play();
        text.innerHTML = "This is Red."
        setTimeout(function(){
            text.innerHTML = "Hey."
        },2500);
        setTimeout(greetingFunc,5000);
    } else if(currentColor === "blue"){
        water.muted = false;
        water.play();
        text.innerHTML = "This is Blue."
        setTimeout(function(){
            text.innerHTML = "Hey."
        },2500);
        setTimeout(greetingFunc,5000);
    } else if(currentColor === "green"){
        grass.muted = false;
        grass.play();
        text.innerHTML = "This is Green."
        setTimeout(function(){
            text.innerHTML = "Hey."
        },2500);
        setTimeout(greetingFunc,5000);
    }
    var position = 0;
    var move = setInterval(frame,speedms);
    function frame(){
        if (position === displacementpx){
            clearInterval(move);
        } else {
            position++;
            main.style.top = `${300-position}px`
        }
    }
}

//Create textbox
var createInput = function() {
    setTimeout(function() {
        input = document.createElement("input");
        //Pass in argument for key pressed and value of text
        input.addEventListener("keypress", function(event){
            key = event.key;
            var replytext = event.target.value;
            reply = replytext.toLowerCase();
            return inputFunction(key, reply);
        });
        fadeIn(input,20);
        input.setAttribute('type', 'text');
        input.id = "inputtext";
        var main = document.querySelector("#main");
        main.appendChild(input);
    }, 1000);
}

var checkAmbi = function(){
    var output = document.getElementById("text");
    var num = ambiguousArr.length;
    var x = Math.floor(Math.random()*num);
    output.innerHTML = ambiguousArr[x];
}

//Input Function, for when the user press enter
var inputFunction = function(key, reply){
    if(key === 'Enter' && acceptInput === true){
        event.target.value = "";
        acceptInput === false;
        console.log("input registers enter!")
        if(path === 'red'){
            var output = document.getElementById("text");
            if(convocounter <5 ){
                convocounter++;
                setTimeout(questionFunc, 2000);
                //Check which TYPE of question asked
                switch(currentAttribute){
                    //Input set timeout for rolling of question?
                    case 1:
                        // var num = ambiguousArr.length;
                        // var x = Math.floor(Math.random()*num);
                        // output.innerHTML = ambiguousArr[x];
                        checkAmbi();
                        for(var i = 0; i < yesArr.length; i++){
                            if(reply === yesArr[i]){
                                var num = reliefArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = reliefArr[x];
                                console.log("case1")
                                break;
                            }
                        }
                        for(var i = 0; i < noArr.length; i++){
                            if (reply === noArr[i]){
                                var num = concernArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = concernArr[x];
                                console.log("case1")
                                break;
                            }
                        }

                        // console.log("Hello")
                        break;


                    case 2:
                        // var num = ambiguousArr.length;
                        // var x = Math.floor(Math.random()*num);
                        // output.innerHTML = ambiguousArr[x];
                        checkAmbi();
                        for(var i = 0; i < yesArr.length; i++){
                            if(reply === yesArr[i]){
                                var num = reliefArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = reliefArr[x];
                                console.log("case2")
                                break;
                            }
                        }
                        for(var i = 0; i < noArr.length; i++){
                            if (reply === noArr[i]){
                                var num = concernArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = concernArr[x];
                                console.log("case2")
                                break;
                            }
                        }
                        break;


                    //If answer doesn't matches
                    // default:
                    //     console.log("case3")
                    //     var num = ambiguousArr.length;
                    //     var x = Math.floor(Math.random()*num);
                    //     output.innerHTML = ambiguousArr[x];

                }
            } else {
                convocounter = 0;
                path = "menu";
                output.innerHTML = "I'm sure it will all work out for you."
                setTimeout(function(){
                    output.innerHTML = "Look at the time! I'm sorry for holding you back!"
                    fire.muted = true;
                }, 2500)
                setTimeout(createBoard, 5000);
            }
        } else if (path === "green"){
            console.log("Green");
            var output = document.getElementById("text");
            if(convocounter <5 ){
                convocounter++;
                setTimeout(questionFunc, 2000);

                //Check which TYPE of question asked
                switch(currentAttribute){
                    //Input set timeout for rolling of question?
                    case 1:
                        console.log("case3")
                        var num = ambiguousArr.length;
                        var x = Math.floor(Math.random()*num);
                        output.innerHTML = ambiguousArr[x];
                        for(var i = 0; i < yesArr.length; i++){
                            if(reply === yesArr[i]){
                                var num = reliefArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = reliefArr[x];
                                console.log("case1")
                                break;
                            }
                        }
                        for(var i = 0; i < noArr.length; i++){
                            if (reply === noArr[i]){
                                var num = concernArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = concernArr[x];
                                console.log("case1")
                                break;
                            }
                        }

                        // console.log("Hello")
                        break;


                    case 2:
                        console.log("case3")
                        var num = ambiguousArr.length;
                        var x = Math.floor(Math.random()*num);
                        output.innerHTML = ambiguousArr[x];
                        for(var i = 0; i < yesArr.length; i++){
                            if(reply === yesArr[i]){
                                var num = reliefArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = reliefArr[x];
                                console.log("case2")
                                break;
                            }
                        }
                        for(var i = 0; i < noArr.length; i++){
                            if (reply === noArr[i]){
                                var num = concernArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = concernArr[x];
                                console.log("case2")
                                break;
                            }
                        }

                        break;


                    //If answer doesn't matches
                    // default:
                    //     console.log("case3")
                    //     var num = ambiguousArr.length;
                    //     var x = Math.floor(Math.random()*num);
                    //     output.innerHTML = ambiguousArr[x];

                }
            } else {
                convocounter = 0;
                path = "menu";
                output.innerHTML = "I'm sure it will all work out for you."
                setTimeout(function(){
                    output.innerHTML = "Look at the time! I'm sorry for holding you back!"
                    grass.muted = true;
                }, 2500)
                setTimeout(createBoard, 5000);
            }
        } else if (path === "blue"){
            console.log("Blue");
            var output = document.getElementById("text");
            if(convocounter <5 ){
                convocounter++;
                setTimeout(questionFunc, 2000);

                //Check which TYPE of question asked
                switch(currentAttribute){
                    //Input set timeout for rolling of question?
                    case 1:
                        console.log("case3")
                        var num = ambiguousArr.length;
                        var x = Math.floor(Math.random()*num);
                        output.innerHTML = ambiguousArr[x];
                        for(var i = 0; i < yesArr.length; i++){
                            if(reply === yesArr[i]){
                                var num = reliefArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = reliefArr[x];
                                console.log("case1")
                                break;
                            }
                        }
                        for(var i = 0; i < noArr.length; i++){
                            if (reply === noArr[i]){
                                var num = concernArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = concernArr[x];
                                console.log("case1")
                                break;
                            }
                        }

                        // console.log("Hello")
                        break;


                    case 2:
                        console.log("case3")
                        var num = ambiguousArr.length;
                        var x = Math.floor(Math.random()*num);
                        output.innerHTML = ambiguousArr[x];
                        for(var i = 0; i < yesArr.length; i++){
                            if(reply === yesArr[i]){
                                var num = reliefArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = reliefArr[x];
                                console.log("case2")
                                break;
                            }
                        }
                        for(var i = 0; i < noArr.length; i++){
                            if (reply === noArr[i]){
                                var num = concernArr.length;
                                var x = Math.floor(Math.random()*num);
                                output.innerHTML = concernArr[x];
                                console.log("case2")
                                break;
                            }
                        }

                        break;


                    //If answer doesn't matches
                    // default:
                    //     console.log("case3")
                    //     var num = ambiguousArr.length;
                    //     var x = Math.floor(Math.random()*num);
                    //     output.innerHTML = ambiguousArr[x];

                }
            } else {
                convocounter = 0;
                path = "menu";
                output.innerHTML = "I'm sure it will all work out for you."
                setTimeout(function(){
                    output.innerHTML = "Look at the time! I'm sorry for holding you back!"
                    water.muted = true;
                }, 2500)
                setTimeout(createBoard, 5000);
            }
        }
    }
}

//When you click on red menu
var clickonred =function(x){
    red = 255;
    path = "red";
    var id = this.id;
    this.id = "menuredclick"
    setTimeout(whitescreen, 400);
    setTimeout(function(){
        var mainDiv = document.createElement("main");
        mainDiv.id = "main"
        main = document.querySelector("#main");
        var thisisred = document.createElement("p");
        thisisred.id = "text";
        thisisred.innerHTML = "This Is Red.";
        mainDiv.appendChild(thisisred);
        body.appendChild(mainDiv);
        counter = 0;
        changeFontSet = setInterval(changefont, 1500, thisisred);
        changeTextSet = setInterval(changetext, 1500, thisisred);
        var defineClearFunction = function(){
            clearFunction(changeFontSet);
            clearFunction(changeTextSet);
        }
        thisisred.addEventListener("click",defineClearFunction, {once: true});
        thisisred.addEventListener("click",function(){return floattext(5,150,"text","red")}, {once: true});
        thisisred.addEventListener("click",createInput, {once: true});
    },2000);
}

var clickonblue = function(){
    blue = 255;
    path = "blue";
    var id = this.id;
    this.id = "menublueclick"
    setTimeout(whitescreen, 400);
    setTimeout(function(){
        var mainDiv = document.createElement("main");
        mainDiv.id = "main"
        main = document.querySelector("#main");
        var thisisblue = document.createElement("p");
        thisisblue.id = "text";
        thisisblue.innerHTML = "This Is Blue.";
        mainDiv.appendChild(thisisblue);
        body.appendChild(mainDiv);
        counter = 0;
        changeFontSet = setInterval(changefont, 1500, thisisblue);
        changeTextSet = setInterval(changetext, 1500, thisisblue);
        var defineClearFunction = function(){
            clearFunction(changeFontSet);
            clearFunction(changeTextSet);
        }
        thisisblue.addEventListener("click",defineClearFunction, {once: true});
        thisisblue.addEventListener("click",function(){return floattext(5,150,"text","blue")}, {once: true});
        thisisblue.addEventListener("click",createInput, {once: true});
    },2000);
}

var clickongreen = function(){
    green = 255;
    path = "green";
    var id = this.id;
    this.id = "menugreenclick"
    setTimeout(whitescreen, 400);
    setTimeout(function(){
        var mainDiv = document.createElement("main");
        mainDiv.id = "main"
        main = document.querySelector("#main");
        var thisisgreen = document.createElement("p");
        thisisgreen.id = "text";
        thisisgreen.innerHTML = "This Is Green.";
        mainDiv.appendChild(thisisgreen);
        body.appendChild(mainDiv);
        counter = 0;
        changeFontSet = setInterval(changefont, 1500, thisisgreen);
        changeTextSet = setInterval(changetext, 1500, thisisgreen);
        var defineClearFunction = function(){
            clearFunction(changeFontSet);
            clearFunction(changeTextSet);
        }
        thisisgreen.addEventListener("click",defineClearFunction, {once: true});
        thisisgreen.addEventListener("click",function(){return floattext(5,150,"text","green")}, {once: true});
        thisisgreen.addEventListener("click",createInput, {once: true});
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
},2999);


function openNav() {
  document.getElementById("mySidebar").style.height = "100px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.height = "0";
}

var closebtn = document.querySelector(".closebtn");
var endgametext = document.getElementById("endgametext")
var open = false;
function click(){
    console.log("clicked");
    if(open === false){
        // endgametext.style.color = "#818181"
        closebtn.innerHTML = "&darr;";
        console.log("Opening")
        openNav();
        open = true;
    } else if (open === true){
        // endgametext.style.color = "#111"
        closebtn.innerHTML = "&uarr;";
        closeNav();
        open = false;
    }
}

//Click on End game to end the game
endgametext.addEventListener("click",function(){
    var child = body.lastElementChild;
    while (child){
        body.removeChild(child);
        child = body.lastElementChild
    }
    setTimeout(function(){
        var mainDiv = document.createElement("main");
        mainDiv.id = "main"
        main = document.querySelector("#main");
        var para = document.createElement("p");
        para.id = "text";
        para.innerHTML = "This is End.";
        mainDiv.appendChild(para);
        body.appendChild(mainDiv);
        setTimeout(function(){
            checkEnd();
        },2500)
    },2000)
})

closebtn.addEventListener("click", click);


//Use this to check the current ending of the game
var checkEnd = function(){
    body.style.background = `rgb(${red},${green},${blue})`;
    var text = document.querySelector("#text");
    var main = document.querySelector("#main");
    music();

    if(red === 0 && blue === 0 && green === 0){
        text.innerHTML = "Black is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = blackEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = blackEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    } else if (red === 255 && blue === 0 && green === 0){
        text.innerHTML = "Red is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = redEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = redEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    } else if (red === 0 && blue === 255 && green === 0){
        text.innerHTML = "Blue is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = blueEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = blueEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    } else if (red === 0 && blue === 0 && green === 255){
        text.innerHTML = "Green is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = greenEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = greenEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    } else if (red === 255 && blue === 255 && green === 0){
        text.innerHTML = "Fuchsia is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = fuchsiaEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = fuchsiaEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    }  else if (red === 255 && blue === 0 && green === 255){
        text.innerHTML = "Yellow is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = yellowEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = yellowEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    } else if (red === 0 && blue === 255 && green === 255){
        text.innerHTML = "Cyan is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = cyanEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = cyanEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    } else if (red === 255 && blue === 255 && green === 255){
        text.innerHTML = "White is..."
        var newtext = document.createElement("p");
        newtext.id = "text";
        var num = whiteEnd.length;
        random = Math.floor((Math.random()*num));
        newtext.innerHTML = whiteEnd[random];
        fadeIn(newtext,20);
        main.appendChild(newtext)
    }

    //The ending
    newtext.addEventListener("click",function(){

        setTimeout(function(){
            main.removeChild(text);
            newtext.innerHTML = "What are you?";
        },1000);
        var music = document.getElementById("music");
        setTimeout(function(){
            let opacity = 1;
            let volume = 0.3
            const vtimer = setInterval(function(){
                if (volume <= 0.0) {
                    clearInterval(vtimer)
                }
                music.volume = volume;
                volume -= volume * 0.01;
            },50)
            const timer = setInterval(function() {
                if (opacity <= 0.0) {
                    clearInterval(timer);
                }
                newtext.style.opacity = opacity;
                newtext.style.filter = `aplha(opacity=${opacity * 100})`;
                opacity -= opacity * 0.03;
            }, 50);
        },3000);
    },{once:true})
}



var music = function(){
    var randommusicnum = Math.floor(Math.random()*musicArr.length)
    var randommusic = musicArr[randommusicnum];
    var music1 = document.createElement('audio');
    body.appendChild(music1);
    music1.id = "music";
    music1.src = randommusic;
    music1.volume = 0.3;
    music1.play();
    music1.loop = true;
}