var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Audit from '../../Audit/object/Audit.js';
import PropertyConfig from '../config/PropertyConfig.js';
export default function Property(property, sectionName) {
    return __awaiter(this, void 0, void 0, function* () {
        const Property = {};
        const section = PropertyConfig.sections.find((element) => element.sectionName === sectionName);
        const properties = section.properties;
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
                value: yield Audit(),
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
        });
        return Property;
    });
}
