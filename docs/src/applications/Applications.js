"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications = /** @class */ (function () {
    function Applications(props) {
        this.props = {
            ajaxCallback: null
        };
        if (props !== undefined && props.ajaxCallback !== undefined) {
            Applications.ajaxCall = props.ajaxCallback;
        }
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
    Applications.prototype.ajaxCallback = function (response) {
        if (Applications.ajaxCall !== null) {
            Applications.ajaxCall(response);
        }
    };
    Applications.ajaxCall = null;
    return Applications;
}());
exports.default = Applications;
//# sourceMappingURL=Applications.js.map