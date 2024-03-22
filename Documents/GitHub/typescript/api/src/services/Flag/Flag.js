"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Flag = /** @class */ (function () {
    function Flag(code, description, status, overridden, overriddenBy, created, modified) {
        if (overridden === void 0) { overridden = false; }
        this.code = code;
        this.description = description;
    }
    return Flag;
}());
exports.default = Flag;
