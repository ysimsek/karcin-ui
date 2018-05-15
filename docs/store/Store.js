"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var Store = /** @class */ (function () {
    function Store(props) {
        this.props = {
            idField: "oid",
            autoLoad: false,
            importer: function (response) {
                return response;
            },
            result: {
                data: [],
                totalCount: 0
            },
            endPoint: null
        };
        this.__dataMap = [];
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.endPoint();
    }
    Store.prototype.endPoint = function () {
        if (this.props.endPoint !== undefined) {
            this.__dataMap = this.props.endPoint;
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
    return Store;
}());
exports.default = Store;
//# sourceMappingURL=Store.js.map