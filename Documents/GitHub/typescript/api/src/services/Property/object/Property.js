import Audit from '../../Audit/object/Audit.js'
import PropertyConfig from '../config/PropertyConfig.js'

export default async function Property(property, sectionName) {
  const Property = {}
  const section = PropertyConfig.sections.find((element) => element.sectionName === sectionName)
  const properties = section.properties
  Object.defineProperties(Property, {
    propertyName: {
      value: property,
      writable: false,
      enumerable: true,
      configurable: false
    },
    propertyValue: {
      value: null,
      writable: true,
      enumerable: true,
      configurable: false
    },
    currentSource: {
      value: 'finch',
      writable: true,
      enumerable: true,
      configurable: false
    },
    employeeId: {
      value: null,
      writable: true,
      enumerable: true,
      configurable: false
    },
    employerId: {
      value: null,
      writable: true,
      enumerable: true,
      configurable: false
    },
    display: {
      value: properties[property].display,
      writable: true,
      enumerable: true,
      configurable: false
    },
    displayName: {
      value: properties[property].displayName,
      writable: false,
      enumerable: true,
      configurable: false
    },
    dataType: {
      value: properties[property].dataType,
      writable: false,
      enumerable: true,
      configurable: false
    },
    active: {
      value: true,
      writable: true,
      enumerable: true,
      configurable: false
    },
    transformsToExecute: {
      value: properties[property].transformsToExecute,
      writable: false,
      enumerable: true,
      configurable: false
    },
    validationsToPerform: {
      value: properties[property].validationsToPerform,
      writable: false,
      enumerable: true,
      configurable: false
    },
    audit: {
      value: await Audit(),
      writable: true,
      enumerable: true,
      configurable: false
    },
    hash: {
      value: null,
      writable: true,
      enumerable: false,
      configurable: false
    },
    created: {
      value: new Date().toISOString(),
      writable: false,
      enumerable: true,
      configurable: false
    },
    modified: {
      value: new Date().toISOString(),
      writable: true,
      enumerable: true,
      configurable: false
    }
  })
  return Property
}