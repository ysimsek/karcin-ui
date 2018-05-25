"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var AjaxRequest_1 = require("../request/AjaxRequest");
var RemoteEndPoint = /** @class */ (function () {
    function RemoteEndPoint(props, callback) {
        this.__dataMap = [];
        // request
        this.requestStatus = true;
        this.props = {
            url: null,
            idField: 'id',
            method: 'POST'
        };
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.__callback = callback;
        this.call();
    }
    ;
    RemoteEndPoint.prototype.call = function () {
        if (this.props.url !== null && !this.requestStatus) {
            this.requestStatus = false;
            new AjaxRequest_1.default({
                url: this.props.url,
                method: this.props.method
            }, this.callbackReady);
        }
    };
    RemoteEndPoint.prototype.callbackReady = function (response) {
        this.requestStatus = false;
        if (response !== undefined) {
            this.__callback(response);
        }
    };
    RemoteEndPoint.prototype.read = function () {
        if (this.props.url !== undefined) {
            this.reset();
            this.call();
        }
        return this.__dataMap;
    };
    RemoteEndPoint.prototype.reset = function (successCallback) {
        this.__dataMap = [];
        if (successCallback !== undefined) {
            successCallback();
        }
        return this.__dataMap;
    };
    RemoteEndPoint.prototype.create = function (item, successCallback, errorCallback) {
    };
    RemoteEndPoint.prototype.update = function (items, successCallback, errorCallback) {
    };
    return RemoteEndPoint;
}());
exports.default = RemoteEndPoint;
//# sourceMappingURL=RemoteEndPoint.js.map