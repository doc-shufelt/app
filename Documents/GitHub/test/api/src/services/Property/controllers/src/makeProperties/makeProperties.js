/* imports */
import PropertyObject from '../../../object/Property.js'
import PropertyController from '../../PropertyController.js'
import PropertyConfig from '../../../config/PropertyConfig.js'
import EmployeeController from '../../../../Employee/controllers/EmployeeController.js'

/**
 * 
 * @param {array} employees 
 * @param {object} mongoClient
 * @returns { Promise<array> }
 */
export default async function makeProperties(employees, mongoClient) {
  const transformationMethods = PropertyConfig.methods.transformations
  const validationMethods = PropertyConfig.methods.validations
  var section = PropertyConfig.sections.find((element) => element.sectionName === 'employee')
  var censusList = []
  for (let employee of employees) {
    var profile = {}
    for (var property of Object.keys(section.properties)) {
      const Property = await PropertyObject(property, 'employee')
      Property.propertyValue = employee[property] ?? null
      Property.employeeId = employee._id.toString() ?? null
      Property.employerId = employee.employerId ?? null
      Property.audit.originalValue = employee[property] ?? null
      await PropertyController.transformProperty(Property, transformationMethods)
      await PropertyController.validateProperty(Property, validationMethods)
      profile[property] = Property.propertyValue
      censusList.push(Property)
    }
    await EmployeeController.editEmployee(employee._id, profile, mongoClient)
  }
  return censusList
}