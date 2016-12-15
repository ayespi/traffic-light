function Light(color, time)
{
    this.color  = color;
    this.time   = time;
}
Light.prototype.on  = function(){
    currentColor    = this.color;
    lightInterval   = this.time;
    var bulbArray   = document.getElementsByClassName("bulb");
    console.log(bulbArray);
    console.log('==================');
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
    console.log('The '+currentColor+' light has been activated...');
    setInterval(function(){
        var element = currentColor+"-light";
        lightColor  = document.getElementById(element);
        lightColor.className = currentColor;  
        console.log(lightColor);
    },lightInterval);
};