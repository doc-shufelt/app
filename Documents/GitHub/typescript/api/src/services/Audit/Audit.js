"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../Audit/types/enums");
var Audit = /** @class */ (function () {
    function Audit(originalValue, originalSource, pastValues, pastSources, transformations, validations, flags, flagged, modified) {
        var _this = this;
        this.pastValues = [];
        this.pastSources = [];
        this.transformations = [];
        this.validations = [];
        this.flags = [];
        this.flagged = false;
        this.created = new Date().toISOString();
        this.getOriginalValue = function () { return _this.originalValue; };
        this.getOriginalSource = function () { return _this.originalSource; };
        this.getFlags = function () { return _this.flags; };
        this.getPastValues = function () { return _this.pastValues; };
        this.originalValue = originalValue;
        this.originalSource = originalSource || enums_1.Source.Finch;
        this.pastValues = pastValues || [];
        this.pastSources = pastSources || [];
        this.transformations = transformations || [];
        this.validations = validations || [];
        this.flags = flags || [];
        this.flagged = flagged || false;
        this.created = new Date().toISOString();
        this.modified = modified || new Date().toISOString();
    }
    // setter and getter for originalValue
    Audit.prototype.setOriginalValue = function (value) {
        this.setOriginalValue = value;
    };
    // setter and getter for originalSource
    Audit.prototype.setOriginalSource = function (source) {
        this.originalSource = source;
    };
    // setter and getter for flag
    Audit.prototype.addFlag = function (flag) {
        this.flags.push(flag);
    };
    // setter and getter for pastValues
    Audit.prototype.addPastValue = function (value) {
        this.pastValues.push(value);
    };
    return Audit;
}());
exports.default = Audit;
var test = new Audit('id');
console.log(test);
