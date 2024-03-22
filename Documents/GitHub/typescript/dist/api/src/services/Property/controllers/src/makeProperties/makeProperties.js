var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* imports */
import PropertyObject from '../../../object/Property.js';
import PropertyController from '../../PropertyController.js';
import PropertyConfig from '../../../config/PropertyConfig.js';
import EmployeeController from '../../../../Employee/controllers/EmployeeController.js';
/**
 *
 * @param {array} employees
 * @param {object} mongoClient
 * @returns { Promise<array> }
 */
export default function makeProperties(employees, mongoClient) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const transformationMethods = PropertyConfig.methods.transformations;
        const validationMethods = PropertyConfig.methods.validations;
        var section = PropertyConfig.sections.find((element) => element.sectionName === 'employee');
        var censusList = [];
        for (let employee of employees) {
            var profile = {};
            for (var property of Object.keys(section.properties)) {
                const Property = yield PropertyObject(property, 'employee');
                Property.propertyValue = (_a = employee[property]) !== null && _a !== void 0 ? _a : null;
                Property.employeeId = (_b = employee._id.toString()) !== null && _b !== void 0 ? _b : null;
                Property.employerId = (_c = employee.employerId) !== null && _c !== void 0 ? _c : null;
                Property.audit.originalValue = (_d = employee[property]) !== null && _d !== void 0 ? _d : null;
                yield PropertyController.transformProperty(Property, transformationMethods);
                yield PropertyController.validateProperty(Property, validationMethods);
                profile[property] = Property.propertyValue;
                censusList.push(Property);
            }
            yield EmployeeController.editEmployee(employee._id, profile, mongoClient);
        }
        return censusList;
    });
}
