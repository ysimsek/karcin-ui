"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ajaxCall = null;
var Applications = /** @class */ (function () {
    function Applications(props) {
        this.ajaxUrl = null;
    }
    /**
     * merge object 'Object.assign' similar
     * @param {object} mainObj
     * @param {object} mergeObj
     * @returns {{}}
     */
    Applications.mergeObject = function (mainObj, mergeObj) {
        if (mainObj !== undefined && mergeObj !== undefined) {
            var obj = mainObj;
            // merge object
            var mrgObj = void 0;
            for (mrgObj in mergeObj) {
                if (mergeObj[mrgObj] !== undefined && mergeObj[mrgObj] !== null) {
                    obj[mrgObj] = mergeObj[mrgObj];
                }
            }
            // main object
            var mnObj = void 0;
            for (mnObj in obj) {
                if (obj[mnObj] === undefined || obj[mnObj] === null) {
                    delete obj[mnObj];
                }
            }
            return obj;
        }
        else {
            throw new Error('Lütfen default objeniz ve birleştireceğiniz objeyi boş burakmayınız...');
        }
    };
    Applications.prototype.setAjaxCall = function (callback) {
        if (callback !== undefined) {
            ajaxCall = callback;
        }
    };
    Applications.prototype.setUrl = function (url) {
        if (url !== undefined) {
            this.ajaxUrl = url;
        }
    };
    Applications.prototype.ajaxCallback = function (response) {
        if (ajaxCall !== null) {
            ajaxCall(response);
        }
    };
    return Applications;
}());
exports.default = Applications;
//# sourceMappingURL=Applications.js.map