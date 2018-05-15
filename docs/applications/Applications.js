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
            for (var mnObj in mainObj) {
                obj[mnObj] = mainObj[mnObj];
            }
            // merge object
            for (var mergObj in mergeObj) {
                if (obj[mergObj] !== undefined) {
                    obj[mergObj] = mergeObj[mergObj];
                }
                else {
                    throw new Error('Tanımsız bir name(' + mergObj + ') kullandınız!');
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