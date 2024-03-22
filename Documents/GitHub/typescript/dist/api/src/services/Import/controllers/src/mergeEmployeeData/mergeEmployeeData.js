var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Employee from '../../../../Employee/object/Employee.js';
/**
 * @description A controller that takes all the employee data from finch and merges it into a canonical employee object
 * @param { array } directory An array containing the data returned from /company/directory
 * @param { array } individuals An array containing the data returned from /company/individual
 * @param { array} employments An array containing the data returned from /company/employment
 * @param { array } statements An array containing the data returned from /company/payment and /pay-statement
 * @param { string } employerId A string representation of the employer id
 * @returns { Promise<array> }
 */
export default function mergeEmployeeData(directory, individuals, employments, statements, employerId) {
    return __awaiter(this, void 0, void 0, function* () {
        var employeeList = [];
        // loop through each employee returned from /company/individual
        for (let individual of individuals) {
            // match the record in directory
            let record = directory.find((element) => {
                return element.id === individual.id;
            });
            // match the record in employment
            let employment = employments.find((element) => {
                return element.id === individual.id;
            });
            // match the record in statements
            let statement = statements.find((element) => {
                return element.id === individual.id;
            });
            const profile = Object.assign(Object.assign(Object.assign(Object.assign({}, record), individual), employment), statement);
            const Profile = yield Employee(employerId, profile);
            employeeList.push(Profile);
        }
        return employeeList;
    });
}
