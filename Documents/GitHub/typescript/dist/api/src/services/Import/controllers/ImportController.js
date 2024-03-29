/* imports */
import executeImport from './src/executeImport/executeImport.js';
import importCompany from './src/importCompany/importCompany.js';
import importDirectory from './src/importDirectory/importDirectory.js';
import importEmployment from './src/importEmployment/importEmployment.js';
import importIndividual from './src/importIndividual/importIndividual.js';
import importPayment from './src/importPayment/importPayment.js';
import importStatement from './src/importStatement/importStatement.js';
import mergeEmployeeData from './src/mergeEmployeeData/mergeEmployeeData.js';
import processStatement from './src/processStatement/processStatement.js';
import editImportTracker from './src/editImportTracker/editImportTracker.js';
const ImportController = {
    executeImport,
    importCompany,
    importDirectory,
    importEmployment,
    importIndividual,
    importPayment,
    importStatement,
    mergeEmployeeData,
    processStatement,
    editImportTracker
};
export default ImportController;
