import Employee from '../../../../Employee/object/Employee.js'
/**
 * @description A controller that takes all the employee data from finch and merges it into a canonical employee object
 * @param { array } directory An array containing the data returned from /company/directory
 * @param { array } individuals An array containing the data returned from /company/individual
 * @param { array} employments An array containing the data returned from /company/employment
 * @param { array } statements An array containing the data returned from /company/payment and /pay-statement
 * @param { string } employerId A string representation of the employer id
 * @returns { Promise<array> }
 */
export default async function mergeEmployeeData(directory, individuals, employments, statements, employerId) {
  var employeeList = []
  // loop through each employee returned from /company/individual
  for (let individual of individuals) {
    // match the record in directory
    let record = directory.find((element) => {
      return element.id === individual.id
    })
    // match the record in employment
    let employment = employments.find((element) => {
      return element.id === individual.id
    })
    // match the record in statements
    let statement = statements.find((element) => {
      return element.id === individual.id
    })
    const profile = {
      ...record,
      ...individual,
      ...employment,
      ...statement
    }
    const Profile = await Employee(employerId, profile)
    employeeList.push(Profile)
  }
  return employeeList
}