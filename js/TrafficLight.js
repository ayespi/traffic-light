function TrafficLight()
{
    this.red    = new Light("red", 3500);
    this.yellow = new Light("yellow", 1500);
    this.green  = new Light("green", 5000);
    this.start  = function(){
        greenLight = document.getElementById("green-light");
        greenLight.classList.add("green");
        var cycle = setInterval(function(){
            setTimeout(function(){
                greenLight = document.getElementById("green-light");
                greenLight.classList.remove("green");
                yellowLight = document.getElementById("yellow-light");
                yellowLight.classList.add("yellow");
            },6000);
            setTimeout(function(){
                yellowLight = document.getElementById("yellow-light");
                yellowLight.classList.remove("yellow");
                redLight = document.getElementById("red-light");
                redLight.classList.add("red");
            },9000);      
            setTimeout(function(){
                redLight = document.getElementById("red-light");
                redLight.classList.remove("red");
                greenLight = document.getElementById("green-light");
                greenLight.classList.add("green");
            },14000);                
        }, 14000);
    };
}