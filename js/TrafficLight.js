var properties = {
    "backgroundColor" : "black",
    "borderRadius" : "20px",
    "padding" : "15px",
    "lightColors" : [
        {
            "color":"red",
            "interval":3500
        },
        {
            "color":"yellow",
            "interval":1500           
        },
        {
            "color":"green",
            "interval":5000
        }
    ]
};
// properties.lightColors
function TrafficLight(color)
{
    this.backgroundColor                = typeof color !== 'undefined' ? color : 'black';
    this.borderRadius                   = properties.borderRadius;
    this.padding                        = properties.padding;
    this.red                            = new Light(properties.lightColors[0].color, properties.lightColors[0].interval);
    this.yellow                         = new Light(properties.lightColors[1].color, properties.lightColors[1].interval);
    this.green                          = new Light(properties.lightColors[2].color, properties.lightColors[2].interval);
    trafficLightStyle                   = document.getElementById("wrapper").style;
    trafficLightStyle.backgroundColor   = this.backgroundColor;
    trafficLightStyle.borderRadius      = this.borderRadius;
    trafficLightStyle.paddingTop        = this.padding;
    trafficLightStyle.paddingBottom     = this.padding;
}
TrafficLight.prototype.start = function(){
    greenLight  = document.getElementById("green-light");
    yellowLight = document.getElementById("yellow-light");
    redLight    = document.getElementById("red-light");
    console.log('Traffic Signal Initialing...');
    var initialColor = properties.lightColors[2].color;
    greenLight.classList.add(initialColor);
    console.log('Traffic Signal Cycle Beginning...');
    cycle = setInterval(function(){
        setTimeout(function(){
            greenLight.classList.remove("green");
            yellowLight.classList.add("yellow");
        },6000);
        setTimeout(function(){
            yellowLight.classList.remove("yellow");
            redLight.classList.add("red");
        },9000);      
        setTimeout(function(){
            redLight.classList.remove("red");
            greenLight.classList.add("green");
        },14000); 
        loops = loops+1;
        console.log('Cycle '+loops+' Started...');
    }, 14000);
};
TrafficLight.prototype.stop = function(){
    clearInterval(cycle);  
};