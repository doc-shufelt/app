import Flag from '../../../../Flag/object/Flag.js'

/**
 * 
 * @param {object} Property 
 * @param {array} validationMethods 
 * @returns {Promise<object>}
 */
export default async function validateProperty(Property, validationMethods) {
  if (Property.hasOwnProperty('validationsToPerform') && Property.validationsToPerform.length > 0) {
    // call each validation by name and create any flags
    for (let validation of Property.validationsToPerform) {
      const validate = (validationMethods[validation]).call(this, Property.propertyValue)
      if (validate) {
        Property.audit.validationsPerformed.push(`${ validation }: pass`)
      } else {
        let flag = await Flag(validate)
        Property.audit.validationsPerformed.push(`${ validation }: fail`)
        Property.audit.flagged = true
        Property.audit.flags.push(flag)
      }
    }
  }
  return Property
}