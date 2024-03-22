import FlagController from "./controllers/FlagController"

export default class Flag {
  readonly type: string
  status: Status
  overridden: boolean
  overriddenBy: string | null
  controller: typeof FlagController = FlagController
  created: string
  modified: string

  constructor(
    type: string,
    status?: Status,
    overridden?: boolean,
    overriddenBy?: string,
    created?: string,
    modified?: string
  ) {
    this.type = type
    this.status = status || Status.open
    this.overridden = overridden || false
    this.overriddenBy = overriddenBy || null
    this.created = created || new Date().toISOString()
    this.modified = modified || new Date().toISOString()
  }

  setFlagPropertiesByType(type: string): void {
    const FlagProperty = FlagTypes.filter((flag) => flag[0] === this.type)
    //this.description = FlagProperty[1]
  }
}

// tuple array
const FlagTypes: FlagType[] = [
  ['FailedRequiredProperty', 'This property is required', 1],
  ['FailedAllowedStatusValues', 'An invalid status value has been provided', 1],
  ['FailedEmailFormat', 'The property must contain a valid email', 1],
  ['FailedSsnFormat', 'Ssn should be formatted 123-45-6789', 1],
  ['FailedPostalCodeFormat', 'Postal code should be the five digit number', 2],
  ['FailedMinLength', 'The property contains too few characters', 2],
  ['FailedMaxLength', 'The property contains too many characters', 2],
  ['FailedAllowedGenderValues', 'The gender property must be M | F | O', 2],
  ['FailedPhoneNumberFormat', 'Phone numbers should be formatted +1 (919) 555-1234', 2],
]

// tuples
type FlagType = [
  code: string,
  description: string,
  severity: number
]

// enums
enum Status {
  'open' = 0,
  'resolved' = 1,
  'overridden' = 2
}
