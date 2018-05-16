describe('Thermostat', function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  })


  describe('#up', function(){
    it('can increase the temperature', function(){
      thermostat.up()
      expect(thermostat.temp).toBeGreaterThan(DEFAULT_TEMP)
    })
  })
})
