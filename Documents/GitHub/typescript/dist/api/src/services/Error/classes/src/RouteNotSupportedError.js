/**
 *
 */
export default class RouteNotSupportedError extends Error {
    constructor(error) {
        super(error);
        this.name = error.name;
        this.message = error.message;
        this.stack = error.stack;
        this.statusCode = 404;
        return this;
    }
}
