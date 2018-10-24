"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    /**
     * Initial values
     * @param props
     */
    function TextArea(props) {
        return _super.call(this, props) || this;
    }
    /**
     * @returns {any}
     */
    TextArea.prototype.render = function () {
        return React.createElement("div", { className: "karcin-input" }, this.props.label != undefined ? React.createElement(reactstrap_1.Label, { className: "label-properties" }, this.props.label) : null, React.createElement("textarea", { className: this.props.className + " form-control", name: this.props.name, value: this.props.value, autoFocus: this.props.properties.autoFocus, readOnly: this.props.properties.readOnly, required: this.props.properties.required, disabled: this.props.properties.disabled, cols: this.props.properties.cols, rows: this.props.properties.rows, onChange: this.onChange.bind(this) }));
    };
    TextArea.prototype.onChange = function (e) {
        this.props.onChange(e);
    };
    /**
     * Initial props value
     * @type {{properties: {}; name: string; value: string}}
     */
    TextArea.defaultProps = {
        properties: {},
        name: "textArea",
        value: ""
    };
    return TextArea;
}(React.Component));
exports.default = TextArea;
//# sourceMappingURL=TextArea.js.map