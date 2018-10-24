"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FaIcon_1 = require("../functional/faicon/FaIcon");
var ToggleButton = /** @class */ (function (_super) {
    __extends(ToggleButton, _super);
    /**
     * Initial values
     * @param {ToggleButtonProps} props
     */
    function ToggleButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: false
        };
        return _this;
    }
    /**
     * @returns {any}
     */
    ToggleButton.prototype.render = function () {
        var _this = this;
        var icon = null;
        if (this.props.successIcon !== undefined && this.props.rejectIcon !== undefined) {
            icon = React.createElement("span", { className: "show-icon " + ((this.state.checked) ? 'success' : 'reject') },
                React.createElement(FaIcon_1.default, { code: (this.state.checked) ? this.props.successIcon : this.props.rejectIcon }));
        }
        return (React.createElement("div", { className: "slider-checkbox " + (this.state.checked ? 'active' : '') },
            React.createElement("label", null,
                icon,
                React.createElement("input", { type: "checkbox", checked: this.state.checked, onChange: function () { _this.toggleChange(); } }),
                React.createElement("span", { className: "circle" }))));
    };
    /**
     * Change the state
     */
    ToggleButton.prototype.toggleChange = function () {
        this.setState({ checked: !this.state.checked });
        this.propsOnChange();
    };
    /**
     * return eventValues
     */
    ToggleButton.prototype.propsOnChange = function () {
        if (this.props.onChange !== undefined) {
            var eventValue = {};
            eventValue['name'] = this.props.name;
            eventValue['label'] = this.props.label;
            eventValue['value'] = this.state.checked;
            this.props.onChange(eventValue);
        }
    };
    return ToggleButton;
}(React.Component));
exports.default = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map