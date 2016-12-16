var properties = {
    "backgroundColor" : "black",
    "borderRadius" : "20px",
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

function TrafficLight(color)
{
    this.backgroundColor  = typeof color !== 'undefined' ? color : 'black';
    this.red    = new Light("red", 3500);
    this.yellow = new Light("yellow", 1500);
    this.green  = new Light("green", 5000);
    document.getElementById("wrapper").style.backgroundColor = this.backgroundColor;
}
TrafficLight.prototype.start = function(){
    greenLight  = document.getElementById("green-light");
    yellowLight = document.getElementById("yellow-light");
    redLight    = document.getElementById("red-light");
    console.log('Traffic Signal Initialing...');
    greenLight.classList.add("green");
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