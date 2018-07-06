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
        _this.__filters = [];
        _this.__orders = [];
        _this.__paging = { start: 0, limit: 0 };
        // request
        _this.requestStatus = true;
        _this.props = {
            idField: 'id',
            processor: null,
            type: null,
            url: null,
            method: 'findAll',
            endPoint: 'remoteEndPoint',
            responseData: 'data',
            data: []
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
            var data = {};
            // filters object
            if (this.__filters.length > 0) {
                data['filters'] = this.__filters;
            }
            // orders object
            if (this.__orders.length > 0) {
                data['orders'] = this.__orders;
            }
            // pagination object
            for (var item in this.__paging) {
                data[item] = this.__paging[item];
            }
            this.props.data = [];
            this.props.data.push(data);
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
        this.requestStatus = true;
        if (response !== undefined) {
            this.__dataMap = response[this.props.responseData];
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
        this.__dataMap = [];
        this.__orders = [];
        this.__filters = [];
        return this.response(callback);
    };
    RemoteEndPoint.prototype.create = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.requestStatus = false;
            this.props.method = "add";
            this.props.data = items;
            this.call(callback);
        }
    };
    RemoteEndPoint.prototype.update = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.requestStatus = false;
            this.props.method = "update";
            this.props.data = items;
            this.call(callback);
        }
    };
    RemoteEndPoint.prototype.delete = function (items, callback) {
        if (items !== undefined && items.length > 0) {
            this.requestStatus = false;
            this.props.method = "deleteById";
            for (var item in items) {
                this.props.data.push(item);
            }
            this.call(callback);
        }
    };
    /**
     * order sort
     * @param fieldName
     * @param callback
     */
    RemoteEndPoint.prototype.orderSort = function (fieldName, callback) {
        var _this = this;
        if (fieldName !== undefined) {
            this.props.method = "findByFilters";
            if (this.__orders.length > 0) {
                var control_1 = false;
                this.__orders.forEach(function (value, index) {
                    if (value['property'] === fieldName) {
                        control_1 = true;
                        value['orderType'] = 'ASC';
                    }
                    _this.__orders[index] = value;
                });
                if (!control_1) {
                    this.__orders.push({ "property": fieldName, "orderType": 'ASC' });
                }
            }
            else {
                this.__orders.push({ "property": fieldName, "orderType": 'ASC' });
            }
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
        var _this = this;
        if (fieldName !== undefined) {
            this.props.method = "findByFilters";
            if (this.__orders.length > 0) {
                var control_2 = false;
                this.__orders.forEach(function (value, index) {
                    if (value['property'] === fieldName) {
                        control_2 = true;
                        value['orderType'] = 'DESC';
                    }
                    _this.__orders[index] = value;
                });
                if (!control_2) {
                    this.__orders.push({ "property": fieldName, "orderType": 'DESC' });
                }
            }
            else {
                this.__orders.push({ "property": fieldName, "orderType": 'DESC' });
            }
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
        this.reset();
        this.read(callback);
    };
    /**
     * filters
     * @param fieldName
     * @param value
     * @param callback
     */
    RemoteEndPoint.prototype.filter = function (fieldName, value, operator, callback) {
        if (fieldName !== undefined && value !== undefined && operator !== undefined) {
            this.props.method = "findByFilters";
            if (this.__filters.length > 0) {
                var control_3 = false;
                this.__filters.forEach(function (value) {
                    if (value['property'] === fieldName && value['value'] === value && value['operator'] === operator) {
                        control_3 = true;
                    }
                });
                if (!control_3) {
                    this.__filters.push({ "property": fieldName, "value": value, "operator": operator });
                }
            }
            else {
                this.__filters.push({ "property": fieldName, "value": value, "operator": operator });
            }
            this.call(callback);
        }
        else {
            throw new Error('Field name empty');
        }
    };
    RemoteEndPoint.prototype.paging = function (pageData, callback) {
        if (pageData !== undefined) {
            for (var item in pageData) {
                this.__paging[item] = pageData[item];
            }
            this.call(callback);
        }
    };
    return RemoteEndPoint;
}(BaseClass_1.default));
exports.default = RemoteEndPoint;
//# sourceMappingURL=RemoteEndPoint.js.map