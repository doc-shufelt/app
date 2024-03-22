/**
 * 
 * @param { object } employerContributions 
 * @returns 
 */
export default async function processEmployerContributions(employerContributions) {
  try {
    var contributions = 0
    const contributionTypes = ['s125_medical', 'hsa_pre', 'hsa_post', 'fsa_medical']
    for (let contribution of employerContributions) {
      if (contributionTypes.includes(contribution.type)) {
        contributions += contribution.amount
      }
    }
    return contributions
  } catch (error) {
    return error
  }
}