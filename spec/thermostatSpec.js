var MINTEMP = 10;
var DEFAULTTEMP = 20;
// var  MAXTEMP = 25;
var INCREASE = 1;
var DECREASE = 1;

describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts with a default temperature of 20 degrees', function(){
    expect(thermostat.temp).toEqual(DEFAULTTEMP);
  });

  describe('up', function(){
    it('can increase the temperature by 1', function(){
      thermostat.up();
      expect(thermostat.temp).toEqual(DEFAULTTEMP + INCREASE);
    });
  });

  describe('down', function(){
    it('can decrease the temperature by 1', function(){
      thermostat.down();
      expect(thermostat.temp).toEqual(DEFAULTTEMP - DECREASE);
    });

    it('throws an error when minimum temperature is reached', function() {
      for(i = 1; i <= 10; i++){thermostat.down();};
      expect(function() {
        thermostat.down();
      }).toThrowError('Minimum temperature reached');
    });
  });

  describe('when power saving mode is on', function(){
    it('throws an error when maximum temperature of 25 degrees is reached', function(){
      for(i = 1; i <= 5; i++){thermostat.up();};
      expect(function() {
        thermostat.up();
      }).toThrowError('Maximum temperature reached');
    })
  })

  describe('when power saving mode is off', function(){
    it('throws an error when maximum temperature of 32 degrees is reached', function(){
      thermostat.psOff();
      for(i = 1; i <= 12; i++){thermostat.up();};
      expect(function() {
        thermostat.up();
      }).toThrowError('Maximum temperature reached');
    });
  });

  describe('psOn', function(){
    it('sets power saving to true', function(){
      thermostat.psOn();
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe('psOff', function(){
    it('sets power saving to false', function(){
      thermostat.psOff();
      expect(thermostat.powerSaving).toEqual(false);
    });
  });

  describe('reset', function() {
    it('sets the temperature back to default value', function() {
      thermostat.reset();
      expect(thermostat.temp).toEqual(DEFAULTTEMP);
    })
  })

  describe('energyUsage', function() {
    it('is medium usage when temperature is between 18 and 25 degrees', function() {
      expect(thermostat.energyUsage()).toEqual('Medium');
    });

    it('is low usage when temperature is below 18 degrees', function() {
      for(i = 1; i <= 7; i++){thermostat.down();};
      expect(thermostat.energyUsage()).toEqual('Low');
    });

    it('is high usage when temperature is greater than 25 degrees', function() {
      thermostat.psOff();
      for(i = 1; i <= 6; i++){thermostat.up();};
      expect(thermostat.energyUsage()).toEqual('High');
    });
  });
});
