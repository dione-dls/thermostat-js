const DEFAULT_TEMP = 20;

function Thermostat() {
  this.temp = DEFAULT_TEMP;
}

Thermostat.prototype.up = function (){
  this.temp ++
}
