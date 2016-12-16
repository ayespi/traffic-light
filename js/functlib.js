function turnOffAllLights(currentColor)
{
    switch(currentColor) 
    {
        case "red":
            var yellow  = document.getElementById("yellow-light");
            var green   = document.getElementById("green-light");
            yellow.className    = "none";
            green.className     = "none";
            break;
        case "yellow":
            var red     = document.getElementById("red-light");
            var green   = document.getElementById("green-light");
            red.className       = "none";
            green.className     = "none";
            break;
        default:
            var yellow  = document.getElementById("yellow-light");
            var red     = document.getElementById("red-light");
            yellow.className    = "none";
            red.className       = "none";
    }
}


function activateGreen()
{
    console.log('Green Light Activated!!!');
        //Turn on Green
        var greenLight = document.getElementById("green-light");
        console.log(greenLight);
        greenLight.className = "green";  
        //Wait
        //Turn off Green Light  
}
// function activateYellow()
// {
//     console.log('Yellow Light Activated!!!');

//         //Turn on Yellow
//         var yellowLight = document.getElementById("yellow-light");
//         setTimeout(function(){
//             //Turn on Yellow
//              yellowLight.className = "yellow";
//         }, 100);
//         //Wait time
//         setTimeout(function(){
//             //Turn off Green
//             greenLight.className = "";
//         }, 2000);       
// }
// function activateRed()
// {
//     console.log('Red Light Activated!!!');

//         //Turn on Red
//         var redLight = document.getElementById("red-light");
//         setTimeout(function(){
//             //Turn on Red
//              redLight.className = "red";
//         }, 100);
//         //Wait time
//         setTimeout(function(){
//             //Turn off Red
//         redLight.className = "";
//         }, 5000);       
// }