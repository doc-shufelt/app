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
 * @param { object } employeeDeductions
 * @returns
 */
export default function processEmployeeDeductions(employeeDeductions) {
    return __awaiter(this, void 0, void 0, function* () {
        var medicalDeductions = 0;
        var visionDeductions = 0;
        var dentalDeductions = 0;
        var otherPreTaxDeductions = 0;
        var otherPostTaxDeductions = 0;
        var irs401kDeductions = 0;
        var irsRothIraDeductions = 0;
        const medicalDeductionTypes = ["s125_medical", "hsa_pre", "hsa_post", "fsa_medical"];
        const visionDeductionTypes = ["s125_vision"];
        const dentalDeductionTypes = ["s125_dental"];
        const irs401kDeductionTypes = ["401k", "403b"];
        const irsRothIraDeductionTypes = ["401k_roth", "403b_roth", "457_roth", "simple_ira"];
        for (let deduction of employeeDeductions) {
            let added = false;
            if (medicalDeductionTypes.includes(deduction.type)) {
                medicalDeductions += deduction.amount;
                added = true;
            }
            if (visionDeductionTypes.includes(deduction.type)) {
                visionDeductions += deduction.amount;
                added = true;
            }
            if (dentalDeductionTypes.includes(deduction.type)) {
                dentalDeductions += deduction.amount;
                added = true;
            }
            if (irs401kDeductionTypes.includes(deduction.type)) {
                irs401kDeductions += deduction.amount;
                added = true;
            }
            if (irsRothIraDeductionTypes.includes(deduction.type)) {
                irsRothIraDeductions += deduction.amount;
                added = true;
            }
            // Confirm this is only evaluated if the deduction does not match the above
            if (added === false && deduction.pre_tax === true) {
                otherPreTaxDeductions += deduction.amount;
            }
            if (added === false && deduction.pre_tax === false) {
                otherPostTaxDeductions += deduction.amount;
            }
        }
        const deductions = {
            medicalDeductions,
            visionDeductions,
            dentalDeductions,
            irs401kDeductions,
            irsRothIraDeductions,
            otherPostTaxDeductions,
            otherPreTaxDeductions
        };
        return deductions;
    });
}
