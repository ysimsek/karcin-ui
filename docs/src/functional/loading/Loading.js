"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loading = /** @class */ (function () {
    function Loading() {
    }
    Loading.prototype.add = function (obj) {
        this.element = document.createElement('div');
        this.element.classList.add("loading");
        var name = obj != undefined ? (obj.label != undefined ? obj.label : "") : "";
        var id = obj != undefined ? (obj.id != undefined ? document.getElementById(obj.id) : null) : null;
        var color = obj != undefined ? (obj.color != undefined ? " " + obj.color : "") : "";
        if (id != null) {
            this.element.innerHTML =
                '<div class="pre-loading inset show">\n' +
                    '    <span class="glyphicon glyphicon-inset glyphicon-refresh spinning' +
                    color +
                    '"></span>\n' +
                    '</div>';
            this.element.setAttribute("id", "setLoadIdOfSystem");
            id.appendChild(this.element);
            id.style.setProperty("position", "relative");
        }
        else {
            this.element.innerHTML =
                '<div class="pre-loading show">\n' +
                    '    <span class="glyphicon glyphicon-refresh spinning' + color + '"></span>\n';
            '</div>';
            document.body.style.setProperty("overflow", "hidden");
            document.body.appendChild(this.element);
        }
    };
    Loading.prototype.remove = function (obj) {
        try {
            if (obj != undefined) {
                var element = document.getElementById(obj.id);
                var child = element.querySelector("#setLoadIdOfSystem");
                obj.id != undefined ? element.removeChild(child) : document.body.removeChild(this.element);
            }
            else {
                document.body.removeChild(this.element);
                document.body.style.removeProperty('overflow');
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    return Loading;
}());
exports.default = new Loading();
//# sourceMappingURL=Loading.js.map