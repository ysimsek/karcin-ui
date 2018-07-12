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
    BaseClass.prototype.response = function (callback, callbackData) {
        //this.props.data = this.__dataMap;
        var parentClass = Object.assign(this);
        var callData = (callbackData !== undefined) ? callbackData : parentClass.__dataMap;
        parentClass.__dataMap = parentClass.props.data;
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
    return BaseClass;
}());
exports.default = BaseClass;
//# sourceMappingURL=BaseClass.js.map