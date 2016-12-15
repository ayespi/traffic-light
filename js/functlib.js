function turnOffAllLights(bulbArray)
{
        i = bulbArray.length;

    while(i--) 
    {
        bulbArray[i].style.backgroundColor = "w";
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