
$(document).ready(function() {
  thermostat = new Thermostat();
  $('#temp').html(thermostat.temp);
  $('#usage').html(thermostat.energyUsage());

$('.up').click(function(){
  thermostat.up();
  $('#temp').html(thermostat.temp);
  $('#usage').html(thermostat.energyUsage());
  });

$('.down').click(function(){
  thermostat.down();
  $('#temp').html(thermostat.temp);
  $('#usage').html(thermostat.energyUsage());
  });

$('.reset').click(function(){
  thermostat.reset();
  $('#temp').html(thermostat.temp);
  $('#usage').html(thermostat.energyUsage());
  });

$('.PowerSavingOff').click(function(){
  thermostat.psOff();
  $('#temp').html(thermostat.temp);
  });

$('.PowerSavingOn').click(function(){
  thermostat.psOn();
  $('#temp').html(thermostat.temp);
  });
});
