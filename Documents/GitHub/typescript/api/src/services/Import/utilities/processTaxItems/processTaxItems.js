/**
 * 
 * @param {array} taxLineItems 
 * @returns {Promise<object>}
 */
export default async function processTaxItems(taxLineItems) {
  try {
    var federalTaxWithholdings = 0
    var stateTaxWithholdings = 0
    var ficaTaxWithholdings = 0
    var additionalTaxWithholdings = 0
    for (const tax of taxLineItems) {
      switch (tax.type) {
        case 'federal':
          federalTaxWithholdings += tax.amount
          break
        case 'state':
          stateTaxWithholdings += tax.amount
          break
        case 'fica':
          ficaTaxWithholdings += tax.amount
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
  } catch (error) {
    return error
  }
}