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

  describe('#down', function(){
    it('can decrease the temperature', function(){
      thermostat.down()
      expect(thermostat.temp).toBeLessThan(DEFAULT_TEMP)
    })
  })

  describe('when power saving mode is on', function(){
    it('has a maximum temperature of 25', function(){
      expect(thermostat._maxTemp).toEqual(25)
    })
  })

  describe('#psOn', function(){
    it('sets power saving to true', function(){
      expect(thermostat.powerSaving).toEqual(true)
    })
  })
})
