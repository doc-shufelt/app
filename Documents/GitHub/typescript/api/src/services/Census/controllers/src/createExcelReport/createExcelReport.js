/* imports */
import ExcelJS from 'exceljs'

export default async function createExcelReport(census) {
  const workbook = await initializeCensusWorkbook()
  // initialize the census worksheet 
  var worksheet = workbook.getWorksheet('census')
  // describe the columns for the insurance census
  worksheet.columns = [{
      header: 'First Name',
      key: 'firstName',
      width: 20
    },
    {
      header: 'Last Name',
      key: 'lastName',
      width: 20
    },
    {
      header: 'Employee ID',
      key: 'middleName',
      width: 15
    },
    {
      header: 'Sex (M/F/O)',
      key: 'gender',
      width: 15
    },
    {
      header: 'SSN',
      key: 'ssn',
      width: 15
    },
    {
      header: 'Date of Birth (MM/DD/YYY)',
      key: 'dateOfBirth',
      width: 15
    },
    {
      header: 'Employee Phone Number',
      key: 'phoneNumber',
      width: 20
    },
    {
      header: 'Employee Email',
      key: 'emailAddress',
      width: 30
    },
    {
      header: 'Hourly or Salary',
      key: 'income',
      width: 15
    },
    {
      header: 'Employee Address',
      key: 'addressOne',
      width: 25
    },
    {
      header: 'City',
      key: 'city',
      width: 15
    },
    {
      header: 'State',
      key: 'state',
      width: 15
    },
    {
      header: 'Zip Code',
      key: 'postalCode',
      width: 15
    },
    {
      header: 'Gross Pay (Per Pay Period)',
      key: 'grossPay',
      width: 15
    },
    {
      header: 'Exempt From Medicare (Y/N)',
      key: 'exemptFromMedicare',
      width: 15
    },
    {
      header: 'Exempt From Social Security (Y/N)',
      key: 'exemptFromFica',
      width: 15
    },
    {
      header: 'W-4 Federal Marital Status (M, H, S, MS, E)',
      key: 'federalMaritalStatus',
      width: 15
    },
    {
      header: 'Federal 2020 W-4 Tax Form Used (Y or N)',
      key: 'taxForm',
      width: 15
    },
    {
      header: 'W-4 Federal Dependents (2019 W-4 or earlier)',
      key: 'federalDependents',
      width: 15
    },
    {
      header: 'W-4 Federal Dependents Amount $ (2020 W4 or later)',
      key: 'federalDependentsAmount',
      width: 15
    },
    {
      header: '2020 (or later) W-4 Box 2C: Two Jobs Yes/No',
      key: 'multipleJobs',
      width: 15
    },
    {
      header: 'W-4 State Marital Status (M, S, H)',
      key: 'stateMaritalStatus',
      width: 15
    },
    {
      header: 'State Exemptions Claimed',
      key: 'stateDependents',
      width: 15
    },
    {
      header: 'State Dependents Exemptions Claimed (AL, GA, LA Only)',
      key: 'stateDependentsExemptions',
      width: 15
    },
    {
      header: '*Medical',
      key: 'medicalDeductions',
      width: 15
    },
    {
      header: '*Dental',
      key: 'dentalDeductions',
      width: 15
    },
    {
      header: '*Vision',
      key: 'visionDeductions',
      width: 15
    },
    {
      header: '*Other Deductions (Pre-Tax)',
      key: 'otherPreTaxDeductions',
      width: 15
    },
    {
      header: '*Other Deductions (Post-Tax)',
      key: 'otherPostTaxDeductions',
      width: 15
    },
    {
      header: '401k Contributions ($ amount per pay period)',
      key: 'irs401kDeductions',
      width: 15
    },
    {
      header: 'Roth 401k Contributions ($ amount per pay period)',
      key: 'irsRothIraDeductions',
      width: 15
    },
    {
      header: '*Additional Tax Withholdings',
      key: 'additionalTaxWithholdings',
      width: 15
    },
    {
      header: 'Arizona Tax Withholding Rate (%)',
      key: 'arizonaTaxWithholdingRate',
      width: 15
    },
    {
      header: 'Exemption $ Amount Claimed (MS Only)',
      key: 'exemptionAmountClaimed',
      width: 15
    },
    {
      header: 'Spouse Works (Y/N) (MO Only)',
      key: 'spouseWorks',
      width: 15
    }
  ]
  // loop through and add the data rows 
  for (let employee of census.employees) {
    worksheet.addRow(employee).commit()
  }
  // insert blank rows above the data table
  for (let row = 1; row < 20; row++) {
    worksheet.insertRow(row, null)
    worksheet.getRow(row).height = 17.50
    worksheet.getRow(row).alignment = {
      vertical: 'middle',
      horizontal: 'left'
    }
    if (row < 12) {
      worksheet.mergeCells(`B${row}:C${row}`)
    }
    if (row >= 12 && row < 14) {
      worksheet.mergeCells(`A${row}:D${row}`)
    }
  }

  worksheet.getRow(19).height = 50

  let row = worksheet.getRow(20)
  row.horizontal = 'center',
    row.vertical = 'middle',
    row.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: {
        argb: '8496B0'
      }
    },
    row.font = {
      color: {
        argb: 'FFFFFF'
      }
    }
  row.eachCell((cell) => cell.alignment = {
    wrapText: true,
    vertical: 'middle',
    horizontal: 'center'
  })

  // add the cell labels
  worksheet.getCell('A1').value = 'Company Name:'
  worksheet.getCell('B1').value = census.companyName
  worksheet.getCell('A2').value = 'Address:'
  worksheet.getCell('B2').value = census.companyAddressOne
  worksheet.getCell('A3').value = 'City, State, Zip:'
  worksheet.getCell('B3').value = `${census.companyCity}, ${census.companyState} ${census.companyPostalCode}`
  worksheet.getCell('A4').value = 'Contact Name:'
  worksheet.getCell('B4').value = `${census.contactFirstName} ${census.contactLastName}`
  worksheet.getCell('A5').value = 'Title of Contact'
  worksheet.getCell('B5').value = census.contactJobTitle
  worksheet.getCell('A6').value = 'Phone:'
  worksheet.getCell('B6').value = census.contactPhoneNumber
  worksheet.getCell('A7').value = 'Email:'
  worksheet.getCell('B7').value = census.contactEmailAddress
  worksheet.getCell('A8').value = 'CHAMP Agent Name:'
  worksheet.getCell('B8').value = `${census.agentFirstName} ${census.agentLastName}`
  worksheet.getCell('A9').value = 'Broker Agency:'
  worksheet.getCell('B9').value = 'Bluebird Benefits Group Inc'
  worksheet.getCell('A10').value = 'Agent Cell Phone:'
  worksheet.getCell('B10').value = census.agentPhoneNumber
  worksheet.getCell('A11').value = 'Agent Email:'
  worksheet.getCell('B11').value = census.agentEmailAddress
  worksheet.getCell('A12').value = 'Please Choose from the following Pay Cycle options'
  worksheet.getCell('A13').value = 'Please choose what type of Census is being used'
  worksheet.getCell('A14').value = '*For Additional Information about request or required information click the red top right corner of certain columns'
  worksheet.getCell('A16').value = '*Please note IF cell turns:'

  for (let row = 21; row <= worksheet.rowCount; row++) {
    worksheet.getRow(row).height = 17.50
    worksheet.getRow(row).alignment = {
      vertical: 'middle',
      horizontal: 'left'
    }
  }
  let file = await workbook.xlsx.writeFile('census.xlsx')
  return file
}

/**
 * 
 * @param { string } censusType enum [insurance, championFull, championShort]
 * @returns 
 */
async function initializeCensusWorkbook() {
  var workbook = new ExcelJS.Workbook()
  workbook.creator = 'Bluebird Benefits Group Inc.'
  workbook.created = new Date()
  workbook.properties.date1904 = true
  workbook.calcProperties.fullCalcOnLoad = true
  workbook.addWorksheet('census')
  return workbook
}