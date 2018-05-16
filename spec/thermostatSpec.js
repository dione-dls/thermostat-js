describe('Thermostat', function(){

  var thermostat
  var temp

  beforeEach(function(){
    thermostat = new Thermostat();
    temp = new Temperature
  })


  describe('#up', function(){
    it('can increase the temperature', function(){
      thermostat.up()
      expect(thermostat.temp).toBeGreaterThan(temp.default)
    })
  })

  describe('#down', function(){
    it('can decrease the temperature', function(){
      thermostat.down()
      expect(thermostat.temp).toBeLessThan(temp.default)
    })
  })

  describe('when power saving mode is on', function(){
    it('has a maximum temperature of 25', function(){
      expect(thermostat._maxTemp).toEqual(25)
    })
  })

  describe('#psOn', function(){
    it('sets power saving to true', function(){
      thermostat.psOn()
      expect(thermostat.powerSaving).toEqual(true)
    })
  })

  describe('#psOff', function(){
    it('sets power saving to false', function(){
      thermostat.psOff()
      expect(thermostat.powerSaving).toEqual(false)
    })
  })
})
