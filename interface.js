
$(document).ready(function() {
  $.get("http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=5e834a73cac3008730469e7587b95e90&units=metric", function(weather){
      $("#current-temperature").text(weather.main.temp);
      console.log(weather);
  });
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

$('#current-city').change(function(){
    var city = $('#current-city').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=5e834a73cac3008730469e7587b95e90';
    var units = '&units=metric';
    $.get(url + token + units, function(weather) {
      $('#current-temperature').text(weather.main.temp);
    })
});
});
