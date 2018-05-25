"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Applications = /** @class */ (function () {
    function Applications() {
    }
    /**
     * merge object 'Object.assign' similar
     * @param {object} mainObj
     * @param {object} mergeObj
     * @returns {{}}
     */
    Applications.mergeObject = function (mainObj, mergeObj) {
        var obj = {};
        if (mainObj !== undefined && mergeObj !== undefined) {
            // main object
            var mnObj = void 0;
            for (mnObj in mainObj) {
                obj[mnObj] = mainObj[mnObj];
            }
            // merge object
            var mrgObj = void 0;
            for (mrgObj in mergeObj) {
                if (obj[mrgObj] !== undefined) {
                    obj[mrgObj] = mergeObj[mrgObj];
                }
                else {
                    throw new Error('Tanımsız bir name(' + mrgObj + ') kullandınız!');
                }
            }
            return obj;
        }
        else {
            throw new Error('Lütfen default objeniz ve birleştireceğiniz objeyi boş burakmayınız...');
        }
    };
    return Applications;
}());
exports.default = Applications;
//# sourceMappingURL=Applications.js.map