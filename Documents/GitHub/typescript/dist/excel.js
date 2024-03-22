"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function makeInsuranceCensusFile(workbook, census) {
    return __awaiter(this, void 0, void 0, function* () {
        // initialize the census worksheet 
        var worksheet = workbook.getWorksheet('census');
        // describe the columns for the insurance census
        worksheet.columns = [
            { header: 'Last Name', key: 'lastName', width: 17.50 },
            { header: 'First', key: 'firstName', width: 12.5 },
            { header: 'MI', key: 'middleName', width: 5 },
            { header: 'Gender', key: 'gender', width: 10 },
            { header: 'Employee DOB', key: 'dateOfBirth', width: 12 },
            { header: 'Dependent DOB', key: 'dependentDateOfBirth', width: 15 },
            { header: 'DOH', key: 'startDate', width: 12 },
            { header: 'Job Title', key: 'title', width: 23 },
            { header: 'Hourly or Salary', key: 'income', width: 15 },
            { header: 'Street Address 1', key: 'addressOne', width: 25 },
            { header: 'Street Address 2', key: 'addressTwo', width: 15 },
            { header: 'City', key: 'city', width: 17.50 },
            { header: 'State', key: 'state', width: 5 },
            { header: 'Zip', key: 'postalCode', width: 10 },
            { header: 'Employee email', key: 'email', width: 35 },
            { header: 'Phone', key: 'phone', width: 25 }
        ];
        // loop through and add the rows 
        for (let employee of census.employees) {
            worksheet.addRow(employee).commit();
        }
        // insert two blank rows above the employee table
        worksheet.insertRow(1, null);
        worksheet.insertRow(2, null);
        // merge cells
        worksheet.mergeCells('A1:B1');
        worksheet.mergeCells('C1:G1');
        worksheet.mergeCells('A2:B2');
        worksheet.mergeCells('C2:G2');
        // populate the business name and address
        var cell_a1 = worksheet.getCell('A1');
        cell_a1.value = 'Business Name & Address';
        var cell_b1 = worksheet.getCell('C1');
        cell_b1.value = census.businessAddress;
        // populate the tax id
        var cell_a2 = worksheet.getCell('A2');
        cell_a2.value = 'Tax ID';
        var cell_b2 = worksheet.getCell('C2');
        cell_b2.value = census.taxId;
        let file = yield workbook.xlsx.writeFile('census.xlsx');
        return file;
    });
}
