
export default async function processStatements( statements ) {
    try {
        const statementsList = []
        // loop through the statements and aggregate tax and deductions
        for ( const statement of statements ) {
            const taxWithholdings = await processTaxItems( statement.taxes )
            const employeeDeductions = await processEmployeeDeductions( statement.employee_deductions )
            const employerContributions = await processEmployerContributions( statement.employer_contributions )
            const Statement = {}
            Object.defineProperties( Statement, {
                id: {
                    value: statement.individual_id,
                    writable: false,
                    configurable: false,
                    enumerable: true
                },
                grossPay: {
                    value: statement.gross_pay.amount,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                federalTaxWithholdings: {
                    value: taxWithholdings.federalTaxWithholdings,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                stateTaxWithholdings: {
                    value: taxWithholdings.stateTaxWithholdings,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                ficaTaxWithholdings: {
                    value: taxWithholdings.ficaTaxWithholdings,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                additionalTaxWithholdings: {
                    value: taxWithholdings.additionalTaxWithholdings,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                medicalDeductions: {
                    value: employeeDeductions.medicalDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                visionDeductions: {
                    value: employeeDeductions.visionDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                dentalDeductions: {
                    value: employeeDeductions.dentalDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                otherPreTaxDeductions: {
                    value: employeeDeductions.otherPreTaxDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                otherPostTaxDeductions: {
                    value: employeeDeductions.otherPostTaxDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                irs401kDeductions: {
                    value: employeeDeductions.irs401kDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                irsRothIraDeduction: {
                    value: employeeDeductions.irsRothIraDeductions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                },
                employerContributions: {
                    value: employerContributions.totalContributions,
                    writable: true,
                    configurable: false,
                    enumerable: true
                }
            })
            statementsList.push( Statement )
        }
        return statementsList // <array>
    } catch ( error ) {
    throw new Error( error )
    }
}

async function processTaxItems( taxes ) {
    try {
        var federalTaxWithholdings = 0
        var stateTaxWithholdings = 0
        var ficaTaxWithholdings = 0
        var additionalTaxWithholdings = 0
        for ( const tax of taxes ) {
            switch ( tax.type ) {
                case 'federal':
                    federalTaxWithholdings += tax.amount
                    break
                case 'state':
                    stateTaxWithholdings  += tax.amount
                    break
                case 'fica':
                    ficaTaxWithholdings  += tax.amount
                    break
                default:
                    additionalTaxWithholdings += tax.amount
                    break
            }
        }
        return {
            federalTaxWithholdings,
            stateTaxWithholdings,
            ficaTaxWithholdings,
            additionalTaxWithholdings
        }
    } catch ( error ) {
        return error
    }
}

async function processEmployeeDeductions( employeeDeductions ) {
    try {
        // initialize the buckets
        var medicalDeductions = 0
        var visionDeductions = 0
        var dentalDeductions = 0
        var otherPreTaxDeductions = 0
        var otherPostTaxDeductions = 0
        var irs401kDeductions = 0
        var irsRothIraDeductions = 0

        // define the buckets
        const medicalDeductionTypes = [ "s125_medical", "hsa_pre", "hsa_post", "fsa_medical" ]
        const visionDeductionTypes = [ "s125_vision" ]
        const dentalDeductionTypes = [ "s125_dental" ]
        const irs401kDeductionTypes = [ "401k", "403b" ]
        const irsRothIraDeductionTypes = [ "401k_roth", "403b_roth", "457_roth", "simple_ira" ]

        // loop through the deductions
        for ( let deduction of employeeDeductions ) {
            let added = false
            if ( medicalDeductionTypes.includes( deduction.type ) ) {
                medicalDeductions += deduction.amount
                added = true
            }
            if ( visionDeductionTypes.includes( deduction.type ) ) {
                visionDeductions += deduction.amount
                added = true
            }
            if ( dentalDeductionTypes.includes( deduction.type ) ) {
                dentalDeductions += deduction.amount
                added = true
            }
            if ( irs401kDeductionTypes.includes( deduction.type ) ) {
                irs401kDeductions += deduction.amount
                added = true
            }
            if ( irsRothIraDeductionTypes.includes( deduction.type ) ) {
                irsRothIraDeductions += deduction.amount
                added = true
            }
            // Confirm this is only evaluated if the deduction does not match the above
            if ( added === false && deduction.pre_tax === true ) {
                otherPreTaxDeductions += deduction.amount
            } 
            if ( added === false && deduction.pre_tax === false ) {
                otherPostTaxDeductions += deduction.amount
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
        }
        return deductions
    } catch ( error ) {
        return error
    }
}

async function processEmployerContributions( employerContributions ) {
    try {
        var totalContributions = 0
        const contributionTypes = [ "s125_medical", "hsa_pre", "hsa_post", "fsa_medical" ]
        for ( let contribution of employerContributions ) {
            if ( contributionTypes.includes( contribution.type ) ) {
                totalContributions += contribution.amount
            }
        }
        return {
            totalContributions
        }
    } catch ( error ) {
        return error
    }
} 