"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var moment = require('moment');
var TypeFormating = /** @class */ (function () {
    function TypeFormating(props, callback) {
        this.props = {
            data: null,
            type: null,
            format: null
        };
        this.props = Applications_1.default.mergeObject(this.props, props);
        if (this.props.data && this.props.type && callback) {
            callback(this.typeCall());
        }
    }
    TypeFormating.prototype.typeCall = function () {
        var returnValue;
        switch (this.props.type) {
            case 'int':
            case 'integer':
                returnValue = parseInt(this.props.data);
                break;
            case 'boolean':
                returnValue = this.props.data.toString();
                break;
            case 'date':
                var format = void 0;
                if (this.props.data.format) {
                    format = this.props.format;
                }
                else {
                    format = "DD.MM.YYYY";
                }
                returnValue = moment(this.props.data).format(format);
                break;
            case 'dateTime':
                var formatTime = void 0;
                if (this.props.data.format) {
                    formatTime = this.props.format;
                }
                else {
                    formatTime = "DD.MM.YYYY HH:mm:ss";
                }
                returnValue = moment(this.props.data).format(formatTime);
                break;
            case 'time':
                if (this.props.data.format) {
                    formatTime = this.props.format;
                }
                else {
                    formatTime = "HH:mm:ss";
                }
                if (typeof this.props.data === 'object') {
                    returnValue = moment(this.props.data).format(formatTime);
                }
                else {
                    returnValue = this.props.data;
                }
                break;
            default:
                returnValue = this.props.data.toString();
        }
        return returnValue;
    };
    return TypeFormating;
}());
exports.default = TypeFormating;
//# sourceMappingURL=TypeFormating.js.map