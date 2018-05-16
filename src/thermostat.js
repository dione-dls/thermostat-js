const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
  this._minTemp = MIN_TEMP;
}

Thermostat.prototype.up = function (){
  this.temp ++
}

Thermostat.prototype.down = function (){
  this.temp --
}
