const R = require('ramda')
const crypto = require('crypto')

const defaultMethod = 'sha256'
const defaultSeparator = '+'

/**
 * Callback that is used to create a hmac-handler for specific separators and algorithms.
 *
 * @param {string} separator Separating character for hmac calculation. Defaults to '+'.
 * @param {string} method Used algorithm for the calculation. Defaults to 'sha256'.
 */
module.exports = (separator, method) => {
  separator = separator ? separator : defaultSeparator
  method = method ? method : defaultMethod
  
  return {
    /**
     * Calculates HMAC using predefined separator and method.
     *
     * @param {string[]} listOfProperties List of elements to concantenate together with the separator
     * @param {string[]} key Key to create hmac with.
     * @returns {string} HMAC value for combined list of strings with the given separator.
     */
    calculate: (listOfProperties, key) => {
      const query = R.apply(
        (left, right) => `${left}${separator}${right}`,
        listOfProperties
      )
      .toUpperCase()
          
      return crypto.createHmac(method, key)
        .update(query)
        .digest('hex')
    },
    
    /**
     * Validates if the calculated signature matches the given.
     *
     * @param {string[]} listOfProperties List of elements to concantenate together with the separator
     * @param {string[]} key Key to create hmac with.
     * @param {string} signature Ready calculated signature
     * @returns {boolean} true when calculated matches given signature, false otherwise.
     */
    isValid: (listOfProperties, key, signature) => calculate(listOfProperties, key) === signature
  }
}