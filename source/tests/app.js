const assert = require('assert');
const hmac = require('../app')

describe('Calculate hmac', _ => {
  describe('using library defaults', _ => {
    it('for ..."', _ => {
      const hmacValidator = hmac()
      console.log(hmacValidator.calculate([5057619800, "420e577f-7458-4d9b-a4db-ed46a8be3602"], "slbaX7reBYScPCuuwQX4fZx7txeyU5MMqywO6o3HNVtnhoheFFiuog2iegi9l5Vc3T19I5QfaJTH8BvNRfIGMLy02h9nleQp8SyQ"))
      
    })
  })
});