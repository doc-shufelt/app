/**
 * Employer Object
 */
export default function Employer( employer ) {
    const Employer = {}
    Object.defineProperties( Employer, {
        legalName: {
            value: ( employer.hasOwnProperty( 'legal_name' ) && employer.legal_name != null ) ? employer.legal_name : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        phoneNumber: {
            value: ( employer.hasOwnProperty( 'primary_phone_number' ) && employer.primary_phone_number != null ) ? employer.primary_phone_number : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        emailAddress: {
            value: ( employer.hasOwnProperty( 'primary_email' ) && employer.primary_emails != null ) ? employer.primary_email : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        ein: {
            value: ( employer.hasOwnProperty( 'ein' ) && employer.ein != null ) ? employer.ein : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        entityType: {
            value: ( employer.hasOwnProperty( 'entity.type' ) && employer.entity.type != null ) ? employer.entity.type : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        entitySubtype: {
            value: ( employer.hasOwnProperty( 'entity.subtype' ) && employer.entity.subtype != null ) ? employer.entity.subtype : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        addressOne: {
            value: ( employer.hasOwnProperty( 'locations' ) && employer.locations[0].line1 != null ) ? employer.locations[0].line1 : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        addressTwo: {
            value: ( employer.hasOwnProperty( 'locations' ) && employer.locations[0].line2 != null ) ? employer.locations[0].line2 : null,
            writable: true,
            configurable: true,
            enumerable: true
        },
        city: {
            value: ( employer.hasOwnProperty( 'locations' ) && employer.locations[0].city != null ) ? employer.locations[0].city : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        state: {
            value: ( employer.hasOwnProperty( 'locations' ) && employer.locations[0].state != null ) ? employer.locations[0].state : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        postalCode: {
            value: ( employer.hasOwnProperty( 'locations' ) && employer.locations[0].postal_code != null ) ? employer.locations[0].postal_code : null,
            writable: true,
            configurable: false,
            enumerable: true
        },
        isActive: {
            value: 'true',
            writable: true,
            configurable: false,
            enumerable: false
        },
        created: {
            value: ( employer.hasOwnProperty( 'created' ) && employer.created != null ) ? employer.created : new Date().toISOString(),
            writable: false,
            configurable: false,
            enumerable: true
        },
        modified: {
            value: ( employer.hasOwnProperty( 'modified' ) && employer.created != null ) ? employer.modified : new Date().toISOString(),
            writable: true,
            configurable: false,
            enumerable: true
        }
    } ) 
    return Employer
}