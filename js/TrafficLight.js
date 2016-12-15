function TrafficLight()
{
    this.red    = new Light("Red", 3500);
    this.yellow = new Light("Yellow", 1500);
    this.green  = new Light("Green", 5000);
    this.start  = function(){
        setTimeout(function(){this.green.on();},100);
        setTimeout(function(){this.yellow.on();},100);
        setTimeout(function(){this.red.on();},100);
    };
}