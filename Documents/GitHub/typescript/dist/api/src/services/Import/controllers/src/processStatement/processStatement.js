var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UtilitiesHandler from '../../../utilities/UtilitiesHandler.js';
/**
 *
 * @param {array} statements
 * @returns {Promise<array>} an array of bluebird statement objects
 */
export default function processStatements(statements) {
    return __awaiter(this, void 0, void 0, function* () {
        const statementsList = [];
        for (const statement of statements) {
            const taxWithholdings = yield UtilitiesHandler.processTaxItems(statement.taxes);
            const employeeDeductions = yield UtilitiesHandler.processEmployeeDeductions(statement.employee_deductions);
            const employerContributions = yield UtilitiesHandler.processEmployerContributions(statement.employer_contributions);
            const Statement = {
                id: statement.individual_id,
                grossPay: statement.gross_pay.amount,
                federalTax: taxWithholdings.federalTax,
                stateTax: taxWithholdings.stateTax,
                ficaTax: taxWithholdings.ficaTax,
                additionalTaxWithholdings: taxWithholdings.additionalTaxWithholdings,
                medicalDeductions: employeeDeductions.medicalDeductions,
                visionDeductions: employeeDeductions.visionDeductions,
                dentalDeductions: employeeDeductions.dentalDeductions,
                otherPreTaxDeductions: employeeDeductions.otherPreTaxDeductions,
                otherPostTaxDeductions: employeeDeductions.otherPostTaxDeductions,
                irs401kDeductions: employeeDeductions.irs401kDeductions,
                irsRothIraDeduction: employeeDeductions.irsRothIraDeductions,
                employerContributions: employerContributions.totalContributions,
            };
            statementsList.push(Statement);
        }
        return statementsList;
    });
}
