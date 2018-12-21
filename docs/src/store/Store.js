"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var LocaleEndPoint_1 = require("./LocaleEndPoint");
var RemoteEndPoint_1 = require("./RemoteEndPoint");
var Store = /** @class */ (function () {
    function Store(props, selfComponent, callback, updated) {
        this.props = {
            idField: "id",
            data: [],
            param: [],
            originUrl: null,
            endPoint: null,
            responseData: null,
            pageTotalData: null,
            processor: null,
            type: 'POST',
            filters: [],
            orders: [],
            /**
             * methods
             */
            method: 'findByFilters',
            readMethod: 'findByFilters',
            createMethod: 'add',
            updateMethod: 'update',
            deleteMethod: 'deleteById',
            totalCount: 0,
            pageData: {},
        };
        this.__updated = false;
        this.__page = { page: 0, pageShow: 0 };
        this.__endPoint = null;
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.__callback = callback;
        this.__component = selfComponent;
    }
    /**
     * component load run
     */
    Store.prototype.storeRead = function () {
        this.endPoint();
    };
    /**
     * Endpoint control
     */
    Store.prototype.endPoint = function () {
        var _this = this;
        if (this.props.endPoint !== null) {
            this.props.endPoint = null;
        }
        var sendProps = JSON.parse(JSON.stringify(this.props));
        if (this.props.processor !== undefined || this.props.originUrl !== undefined) {
            // get endpoint
            this.props.endPoint = new RemoteEndPoint_1.default(sendProps, function (response) {
                _this.endPointCallback(response);
            });
        }
        else {
            // old data
            this.__oldData = this.props.data.slice(0);
            // get endpoint
            this.props.endPoint = new LocaleEndPoint_1.default(sendProps, function (response) {
                _this.endPointCallback(response);
            });
        }
        this.__endPoint = this.props.endPoint.props.endPointName;
    };
    /**
     * Endpoint callback
     * @param response
     */
    Store.prototype.endPointCallback = function (response) {
        if (response !== undefined) {
            this.props.data = response.data !== undefined ? response.data : [];
            this.props.totalCount = response.totalCount !== undefined ? response.totalCount : 0;
        }
        if (this.__callback !== undefined) {
            this.__callback(response);
        }
    };
    /**
     * Store read
     * @param callback
     */
    Store.prototype.read = function (callback) {
        var _this = this;
        this.props.endPoint.read(this.props, function (data) {
            _this.endPointCallback(data);
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
    Store.prototype.create = function (items, callback) {
        if (items !== undefined) {
            this.props.endPoint.create(items, callback);
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
        if (items !== undefined) {
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
        if (items !== undefined) {
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
    Store.prototype.filter = function (fieldName, value, operator, callback) {
        if (fieldName !== undefined) {
            this.props.endPoint.filter(fieldName, value, operator);
        }
        else {
            throw new Error('Field name empty');
        }
    };
    /**
     * Set Filters
     * @param filters
     */
    Store.prototype.setFilters = function (filters) {
        if (filters && filters.length > 0) {
            this.props.endPoint.setFilters(filters);
        }
    };
    /**
     * Reset Filters
     */
    Store.prototype.resetFilters = function () {
        this.props.endPoint.resetFilters();
    };
    /**
     * data page
     * @param page
     * @param pageShow
     */
    Store.prototype.pagination = function (pageShow, page) {
        var pages = (page !== undefined) ? page : 1;
        var pagesShow = (pageShow !== undefined) ? pageShow : this.__page.pageShow;
        if (pages !== undefined && pageShow !== undefined && pageShow > 0) {
            this.props.pageData['start'] = pagesShow * (pages - 1);
            this.props.pageData['limit'] = pagesShow;
            if (this.props.endPoint !== undefined) {
                this.props.endPoint.paging(this.props.pageData);
            }
        }
    };
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map