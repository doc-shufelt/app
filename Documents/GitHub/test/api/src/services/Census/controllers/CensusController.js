import createCensus from './src/createCensus/createCensus.js'
import createExcelReport from './src/createExcelReport/createExcelReport.js'
import getCensusById from './src/getCensusById/getCensusById.js'
import updateCensus from './src/updateCensus/updateCensus.js'

const CensusController = {
    createCensus,
    createExcelReport,
    getCensusById,
    updateCensus
}

export default CensusController