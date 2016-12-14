function activateGreen()
{
    //Turn on Green
    var greenLight = document.getElementById("green-light");
    greenLight.className = "green";
    //Wait time
    setTimeout(function(){
        //Turn off Green
        greenLight.className = "";
    }, 5000);

}
function activateYellow()
{
    //Turn on Yellow
    //Wait time
    //Turn off Yellow
}
function activateRed()
{
    //Turn on Red
    //Wait time
    //Turn off Red
}