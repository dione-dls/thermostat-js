
$(document).ready(function() {
  thermostat = new Thermostat();
  var temperature = thermostat.temp;
})

$('.up').on('click', function(){
  thermostat.up();
  var temperature = thermostat.temp;
  $(".temp").text(temperature);
  });

  $(".temp").text(temperature);
});
