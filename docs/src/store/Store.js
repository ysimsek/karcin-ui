"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var LocaleEndPoint_1 = require("../store/LocaleEndPoint");
var RemoteEndPoint_1 = require("../store/RemoteEndPoint");
var Store = /** @class */ (function () {
    function Store(props, selfComponent, callback, updated) {
        this.props = {
            idField: "oid",
            data: [],
            oldData: [],
            url: "",
            endPoint: null,
            order: null,
            responseData: '',
        };
        this.__updated = false;
        this.props = Applications_1.default.mergeObject(this.props, props);
        // old data
        this.props.oldData = this.props.data.slice(0);
        this.__callback = callback;
        this.__component = selfComponent;
        this.endPoint();
    }
    Store.prototype.endPoint = function () {
        var _this = this;
        if (this.props.data.length > 0) {
            this.props.endPoint = new LocaleEndPoint_1.default({
                data: this.props.data
            }, function (response) {
                _this.endPointCallback(response);
            });
        }
        else if (this.props.url !== undefined) {
            this.props.endPoint = new RemoteEndPoint_1.default({
                url: this.props.url,
                responseData: this.props.responseData
            }, function (response) {
                _this.endPointCallback(response);
            });
        }
    };
    Store.prototype.ready = function () {
        this.props.data = this.props.oldData.slice(0);
    };
    Store.prototype.endPointCallback = function (response) {
        if (response !== undefined) {
            this.props.data = response;
            //this.__component.forceUpdate();
        }
        if (this.__callback !== undefined) {
            this.__callback(response);
        }
    };
    Store.prototype.create = function (item, successCallback, errorCallback) {
        if (item !== undefined) {
            return this.props.endPoint.create(item, successCallback, errorCallback);
        }
    };
    Store.prototype.reset = function (successCallback) {
        return this.props.endPoint.reset(successCallback);
    };
    Store.prototype.update = function (items, successCallback, errorCallback) {
        if (items !== undefined && items.length > 0) {
            return this.props.endPoint.update(items, successCallback, errorCallback);
        }
    };
    Store.prototype.orderSort = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            this.props.endPoint.orderSort(fieldName, function (data, fieldName, order) {
                _this.orderCallback(data, order, fieldName);
                callback(data, order, fieldName);
            });
        }
        else {
            throw new Error('Field name empty');
        }
    };
    Store.prototype.orderReverse = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            this.props.endPoint.orderReverse(fieldName, function (data, fieldName, order) {
                _this.orderCallback(data, order, fieldName);
                callback(data, order, fieldName);
            });
        }
        else {
            throw new Error('Field name empty');
        }
    };
    Store.prototype.orderCallback = function (data, order, fieldName) {
        if (data !== undefined && data.length > 0) {
            this.props.data = data;
            this.props.order = { order: order, value: fieldName };
            return this.props;
        }
    };
    Store.prototype.filter = function (fieldName, value) {
        if (fieldName !== undefined) {
            this.props.data = this.props.endPoint.filter(fieldName, value);
        }
        else {
            throw new Error('Field name empty');
        }
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map