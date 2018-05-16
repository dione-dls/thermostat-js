const MIN_TEMP = 10;

function Thermostat(temp = new Temperature()) {
  this.temp = temp.default;
  this._minTemp = MIN_TEMP;
  this._maxTemp = 25;
  this.powerSaving = true;
}

Thermostat.prototype.up = function (){
  this.temp ++
}

Thermostat.prototype.down = function (){
  this.temp --
}

Thermostat.prototype.psOn = function (){
  this.powerSaving = true
}

Thermostat.prototype.psOff = function (){
  this.powerSaving = false
}
