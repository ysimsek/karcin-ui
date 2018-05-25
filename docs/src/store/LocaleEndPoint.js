"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var LocaleEndPoint = /** @class */ (function () {
    function LocaleEndPoint(props, callback) {
        this.__dataMap = [];
        this.props = {
            data: [],
            idField: 'id',
        };
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.__callback = callback;
        this.read();
    }
    LocaleEndPoint.prototype.read = function () {
        var _this = this;
        if (this.props.data !== undefined && this.props.data.length > 0) {
            this.reset();
            this.props.data.forEach(function (value) {
                _this.create(value);
            });
        }
        this.__callback(this.__dataMap);
        return this.__dataMap;
    };
    LocaleEndPoint.prototype.reset = function (successCallback) {
        this.__dataMap = [];
        if (successCallback !== undefined) {
            successCallback();
        }
        return this.__dataMap;
    };
    LocaleEndPoint.prototype.create = function (item, successCallback, errorCallback) {
        if (item !== undefined) {
            this.__dataMap.push(item);
            var result = {
                data: this.__dataMap,
                totalCount: this.__dataMap.length
            };
            if (successCallback !== undefined) {
                successCallback(result);
            }
        }
        else {
            if (errorCallback !== undefined) {
                errorCallback('item not undefined');
            }
        }
        return this.__dataMap;
    };
    LocaleEndPoint.prototype.update = function (items, successCallback, errorCallback) {
        if (items !== undefined && items.length > 0) {
            this.reset();
            this.__dataMap = items;
            var result = {
                data: this.__dataMap,
                totalCount: this.__dataMap.length
            };
            if (successCallback !== undefined) {
                successCallback(result);
            }
        }
        else {
            if (errorCallback !== undefined) {
                errorCallback('item not undefined');
            }
        }
        return this.__dataMap;
    };
    return LocaleEndPoint;
}());
exports.default = LocaleEndPoint;
//# sourceMappingURL=LocaleEndPoint.js.map