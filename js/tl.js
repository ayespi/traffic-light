var redCounter = 0;
var yellowCounter = 0;
var greenCounter = 0;
var interval;
var activeLight = 1;
var active = true;

var redLight = new light("red", 10);
var yellowLight = new light("yellow", 3);
var greenLight = new light("green", 8);

function light(color, time) {
  this.color = color;
  this.time = time;
  this.on = false;
  this.turnOn = function() {
    var elem = document.getElementsByClassName(color);
    if(elem[0].classList.contains("off")) {
      elem[0].classList.remove("off");
      this.on = true;
    }
  }
  this.turnOff = function() {
    var elem = document.getElementsByClassName(color);
    if(!elem[0].classList.contains("off")) {
      elem[0].classList.add("off");
      this.on = false;
    }
  }
}

var timer = function(counter) {
  var elem = document.getElementById("crono");
  if(counter < 10) {
    elem.innerHTML = "0" + counter;
  }
  else {
    elem.innerHTML = counter;
  }
  return --counter;
};

var startTrafficLight = function() {
  switch(activeLight) {
    case 1:
      if(redCounter < 0) {
        redLight.turnOff();
        activeLight = 3;
        greenLight.turnOn();
        redCounter = redLight.time;
        break; 
      }
      redLight.turnOn();
      redCounter = timer(redCounter);
      break;
    case 2:
      if(yellowCounter < 0) {
        yellowLight.turnOff();
        activeLight = 1;
        redLight.turnOn();
        yellowCounter = yellowLight.time;
        break; 
      }
      yellowLight.turnOn();
      yellowCounter = timer(yellowCounter);
      break;
    case 3:
      if(greenCounter < 0) {
        greenLight.turnOff();
        activeLight = 2;
        yellowLight.turnOn();
        greenCounter = greenLight.time;
        break; 
      }
      greenLight.turnOn();
      greenCounter = timer(greenCounter);
      break;
  }
};

var reset = function() {
  document.getElementById("crono").innerHTML = "00";
  redLight.turnOff();
  yellowLight.turnOff();
  greenLight.turnOff();
  activeLight = 1;
  redCounter = redLight.time;
  yellowCounter = yellowLight.time;
  greenCounter = greenLight.time;
};

var stop = function() {
  clearInterval(interval);
  active = true;
  document.getElementById("start").innerHTML = "Start";
  reset();
};

var start = function() {
  if(active) {
    interval = setInterval(startTrafficLight, 1000);
    active = false; document.getElementById("start").innerHTML = "Stop";
  }
  else {
    stop();
  }
};


window.onload = function() {
  redCounter = redLight.time;
  yellowCounter = yellowLight.time;
  greenCounter = greenLight.time;
  
  console.log(redCounter);
  
  var button = document.getElementById("start");
  button.onclick = start;
};