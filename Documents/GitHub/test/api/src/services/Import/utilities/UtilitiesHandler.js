import inferPayCycle from './inferPayCycle/inferPayCycle.js'
import processEmployerContributions from './processEmployerContributions/processEmployerContributions.js'
import processTaxItems from './processTaxItems/processTaxItems.js'
import processEmployeeDeductions from './processEmployeeDeductions/processEmployeeDeductions.js'

const UtilitiesHandler = {
    inferPayCycle,
    processEmployeeDeductions,
    processTaxItems,
    processEmployerContributions
}

export default UtilitiesHandler