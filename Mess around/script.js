/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.height = "250px";
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


endgametext.addEventListener("click",function(){
    console.log("End game");
})
closebtn.addEventListener("click", click);