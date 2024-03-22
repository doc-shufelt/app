import UtilitiesHandler from '../../../utilities/UtilitiesHandler.js'

/**
 * 
 * @param {array} statements 
 * @returns {Promise<array>} an array of bluebird statement objects
 */
export default async function processStatements(statements) {
  const statementsList = []
  for (const statement of statements) {
    const taxWithholdings = await UtilitiesHandler.processTaxItems(statement.taxes)
    const employeeDeductions = await UtilitiesHandler.processEmployeeDeductions(statement.employee_deductions)
    const employerContributions = await UtilitiesHandler.processEmployerContributions(statement.employer_contributions)
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
    }
    statementsList.push(Statement)
  }
  return statementsList
}