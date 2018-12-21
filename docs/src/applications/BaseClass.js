"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass = /** @class */ (function () {
    function BaseClass(props) {
        this.bindAll(this);
    }
    BaseClass.prototype.bindAll = function (instance) {
        var parent = Object.getPrototypeOf(instance);
        var bindedKeys = [];
        var constructorName = parent.constructor.name;
        if (parent === null) {
            return;
        }
        var names = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < names.length; i += 1) {
            var name_1 = names[i];
            if (typeof instance[name_1] === "function") {
                if (!bindedKeys[name_1]) {
                    instance[name_1] = instance[name_1].bind(instance);
                    bindedKeys[name_1] = true;
                }
            }
        }
        parent = Object.getPrototypeOf(parent);
    };
    BaseClass.prototype.response = function (callback, callbackData, count) {
        var parentClass = Object.assign(this);
        parentClass.__dataMap = parentClass.props.data;
        parentClass.__totalCount = count !== undefined ? count : parentClass.__dataMap.length;
        var pageData = [];
        if (parentClass.props.endPointName === 'localPoint' && parentClass.props.pageData.limit !== undefined && parentClass.props.pageData.limit > 0) {
            var pages = parentClass.props.pageData;
            var datas = (callbackData !== undefined) ? callbackData : parentClass.__dataMap;
            for (var i = 0; i < datas.length; i++) {
                if (i >= pages.start && i < (pages.start + pages.limit)) {
                    pageData.push(datas[i]);
                }
            }
        }
        var callData = [];
        if (callbackData !== undefined) {
            var data = (pageData.length > 0) ? pageData : callbackData;
            callData = { 'data': data, 'totalCount': callbackData.length };
        }
        else {
            var data = (pageData.length > 0) ? pageData : parentClass.__dataMap;
            callData = { 'data': data, 'totalCount': parentClass.__totalCount };
        }
        if (parentClass.__callback !== undefined) {
            parentClass.__callback(callData);
        }
        if (callback !== undefined) {
            if (callbackData !== undefined) {
                callback(callData);
            }
            else {
                callback(callData);
            }
        }
        return parentClass.__dataMap;
    };
    BaseClass.mappingDataFind = function (response, mapping) {
        return BaseClass.findResponseData(response, mapping.split('.'));
    };
    BaseClass.findResponseData = function (response, mapping) {
        if (response !== (undefined || null) && mapping !== undefined && mapping.length > 0) {
            return mapping.length > 0 ? response[mapping[0]] !== (null || undefined) ? BaseClass.findResponseData(response[mapping[0]], mapping.slice(1)) : null : response;
        }
        else {
            return response;
        }
    };
    return BaseClass;
}());
exports.default = BaseClass;
//# sourceMappingURL=BaseClass.js.map