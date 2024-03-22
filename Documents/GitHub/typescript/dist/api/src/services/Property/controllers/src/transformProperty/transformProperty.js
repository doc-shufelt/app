var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 *
 * @param {object} Property
 * @param {array} transformationMethods
 * @returns {Promise<object>}
 */
export default function transformProperty(Property, transformationMethods) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Property.hasOwnProperty('transformsToExecute') && Property.transformsToExecute.length > 0) {
            for (let transformation of Property.transformsToExecute) {
                const transform = (transformationMethods[transformation]).call(this, Property.propertyValue);
                if (transform) {
                    if (Property.propertyValue != null) {
                        Property.audit.pastValues.push(Property.propertyValue);
                    }
                    Property.propertyValue = transform.transformedValue;
                    Property.audit.transformsExecuted.push(transform);
                }
            }
        }
        return Property;
    });
}
