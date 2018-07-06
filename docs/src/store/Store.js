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
            originUrl: null,
            endPoint: null,
            responseData: null,
            processor: null,
            type: 'GET',
            method: null,
        };
        this.__updated = false;
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.__callback = callback;
        this.__component = selfComponent;
        this.endPoint();
    }
    /**
     * Endpoint control
     */
    Store.prototype.endPoint = function () {
        var _this = this;
        if (this.props.processor !== undefined || this.props.originUrl !== undefined) {
            // get endpoint
            this.props.endPoint = new RemoteEndPoint_1.default(this.props, function (response) {
                _this.endPointCallback(response);
            });
        }
        else {
            // old data
            this.__oldData = this.props.data.slice(0);
            // get endpoint
            this.props.endPoint = new LocaleEndPoint_1.default(this.props, function (response) {
                _this.endPointCallback(response);
            });
        }
    };
    /**
     * Endpoint callback
     * @param response
     */
    Store.prototype.endPointCallback = function (response) {
        if (response !== undefined) {
            this.props.data = response[this.props.responseData];
            this.updateProps(response);
        }
        if (this.__callback !== undefined) {
            this.__callback(response);
        }
    };
    Store.prototype.updateProps = function (response) {
        this.props.totalCount = (response.totalCount !== undefined) ? response.totalCount : 100;
    };
    /**
     * Store read
     * @param callback
     */
    Store.prototype.read = function (callback) {
        this.props.endPoint.read(this.props, function (data) {
            console.log(data);
        });
        this.__callback(this.props.data);
        if (callback !== undefined)
            callback(this.props.data);
    };
    /**
     * Create
     * @param item
     * @param successCallback
     * @param errorCallback
     */
    Store.prototype.create = function (items, successCallback, errorCallback) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.create(items, successCallback, errorCallback);
            this.__callback(this.__dataMap);
        }
    };
    /**
     * Update
     * @param items
     * @param successCallback
     * @param errorCallback
     */
    Store.prototype.update = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.update(items, callback);
            this.__callback(this.__dataMap);
        }
    };
    /**
     * Delete
     * @param items
     * @param successCallback
     * @param errorCallback
     */
    Store.prototype.delete = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.delete(items, callback);
            this.__callback(this.__dataMap);
        }
    };
    /**
     * Reset
     * @param successCallback
     */
    Store.prototype.reset = function (callback) {
        this.__callback(this.__dataMap);
        return this.props.endPoint.reset(callback);
    };
    /**
     * Order sort data
     * @param fieldName
     * @param callback
     */
    Store.prototype.orderSort = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            this.props.endPoint.orderSort(fieldName, function (data) {
                _this.orderCallback(data, 'ASC', fieldName, callback);
            });
        }
        else {
            throw new Error('Field name empty');
        }
    };
    /**
     * Order reverse data
     * @param fieldName
     * @param callback
     */
    Store.prototype.orderReverse = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            this.props.endPoint.orderReverse(fieldName, function (data) {
                _this.orderCallback(data, 'DESC', fieldName, callback);
            });
        }
        else {
            throw new Error('Field name empty');
        }
    };
    /**
     * Sort get old data
     * @param fieldName
     * @param callback
     */
    Store.prototype.oldDataSort = function (fieldName, callback) {
        var _this = this;
        this.props.endPoint.oldDataSort(function (data) {
            _this.orderCallback(data, '', fieldName, callback);
            if (callback !== undefined) {
                callback(data);
            }
        });
    };
    /**
     * Order callback data
     * @param data
     * @param order
     * @param fieldName
     * @param callback
     */
    Store.prototype.orderCallback = function (data, order, fieldName, callback) {
        if (data !== undefined && data.length > 0) {
            this.props.data = data;
            this.__order = { order: order, value: fieldName };
            this.__dataMap = data;
            this.__callback();
            if (callback !== undefined)
                callback(data);
        }
    };
    /**
     * filters
     * @param fieldName
     * @param value
     * @param callback
     */
    Store.prototype.filter = function (fieldName, value, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            this.props.endPoint.filter(fieldName, value, function (data) {
                _this.props.data = data;
            });
        }
        else {
            throw new Error('Field name empty');
        }
    };
    /**
     * data page
     * @param page
     * @param pageShow
     */
    Store.prototype.pagination = function (page, pageShow) {
        if (page !== undefined) {
            var pageData = {};
            pageData['start'] = pageShow * (page - 1);
            pageData['limit'] = pageShow;
            this.props.endPoint.paging(pageData, function () {
                debugger;
            });
        }
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map