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
            method: 'GET',
            endPoint: 'remoteEndPoint',
            responseData: ''
        };
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.__callback = callback;
        this.call();
    }
    ;
    RemoteEndPoint.prototype.call = function () {
        var _this = this;
        if (this.props.url !== null && this.requestStatus) {
            this.requestStatus = false;
            var getData = new AjaxRequest_1.default({
                url: this.props.url,
                method: this.props.method
            }, function (response) {
                _this.callbackReady(response);
            });
            getData.call();
        }
    };
    RemoteEndPoint.prototype.callbackReady = function (response) {
        this.requestStatus = false;
        if (this.__callback !== undefined && response !== undefined) {
            this.__dataMap = response[this.props.responseData];
            this.__callback(response[this.props.responseData]);
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
    RemoteEndPoint.prototype.orderSort = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            var getAjax = new AjaxRequest_1.default({
                url: this.props.url,
                type: this.props.method,
                data: { orders: { "property": fieldName, "orderType": 'ASC' } }
            }, function (response) {
                _this.callbackReady(response);
                callback(response[_this.props.responseData], fieldName, 'asc');
            });
            getAjax.call();
        }
        else {
            throw new Error('Field name empty');
        }
    };
    RemoteEndPoint.prototype.orderReverse = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            var getAjax = new AjaxRequest_1.default({
                url: this.props.url,
                type: this.props.method,
                data: { orders: { "property": fieldName, "orderType": 'DESC' } }
            }, function (response) {
                _this.callbackReady(response);
                callback(response[_this.props.responseData], fieldName, 'desc');
            });
            getAjax.call();
        }
        else {
            throw new Error('Field name empty');
        }
    };
    RemoteEndPoint.prototype.filter = function (fieldName, value, callback) {
        var _this = this;
        if (fieldName != undefined && value !== undefined) {
            var getAjax = new AjaxRequest_1.default({
                url: this.props.url,
                method: this.props.method,
                params: { filters: { "property": fieldName, "orderType": 'DESC' } }
            }, function (response) {
                _this.callbackReady(response);
                callback(response[_this.props.responseData], fieldName, 'desc');
            });
            getAjax.call();
        }
        else {
            throw new Error('Field name or value empty');
        }
    };
    return RemoteEndPoint;
}());
exports.default = RemoteEndPoint;
//# sourceMappingURL=RemoteEndPoint.js.map