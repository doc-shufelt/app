var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function FlagConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        return {
            FailedRequiredProperty: {
                description: `The ${propertyName} property is required.`
            },
            FailedAllowedStateValues: {
                description: `The ${propertyName} property contains an invalid value.`
            },
            FailedAllowedStatusValues: {
                description: `The ${propertyName} property contains an invalid value.`
            },
            FailedAllowedGenderValues: {
                description: `The ${propertyName} property contains an invalid value.`
            },
            FailedPhoneNumberFormat: {
                description: `The ${propertyName} property should follow the format << +1 (555) 123-4567 >>.`
            },
            FailedEmailFormat: {
                description: `The ${propertyName} property should be a valid email address.`
            },
            FailedSsnFormat: {
                description: `The ${propertyName} property should follow the format << 123-45-6789 >>.`
            },
            FailedPostalCodeFormat: {
                description: `The ${propertyName} property should follow the format << 90210 >>.`
            },
            FailedMinLength: {
                description: `The ${propertyName} property should have more than 2 characters.`
            },
            FailedMaxLength: {
                description: `The ${propertyName} property should have fewer than 35 characters.`
            }
        };
    });
}
