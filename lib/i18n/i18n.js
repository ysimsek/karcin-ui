"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i18n = /** @class */ (function () {
    function i18n() {
        this.data = {};
    }
    i18n.prototype.addLanguageData = function (data) {
        this.data = data;
    };
    i18n.prototype.message = function (id, value) {
        var data = this.getLanguageData();
        return this.replace(data.message[id], value);
    };
    i18n.prototype.getLanguageData = function () {
        return this.data;
    };
    i18n.prototype.replace = function (str, obj) {
        var re = /{([^}]*.?)\}/g, match;
        if (re.exec(str) != null) {
            while (match = re.exec(str)) {
                str = str.replace(match[0], obj[match[1]]);
                re.lastIndex = 0;
            }
        }
        return str;
    };
    return i18n;
}());
exports.default = new i18n();
//# sourceMappingURL=i18n.js.map