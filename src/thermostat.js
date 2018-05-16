const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;
// const MAX_TEMP = 25;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
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
