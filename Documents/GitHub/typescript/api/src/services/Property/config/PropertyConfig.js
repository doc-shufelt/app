// detailed field-level definition for building a census report for CHAMP Plan
const champTemplate = {
  metadata: {
    name: 'champCensusDefinition',
    displayName: 'CHAMP PLAN Census Definition',
    properties: {
      status: {
        propertyName: 'status',
        propertyValue: null,
        employeeId: null,
        employerId: null,
        defaultValue: 'new',
        display: false,
        displayName: null,
        dataType: 'enum',
        transformsToExecute: [ /* none */ ],
        validationsToPerform: [
          'required',
          'allowedStatusValues'
        ],
        hash: null
      }
    }
  },
  sections: [{
      sectionName: 'company',
      displayName: 'Company Info',
      properties: {
        name: {
          propertyName: 'name',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Company Name',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        addressOne: {
          propertyName: 'addressOne',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Address Line One',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        addressTwo: {
          propertyName: 'addressTwo',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Address Line Two',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase',
            'removePeriods'
          ],
          validationsToPerform: [
            'minLength',
            'maxLength'
          ]
        },
        city: {
          propertyName: 'city',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'City',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'minLength',
            'maxLength',
            'required'
          ]
        },
        state: {
          propertyName: 'state',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'State',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'allowedStateValues'
          ]
        },
        postalCode: {
          propertyName: 'postalCode',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Postal Code',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'trimPostalCode'
          ],
          validationsToPerform: [
            'required',
            'allowedPostalCodeFormat'
          ]
        },
        payCycle: {
          propertyName: 'payCycle',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Pay Cycle',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'mapPayCycle'
          ],
          validationsToPerform: [
            'required',
            'allowedPayCycleValues'
          ]
        },
        censusType: {
          propertyName: 'censusType',
          propertyValue: null,
          display: true,
          employeeId: null,
          employerId: null,
          displayName: 'Census',
          dataType: 'enum',
          active: true,
          transformsToExecute: [ /* none */ ],
          validationsToPerform: [
            'required',
            'allowedCensusTypeValues'
          ]
        },
        status: {
          propertyName: 'status',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: false,
          displayName: null,
          dataType: 'enum',
          active: true,
          transformsToExecute: [ /* none */ ],
          validationsToPerform: [
            'required',
            'allowedStatusValues'
          ]
        }
      }
    },
    {
      sectionName: 'contact',
      displayName: 'Contact Info',
      properties: {
        firstName: {
          propertyName: 'firstName',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Contact First Name',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        lastName: {
          propertyName: 'lastName',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Contact Last Name',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        emailAddress: {
          propertyName: 'email',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Contact Email',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'lowerCase'
          ],
          validationsToPerform: [
            'allowedEmailFormat',
            'required'
          ]
        },
        phoneNumber: {
          propertyName: 'phoneNumber',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Contact Phone Number',
          dataType: 'string',
          active: true,
          transformsToExecute: {
            // format canonical phone number
          },
          validationsToPerform: [
            'required',
            'formatPhoneNumber'
          ]
        },
        jobTitle: {
          propertyName: 'jobTitle',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Contact Title',
          dataType: 'string',
          active: true,
          transformsToExecute: {

          },
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        }
      }
    },
    {
      sectionName: 'agent',
      displayName: 'Agent Information',
      properties: {
        firstName: {
          propertyName: 'firstName',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          defaultValue: 'Ryan',
          display: true,
          displayName: 'Agent First Name',
          dataType: 'string',
          active: true,
          transformsToExecute: {
            // none
          },
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        lastName: {
          propertyName: 'lastName',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          defaultValue: 'McBride',
          display: true,
          displayName: 'Agent Last Name',
          dataType: 'string',
          active: true,
          transformsToExecute: {
            // none
          },
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        phoneNumber: {
          propertyName: 'phoneNumber',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          defaultValue: null,
          display: true,
          displayName: 'Agent Phone Number',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'formatPhoneNumber'
          ],
          validationsToPerform: [
            'required'
          ]
        }
      }
    },
    {
      sectionName: 'employee',
      displayName: 'Employee Information',
      properties: {
        firstName: {
          propertyName: 'firstName',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'First Name',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        lastName: {
          propertyName: 'lastName',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Last Name',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        employeeId: {
          propertyName: 'employeeId',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee ID Number',
          dataType: 'string',
          active: true,
          transformsToExecute: [ /* none */ ],
          validationsToPerform: [
            'required'
          ]
        },
        gender: {
          propertyName: 'gender',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Sex (M/F/O)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'upperCase',
            'mapGender'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        ssn: {
          propertyName: 'ssn',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'SSN',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'formatSsn'
          ],
          validationsToPerform: [
            'required',
            'allowedSsnFormat'
          ]
        },
        dateOfBirth: {
          propertyName: 'dateOfBirth',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Date of Birth (YYYY-MM-DD)',
          dataType: 'date',
          active: true,
          transformsToExecute: [
            'formatDateYyyymmDD'
          ],
          validationsToPerform: [
            'required',
            'allowedDateFormat'
          ]
        },
        phoneNumber: {
          propertyName: 'phoneNumber',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee Phone Number',
          dataType: 'string',
          required: true,
          active: true,
          transformsToExecute: [
            'formatPhoneNumber'
          ],
          validationsToPerform: [
            'allowedPhoneNumberFormat'
          ]
        },
        email: {
          propertyName: 'email',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee Email',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'lowerCase'
          ],
          validationsToPerform: [
            'required',
            'allowedEmailFormat'
          ]
        },
        addressOne: {
          propertyName: 'addressOne',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee Address',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'removePeriods',
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            'minLength',
            'maxLength'
          ]
        },
        addressTwo: {
          propertyName: 'addressTwo',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee Address (Two)',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'removePeriods',
            'upperCase'
          ],
          validationsToPerform: [
            'minLength',
            'maxLength'
          ]
        },
        city: {
          propertyName: 'city',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee City',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        state: {
          propertyName: 'state',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee State',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'upperCase'
          ],
          validationsToPerform: [
            'required',
            //'allowedStateValues'
          ]
        },
        postalCode: {
          propertyName: 'postalCode',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee Zip',
          dataType: 'string',
          active: true,
          transformsToExecute: [
            'trimPostalCode'
          ],
          validationsToPerform: [
            'required',
            'allowedPostalCodeFormat'
          ]
        },
        grossPay: {
          propertyName: 'grossPay',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Employee Gross Pay',
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        medicareExempt: {
          propertyName: 'medicareExempt',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Exempt from Medicare (Y/N)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'mapExemption'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        socialSecurityExempt: {
          propertyName: 'socialSecurityExempt',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Exempt from Social Security (Y/N)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'mapExemption'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        federalMaritalStatus: {
          propertyName: 'federalMaritalStatus',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'W-4 Federal Marital Status (M/H/S/MS/E)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'upperCase',
            'mapMaritalStatus'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        userLatestW4: {
          propertyName: 'usingLatestW4',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Federal 2020 W-4 Tax Form Used (Y or N)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'upperCase',
            'mapYesNo'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        federalAllowances: {
          propertyName: 'federalAllowances',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'W-4 Federal Dependents (2019 W-4 or earlier)',
          dataType: 'integer',
          active: true,
          transformsToExecute: [ /* none */ ],
          validationsToPerform: [
            /*
                                    requiredIf: [
                                       {
                                           propertyName: 'latestW4',
                                           operator: 'equals',
                                           propertyValue: false
                                       }
                             */
          ]
        },
        federalDependents: {
          propertyName: 'federalDependents',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayname: 'W-4 Federal Dependents Amount $ (2020 W4 or later)',
          dataType: 'currency',
          active: true,
          transformsToExecute: [ /* none */ ],
          validationsToPerform: []
          /* requiredIf: [
              {
                  propertyName: 'latestW4',
                  operator: 'equals',
                  propertyValue: true
              }
          ] */
        },
        multipleJobsHeld: {
          propertyName: 'multipleJobsHeld',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: '2020 (or later) W-4 Box 2C: Two Jobs Yes/No',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'mapYesNo'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        stateMaritalStatus: {
          propertyName: 'stateMaritalStatus',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'W-4 State Marital Status (M/S/H)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'mapMaritalStatus'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        medicalDeductions: {
          propertyName: 'medicalDeductions',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Medical',
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        dentalDeductions: {
          propertyName: 'dentalDeductions',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Dental',
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        visionDeductions: {
          propertyName: 'visionDeductions',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Vision',
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        otherPreTaxDeductions: {
          propertyName: 'otherPreTaxDeductions',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: false,
          displayName: null,
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        otherPostTaxDeductions: {
          propertyName: 'otherPostTaxDeductions',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: false,
          displayName: null,
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        deferred401k: {
          propertyName: 'deferred401k',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: false,
          displayName: null,
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        deferredRothIra: {
          propertyName: 'deferredRothIra',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: false,
          displayName: null,
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        additionalTaxWithholdings: {
          propertyName: 'additionalTaxWithholdings',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Additional Tax Withholdings',
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            'required'
          ]
        },
        arizonaTaxWithholdingRate: {
          propertyName: 'arizonaTaxWithholdingRate',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Arizona Tax Withholding Rate (%)',
          dataType: 'percent',
          active: true,
          transformsToExecute: [
            'formatPercent'
          ],
          validationsToPerform: [
            /* filter: {
                propertyName: 'state',
                operator: 'equals',
                propertyValue: 'AZ'
            } */
          ]
        },
        exemptionAmountClaimed: {
          propertyName: 'exemptionAmountClaimed',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Exemption $ Amount Claimed (MS only)',
          dataType: 'currency',
          active: true,
          transformsToExecute: [
            'formatCurrency'
          ],
          validationsToPerform: [
            /* filter: {
                propertyName: 'state',
                operator: 'equals',
                propertyValue: 'MS'
            } */
          ]
        },
        spouseEmployed: {
          propertyName: 'spouseEmployed',
          propertyValue: null,
          employeeId: null,
          employerId: null,
          display: true,
          displayName: 'Spouse Works (Y/N) (MO Only)',
          dataType: 'enum',
          active: true,
          transformsToExecute: [
            'mapYesNo'
          ],
          validationsToPerform: [
            /* filter: {
                propertyName: 'state',
                operator: 'equals',
                propertyValue: 'MO'
            },
            allowedValues: ['Y', 'N'] */
          ]
        }
      }
    }
  ],
  methods: {
    transformations: {
      removePeriods: function (text) {
        if (text === null) {
          return false
        }
        if (text.includes('.')) {
          return {
            name: 'Remove Periods',
            description: 'Utility function that removes /./ character(s) from a string of text.',
            originalValue: text,
            transformedValue: text.replaceAll('.', ''),
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        }
        return false
      },
      upperCase: function (text) {
        if (text === null) {
          return false
        }
        let transformedValue = text.toUpperCase()
        if (text != transformedValue) {
          return {
            name: 'Upper Case',
            description: 'Utility function that transforms text to upper case.',
            originalValue: text,
            transformedValue: transformedValue,
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        }
        return false
      },
      lowerCase(text) {
        if (text === null) {
          return false
        }
        let transformedValue = text.toLowerCase()
        if (text != transformedValue) {
          return {
            name: 'Lower Case',
            description: 'Utility function that transforms text to lower case.',
            originalValue: text,
            transformedValue: transformedValue,
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        }
        return false
      },
      removeSpecialCharacters(text) {

      },
      trimPostalCode(text) {
        if (text === null) {
          return false
        }
        let transformedValue = text.slice(0, 5)
        if (text != transformedValue) {
          return {
            name: 'Trim Postal Code',
            description: 'Utility function that trims the postal code down to five digits.',
            originalValue: text,
            transformedValue: transformedValue,
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        }
        return false
      },
      formatCurrency(number) {
        if (number === null) {
          return false
        }

      },
      formatPercent(number) {
        // converts a float to percent
      },
      formatPhoneNumber(text) {
        try {
          if (text != null) {
            var baseNumber = null
            let cleanText = text.replace(/[^0-9x]/g, '')
            let positionOfX = cleanText.search('x')
            let baseText = (positionOfX != -1) ? cleanText.slice(0, positionOfX) : cleanText
            if (baseText.length === 11) {
              baseNumber = `+${ baseText.slice( 0, 1 ) } (${ baseText.slice( 1, 4 ) }) ${ baseText.slice( 4, 7 ) }-${ baseText.slice( 7, 11 )}`
            }
            if (baseText.length === 10) {
              baseNumber = `+1 (${ baseText.slice( 0, 3 ) }) ${ baseText.slice( 3, 6 ) }-${ baseText.slice( 6, 10 ) }`
            }
            let extension = cleanText.slice(positionOfX + 1, cleanText.length)
            return {
              name: 'Format Phone Number',
              description: 'Utility function that reformats phone numbers to a canonical form.',
              originalValue: text,
              transformedValue: `${ baseNumber } Ext ${ extension }`,
              editedBy: 'automation',
              created: new Date().toISOString(),
              modified: new Date().toISOString()
            }
          }
        } catch (error) {
          console.log(error)
          return error
        }
      },
      formatSsn(ssn) {
        return true
      },
      formatDateYyyymmDD(text) {
        // reformat
      },
      mapYesNo(yesOrNo) {
        const yesNoMap = {
          YES: 'Y',
          Yes: 'Y',
          yes: 'Y',
          NO: 'N',
          No: 'N',
          no: 'N'
        }
        if (yesOrNo === null) {
          return false
        }
        if (Object.keys(yesNoMap).includes(yesOrNo)) {
          return {
            name: 'Map Yes/No Values',
            description: 'Utility function that maps yes/no values to champ plan required.',
            originalValue: yesOrNo,
            transformedValue: yesNoMap[yesOrNo],
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        } else {
          return false
        }
      },
      mapExemption(text) {

      },
      mapPayCycle(text) {

      },
      mapGender(gender) {
        const genderMap = {
          MALE: 'M',
          FEMALE: 'F',
          OTHER: 'O',
          DECLINED_TO_PROVIDE: 'D'
        }
        if (gender === null) {
          return false
        }
        if (Object.keys(genderMap).includes(gender)) {
          return {
            name: 'Map Gender Values',
            description: 'Utility function that maps Finch enum values for gender to those required by champ plan.',
            originalValue: gender,
            transformedValue: genderMap[gender],
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        } else {
          return false
        }
      },
      mapMaritalStatus(maritalStatus) {
        const maritalStatusMap = {
          SINGLE: 's',
          MARRIED: 'm',
          HEAD_OF_HOUSEHOLD: 'h'
        }
        if (maritalStatus === null) {
          return false
        }
        if (Object.keys(maritalStatusMap).includes(maritalStatus)) {
          return {
            name: 'Map Marital Status Values',
            description: 'Utility function that maps Finch enum values for marital status to those required by champ plan.',
            originalValue: maritalStatus,
            transformedValue: maritalStatusMap[maritalStatus],
            editedBy: 'automation',
            created: new Date().toISOString(),
            modified: new Date().toISOString()
          }
        } else {
          return false
        }
      }
    },
    validations: {
      required(propertyValue) {
        if (propertyValue === null) {
          return 'FailedRequiredProperty'
        }
        return true
      },
      minLength(text) {
        let minimum = 2
        if (text === null) {
          return true
        }
        return text.length < minimum ? true : 'FailedMinLength'
      },
      maxLength(text) {
        let maximum = 25
        if (text === null) {
          return true
        }
        return text.length > maximum ? true : 'FailedMaxLength'
      },
      requiredIf(text) {
        return true
      },
      specialCharactersAllowed(text) {
        return true
      },
      allowedStatusValues(status) {
        if (status === null) {
          return
        }
        return true
      },
      // allowedStateValues( stateAbbreviation ) {
      //     const allowedStateValues = process.env.STATE_ABBREVIATIONS
      //     if ( allowedStateValues.includes( stateAbbreviation ) ) {
      //         return true
      //     }
      //     return 'FailedAllowedStateValues'
      // },
      allowedGenderValues(gender) {
        const allowedGenderValues = ['M', 'F', 'O']
        if (allowedGenderValues.includes(gender)) {
          return true
        }
        return 'FailedAllowedGenderValues'
      },
      allowedSsnFormat(ssn) {
        const allowedFormat = new RegExp(`^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$`)
        if (ssn != null) {
          if (allowedFormat.test(ssn)) {
            return true
          }
          return 'FailedSsnFormat'
        }
        return true
      },
      allowedDateFormat(date) {
        return true
      },
      allowedPhoneNumberFormat(phoneNumber) {
        if (phoneNumber === null) return true
        let main = phoneNumber.substring(0, 17)
        const allowedFormat = new RegExp('\b(19\d\d|20\d\d)-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\b')
        if (allowedFormat.test(main)) {
          return true
        }
        return 'FailedPhoneNumberFormat'
      },
      allowedEmailFormat(email) {
        const allowedFormat = new RegExp('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/')
        if (allowedFormat.test(email)) {
          return true
        }
        return 'FailedEmailFormat'
      },
      allowedPostalCodeFormat(postalCode) {
        const allowedFormat = new RegExp('/^\d{5}(-\d{4})?$/')
        if (allowedFormat.test(postalCode)) {
          return true
        }
        return 'FailedPostalCodeFormat'
      }
    }
  }
}

export default champTemplate