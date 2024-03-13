/**
 * Employee Object
 */
import Validators from '../../../utilities/validators.js'

/**
 * @description
 * @param { object } employee 
 * @returns { Promise<object> }
 */
export default function Employee( employee ) {
    const Employee ={}
    Object.defineProperties( Employee, {
        firstName: {
            value: ( employee.hasOwnProperty( 'firstName' ) && employee.firstName != null ) ? employee.firstName : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        middleName: {
            value: ( employee.hasOwnProperty( 'middleName' ) && employee.middleName != null ) ? employee.middleName : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        lastName: {
            value: ( employee.hasOwnProperty( 'lastName' ) && employee.lastName != null ) ? employee.lastName : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        emailAddress: {
            value: ( employee.hasOwnProperty( 'emailAddress' ) && employee.emailAddress != null ) ? employee.emailAddress : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        phoneNumber: {
            value: ( employee.hasOwnProperty( 'phoneNumber' ) && employee.phoneNumber != null ) ? employee.phoneNumber : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        gender: {
            value: ( employee.hasOwnProperty( 'gender' ) && employee.gender != null ) ? employee.gender : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        ssn: {
            value: ( employee.hasOwnProperty( 'ssn' ) && employee.ssn != null ) ? employee.ssn : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        dateOfBirth: {
            value: ( employee.hasOwnProperty( 'dateOfBirth' ) && employee.dateOfBirth != null ) ? employee.dateOfBirth : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        addressOne: {
            value: ( employee.hasOwnProperty( 'addressOne' ) && employee.addressOne != null ) ? employee.addressOne : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        addressTwo: {
            value: ( employee.hasOwnProperty( 'addressTwo' ) && employee.addressTwo != null ) ? employee.addressTwo : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        city: {
            value: ( employee.hasOwnProperty( 'city' ) && employee.city != null ) ? employee.city : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        state: {
            value: ( employee.hasOwnProperty( 'state' ) && employee.state != null ) ? employee.state : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        postalCode: {
            value: ( employee.hasOwnProperty( 'postalCode' ) && employee.postalCode != null ) ? employee.postalCode : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        jobTitle: {
            value: ( employee.hasOwnProperty( 'jobTitle' ) && employee.jobTitle != null ) ? employee.jobTitle : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        department: {
            value: ( employee.hasOwnProperty( 'department' ) && employee.department != null ) ? employee.department : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        active: {
            value: ( employee.hasOwnProperty( 'active' ) && employee.active != null ) ? employee.active : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        finchId: {
            value: individual.body.id ?? null,
            writable: false,
            enumerable: true,
            configurable: false
        },
        employerId: {
            value: ( employee.hasOwnProperty( 'employerId' ) && employee.employerId != null ) ? employee.employerId : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        employmentType: {
            value: ( employee.hasOwnProperty( 'employmentType' ) && employee.employmentType != null ) ? employee.employmentType : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        employmentSubtype: {
            value: ( employee.hasOwnProperty( 'employmentSubtype' ) && employee.employmentSubtype != null ) ? employee.employmentSubtype : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        startDate: {
            value: ( employee.hasOwnProperty( 'startDate' ) && employee.startDate != null ) ? employee.startDate : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        endDate: { 
            value: ( employee.hasOwnProperty( 'endDate' ) && employee.endDate != null ) ? employee.endDate : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        classCode: {
            value: ( employee.hasOwnProperty( 'classCode' ) && employee.classCode != null ) ? employee.classCode : null,
            writable: true,
            configurable: false,
            enumerable: false
        },
        income: {
            value: ( employee.hasOwnProperty( 'income' ) && employee.income != null ) ? employee.income : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        incomeUnit: {
            value: ( employee.hasOwnProperty( 'incomeUnit' ) && employee.incomeUnit != null ) ? employee.incomeUnit : null,
            writable: true,
            enumerable: true,
            configurable: false
        },
        created: {
            value: ( employee.hasOwnProperty( 'created' ) && employee.created != null ) ? employee.created : new Date().toISOString(),
            writable: false,
            enumerable: true,
            configurable: false
        },
        modified: {
            value: ( employee.hasOwnProperty( 'modified' ) && employee.modified != null ) ? employee.modified : new Date().toISOString(),
            writable: true,
            enumerable: true,
            configurable: false
        }
    } )
    return Employee
}