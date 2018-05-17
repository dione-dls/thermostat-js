var MINTEMP = 10;
var DEFAULTTEMP = 20;
var MAXTEMP = 25;
var INCREASE = 1;
var DECREASE = 1;
var MAXTEMPOFF = 32;

function Thermostat() {
  this.temp = DEFAULTTEMP;
  this.powerSaving = true;
}

Thermostat.prototype.up = function (){
  if (this.isMaxTemp()) {
    throw new Error ('Maximum temperature reached');
  };
  this.temp += INCREASE;
}

Thermostat.prototype.down = function (){
  if (this.temp <= MINTEMP) {
    throw new Error ('Minimum temperature reached');
  }
  this.temp -= DECREASE;
}

Thermostat.prototype.psOn = function (){
  this.powerSaving = true
}

Thermostat.prototype.psOff = function (){
  this.powerSaving = false
}

Thermostat.prototype.isMaxTemp = function () {
  return (this.temp === MAXTEMP && this.powerSaving === true) ||
  (this.temp === MAXTEMPOFF );

}

Thermostat.prototype.reset = function (){
  this.temp = DEFAULTTEMP;
}

Thermostat.prototype.energyUsage = function () {
  if (this.temp < 18) {
    return 'Low';
  } else if (this.temp < 25) {
    return 'Medium';
  } else {
   return 'High';
  }
}
