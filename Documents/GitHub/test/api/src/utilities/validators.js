// TO-DO: refactor to accept options specific to the property rather than hard-coding parameters
const Validators = {
    minCharacters( value ) {
        if ( ! this.isString( value ) ) {
            return false
        }
        if ( value.length < 2 ) {
            return false
        }
        return true
    },
    maxCharacters( value ) {
        if ( ! this.isString( value ) ) {
            return false
        }
        if ( value.length > 25 ) {
            return false
        }
        return true
    },
    specialCharacters( value ) {
        if ( ! this.isString( value ) ) {
            return false
        }
    },
    isString( value ) {
        if ( typeof value != 'string' ) {
            return false
        }
        return true
    },
    isNumber( value ) {
        if ( typeof value === 'number' ) {
            return true
        }
        return false
    },
    isArray( value ) {
        if ( Object.isArray( value ) ) {
            return true
        }
        return false
    },
    isBoolean( value ) {

    }
}

export default Validators