function Light(color, time)
{
    this.color  = color;
    this.time   = time;
}

Light.prototype.on  = function(){
    element     = this.color+'-light';
    lightColor  = document.getElementById(element);
    lightColor.classList.add(this.color);
    console.log('The '+this.color+' light is ON...');
};

Light.prototype.off  = function(){
    element     = this.color+'-light';
    lightColor  = document.getElementById(element);
    lightColor.classList.remove(this.color);
    console.log('The '+this.color+' light is OFF...');
};


// Light.prototype.on  = function(){
//     clearInterval(activateLight);
//     currentColor    = this.color;
//     lightInterval   = this.time;
//     var bulbArray   = document.getElementsByClassName("bulb");
//     console.log(bulbArray);
//     console.log('==================');
//     turnOffAllLights(currentColor);
//     console.log('The '+currentColor+' light has been activated...');
//     activateLight = setInterval(function(){
//         var element = currentColor+"-light";
//         // console.log('The name of the element is: '+element);
//         lightColor  = document.getElementById(element);
//         //  console.log('The light color is: '+lightColor);
//         lightColor.className = currentColor;  
//         // console.log(lightColor);
//     },lightInterval);
// };

// Light.prototype.on  = function(){
//     clearInterval(activateLight);
//     currentColor    = this.color;
//     lightInterval   = this.time;
//     var bulbArray   = document.getElementsByClassName("bulb");
//     console.log(bulbArray);
//     console.log('==================');
//     turnOffAllLights(currentColor);
//     console.log('The '+currentColor+' light has been activated...');
//     activateLight = setInterval(function(){
//         var element = currentColor+"-light";
//         // console.log('The name of the element is: '+element);
//         lightColor  = document.getElementById(element);
//         //  console.log('The light color is: '+lightColor);
//         lightColor.className = currentColor;  
//         // console.log(lightColor);
//     },lightInterval);
// };