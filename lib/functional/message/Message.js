"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Alert_1 = require("./msg/Alert");
var Prompt_1 = require("./msg/Prompt");
var Confirm_1 = require("./msg/Confirm");
var Custom_1 = require("./msg/Custom");
var message = /** @class */ (function () {
    function message() {
    }
    message.prototype.alert = function (obj) {
        var div = this.getDiv();
        var cmp = this.standartMethod(obj, div);
        var component = React.createElement(Alert_1.default, obj);
        ReactDOM.render(component, div);
    };
    message.prototype.prompt = function (obj) {
        var div = this.getDiv();
        var cmp = this.standartMethod(obj, div);
        var component = React.createElement(Prompt_1.default, obj);
        ReactDOM.render(component, div);
    };
    message.prototype.confirm = function (obj) {
        var div = this.getDiv();
        var cmp = this.standartMethod(obj, div);
        var component = React.createElement(Confirm_1.default, obj);
        ReactDOM.render(component, div);
    };
    message.prototype.custom = function (obj) {
        var div = this.getDiv();
        var cmp = this.standartMethod(obj, div);
        var component = React.createElement(Custom_1.default, obj);
        ReactDOM.render(component, div);
    };
    /**
     * Set the Random id
     * @returns {HTMLDivElement}
     */
    message.prototype.getDiv = function () {
        var div = document.createElement('div');
        var xCount = Math.floor((Math.random() * 10000) + 1);
        div.setAttribute("id", xCount);
        return div;
    };
    /**
     * Overflow hiddeb and appenCild element
     * @param obj
     * @param div
     */
    message.prototype.standartMethod = function (obj, div) {
        document.body.style.setProperty('overflow', 'hidden');
        document.body.appendChild(div);
        obj.show = true;
    };
    return message;
}());
exports.default = new message();
//# sourceMappingURL=Message.js.map