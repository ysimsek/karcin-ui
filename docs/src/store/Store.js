"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications_1 = require("../applications/Applications");
var LocaleEndPoint_1 = require("../store/LocaleEndPoint");
var RemoteEndPoint_1 = require("../store/RemoteEndPoint");
var Store = /** @class */ (function () {
    function Store(props, callback) {
        this.props = {
            idField: "oid",
            data: [],
            url: "",
            endPoint: null
        };
        this.props = Applications_1.default.mergeObject(this.props, props);
        this.callback = callback;
        this.endPoint();
    }
    Store.prototype.endPoint = function () {
        var _this = this;
        if (this.props.data.length > 0) {
            this.props.endPoint = new LocaleEndPoint_1.default({
                data: this.props.data
            }, function (response) { _this.endPointCallback(response); });
        }
        else if (this.props.url !== undefined) {
            this.props.endPoint = new RemoteEndPoint_1.default({
                url: this.props.url
            }, this.endPointCallback);
        }
    };
    Store.prototype.endPointCallback = function (response) {
        if (response !== undefined && this.callback !== undefined) {
            this.__dataMap = response;
            this.callback(response);
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