//et- slideshow 
var bestImages = ["4.jpg", "ontslohbook.png", "1.png", "2.png", "3.png"]; 
var bestAdvice = document.querySelector(".ontsloh img");

var isPaused = false; //ajillaj bnuu pauselehed urgeljuuleed ajillaj bnu gdgig shalgah
function pauseLah() {
    if(!isPaused){
        clearInterval(intervalId); //ajillaj bga intervalaa id gaar ni barij avaad intervalaa ustgah
    } else {
        intervalId = setInterval(ontslohFunction, 2500)
    }
    isPaused = !isPaused
    console.log(intervalId)
}
var i = 0; //bestImages-n dotorh elementees avahin tuld ehnii element 0 ees ehelne
function ontslohFunction() {
    bestAdvice.src = bestImages[i]; /*zuragnii src uurchlunu*/ 
    i++
    if (i == bestImages.length) i = 0
}
var intervalId = setInterval(ontslohFunction, 2500)
