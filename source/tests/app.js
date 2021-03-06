const assert = require('assert');
const hmac = require('../app')

describe('Calculate hmac', _ => {
  describe('using library defaults', _ => {
    it('hmac valid with [8583802900, "420e577f-7458-4d9b-a4db-ed46a8be3602"] and secret "slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ"', done => {
      
      const hmacValidator = hmac()
      const properties = [8583802900, '420e577f-7458-4d9b-a4db-ed46a8be3602']
      const secret = 'slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ'
      const shouldBeResult = '80af905e38c158dc943c0e12e44ab2f4c18363d27934446f6765515424529bbc'
      
      
      assert.equal(
        hmacValidator.calculate(properties, secret),
        '80af905e38c158dc943c0e12e44ab2f4c18363d27934446f6765515424529bbc'
      )
      
      done()
    })
    
    it('hmac validation should return true with [8583802900, "420e577f-7458-4d9b-a4db-ed46a8be3602"], secret "slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ" and signature "80af905e38c158dc943c0e12e44ab2f4c18363d27934446f6765515424529bbc"', done => {
      
      const hmacValidator = hmac()
      const properties = [8583802900, '420e577f-7458-4d9b-a4db-ed46a8be3602']
      const secret = 'slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ'
      const shouldBeResult = '80af905e38c158dc943c0e12e44ab2f4c18363d27934446f6765515424529bbc'
      
      assert.equal(
        hmacValidator.isValid(properties, secret, shouldBeResult),
        true
      )
      
      done()
    })
    
    it('hmac validation should return false with [8583802900, "420e577f-7458-4d9b-a4db-ed46a8be3602"], secret "slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ" and signature "asdf"', done => {
      
      const hmacValidator = hmac()
      const properties = [8583802900, '420e577f-7458-4d9b-a4db-ed46a8be3602']
      const secret = 'slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ'
      const shouldNotBeResult = 'asdf'
      
      assert.equal(
        hmacValidator.isValid(properties, secret, shouldNotBeResult),
        false
      )
      
      done()
    })
  })
});