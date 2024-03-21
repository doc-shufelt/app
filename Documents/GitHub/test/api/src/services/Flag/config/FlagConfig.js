export default async function FlagConfig() {
  return {
    FailedRequiredProperty: {
      description: `The ${ propertyName } property is required.`
    },
    FailedAllowedStateValues: {
      description: `The ${ propertyName } property contains an invalid value.`
    },
    FailedAllowedStatusValues: {
      description: `The ${ propertyName } property contains an invalid value.`
    },
    FailedAllowedGenderValues: {
      description: `The ${ propertyName } property contains an invalid value.`
    },
    FailedPhoneNumberFormat: {
      description: `The ${ propertyName } property should follow the format << +1 (555) 123-4567 >>.`
    },
    FailedEmailFormat: {
      description: `The ${ propertyName } property should be a valid email address.`
    },
    FailedSsnFormat: {
      description: `The ${ propertyName } property should follow the format << 123-45-6789 >>.`
    },
    FailedPostalCodeFormat: {
      description: `The ${ propertyName } property should follow the format << 90210 >>.`
    },
    FailedMinLength: {
      description: `The ${ propertyName } property should have more than 2 characters.`
    },
    FailedMaxLength: {
      description: `The ${ propertyName } property should have fewer than 35 characters.`
    }
  }
}