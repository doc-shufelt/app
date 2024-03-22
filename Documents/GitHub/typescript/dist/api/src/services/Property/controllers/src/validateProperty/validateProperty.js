var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Flag from '../../../../Flag/object/Flag.js';
/**
 *
 * @param {object} Property
 * @param {array} validationMethods
 * @returns {Promise<object>}
 */
export default function validateProperty(Property, validationMethods) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Property.hasOwnProperty('validationsToPerform') && Property.validationsToPerform.length > 0) {
            // call each validation by name and create any flags
            for (let validation of Property.validationsToPerform) {
                const validate = (validationMethods[validation]).call(this, Property.propertyValue);
                if (validate) {
                    Property.audit.validationsPerformed.push(`${validation}: pass`);
                }
                else {
                    let flag = yield Flag(validate);
                    Property.audit.validationsPerformed.push(`${validation}: fail`);
                    Property.audit.flagged = true;
                    Property.audit.flags.push(flag);
                }
            }
        }
        return Property;
    });
}
