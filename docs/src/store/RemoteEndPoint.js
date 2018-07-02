"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var AjaxRequest_1 = require("../request/AjaxRequest");
var BaseClass_1 = require("../applications/BaseClass");
var RemoteEndPoint = /** @class */ (function (_super) {
    __extends(RemoteEndPoint, _super);
    function RemoteEndPoint(props, callback) {
        var _this = _super.call(this, props) || this;
        _this.__dataMap = [];
        // request
        _this.requestStatus = true;
        _this.props = {
            idField: 'id',
            processor: null,
            type: null,
            url: null,
            method: 'findAll',
            endPoint: 'remoteEndPoint',
            responseData: '',
            data: null
        };
        _this.props = Applications_1.default.mergeObject(_this.props, props);
        _this.__callback = callback;
        _this.call();
        return _this;
    }
    ;
    /**
     * Remote ajax call
     * @param callback
     */
    RemoteEndPoint.prototype.call = function (callback) {
        var _this = this;
        if (this.props.processor !== undefined && this.requestStatus) {
            this.requestStatus = false;
            var getData = new AjaxRequest_1.default(this.props, function (response) {
                _this.callbackReady(response, callback);
            });
            getData.call();
        }
    };
    /**
     * General callback ready
     * @param response
     */
    RemoteEndPoint.prototype.callbackReady = function (response, callback) {
        this.requestStatus = false;
        if (response !== undefined) {
            return this.response(callback, response);
        }
    };
    /**
     * Data read
     * @param callback
     */
    RemoteEndPoint.prototype.read = function (callback) {
        if (this.props.url !== undefined) {
            this.call(callback);
        }
    };
    /**
     * reset
     * @param successCallback
     */
    RemoteEndPoint.prototype.reset = function (callback) {
        this.props.data = [];
        return this.response(callback);
    };
    RemoteEndPoint.prototype.create = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.requestStatus = false;
            this.props.data = items;
            this.call(callback);
        }
    };
    RemoteEndPoint.prototype.update = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.requestStatus = false;
            this.props.data = items;
            this.call(callback);
        }
    };
    RemoteEndPoint.prototype.delete = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.requestStatus = false;
            this.props.data = items;
            this.call(callback);
        }
    };
    /**
     * order sort
     * @param fieldName
     * @param callback
     */
    RemoteEndPoint.prototype.orderSort = function (fieldName, callback) {
        if (fieldName !== undefined) {
            this.props.data = { orders: { "property": fieldName, "orderType": 'ASC' } };
            this.call(callback);
        }
        else {
            throw new Error('Field name empty');
        }
    };
    /**
     * order reverse
     * @param fieldName
     * @param callback
     */
    RemoteEndPoint.prototype.orderReverse = function (fieldName, callback) {
        if (fieldName !== undefined) {
            this.props.data = { orders: { "property": fieldName, "orderType": 'DESC' } };
            this.call(callback);
        }
        else {
            throw new Error('Field name empty');
        }
    };
    /**
     * old data
     * @param callback
     */
    RemoteEndPoint.prototype.oldDataSort = function (callback) {
        this.read(callback);
    };
    /**
     * filters
     * @param fieldName
     * @param value
     * @param callback
     */
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
}(BaseClass_1.default));
exports.default = RemoteEndPoint;
//# sourceMappingURL=RemoteEndPoint.js.map