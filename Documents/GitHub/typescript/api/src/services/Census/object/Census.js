/**
 * 
 * @param {*} census 
 * @returns 
 */
export default async function Census(company, contact, agent, employees) {
  const Census = {}
  Object.defineProperties(Census, {
    companyName: {
      value: (company.hasOwnProperty('legalName') && company.legalName != null) ? company.legalName : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    companyAddressOne: {
      value: (company.hasOwnProperty('addressOne') && company.addressOne != null) ? company.addressOne : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    companyAddressTwo: {
      value: (company.hasOwnProperty('addressTwo') && company.addressTwo != null) ? company.addressTwo : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    companyCity: {
      value: (company.hasOwnProperty('city') && company.city != null) ? company.city : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    companyState: {
      value: (company.hasOwnProperty('state') && company.state != null) ? company.state : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    companyPostalCode: {
      value: (company.hasOwnProperty('postalCode') && company.postalCode != null) ? company.postalCode : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    contactFirstName: {
      value: (contact.hasOwnProperty('firstName') && contact.firstName != null) ? contact.firstName : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    contactLastName: {
      value: (contact.hasOwnProperty('lastName') && contact.lastName != null) ? contact.lastName : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    contactEmailAddress: {
      value: (contact.hasOwnProperty('emailAddress') && contact.emailAddress != null) ? contact.emailAddress : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    contactPhoneNumber: {
      value: (contact.hasOwnProperty('phoneNumber') && contact.phoneNumber != null) ? contact.phoneNumber : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    contactTitle: {
      value: (contact.hasOwnProperty('jobTitle') && contact.jobTitle != null) ? contact.jobTitle : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    agentFirstName: {
      value: (agent.hasOwnProperty('firstName') && agent.firstName != null) ? agent.firstName : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    agentLastName: {
      value: (agent.hasOwnProperty('lastName') && agent.lastName != null) ? agent.lastName : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    agentPhoneNumber: {
      value: (agent.hasOwnProperty('phoneNumber') && agent.phoneNumber != null) ? agent.phoneNumber : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    agentEmailAddress: {
      value: (agent.hasOwnProperty('emailAddress') && agent.emailAddress != null) ? agent.emailAddress : null,
      writable: true,
      configurable: false,
      enumerable: true
    },
    employees: {
      value: (employees) ? employees : null,
      writable: true,
      configurable: true,
      enumerable: true
    }
  })
  return Census
}