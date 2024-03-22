/**
 *
 */
export default class RequestValidationError extends Error {
    constructor(error) {
        super(error);
        this.name = error.name;
        this.message = error.message;
        this.stack = error.stack;
        this.statusCode = 400;
        return this;
    }
}
