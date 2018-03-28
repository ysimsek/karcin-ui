"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Enums_1 = require("./enums/Enums");
var SelectInput = /** @class */ (function (_super) {
    __extends(SelectInput, _super);
    function SelectInput(props) {
        var _this = _super.call(this, props) || this;
        //CSS ÇALIŞMASINA DEVAM EDİLECEK, Şimdilik böyle bırakıldı.
        _this.cssStyles = {
            textAlign: (_this.props.labelPosition != Enums_1.default.labelPosition.Right ? _this.__renderLabelPosition() : _this.props.labelPosition),
            float: (SelectInput.position == "norm" ? (_this.props.labelPosition == "Left" ? Enums_1.default.labelPosition.Left : Enums_1.default.labelPosition.Right) : ""),
            marginTop: 10
        };
        _this.__renderLabelPosition.bind(_this);
        return _this;
    }
    SelectInput.prototype.render = function () {
        var label = this.props.label != null ? React.createElement("span", null, this.props.label) : null;
        var labelPositionComponent = React.createElement("div", { style: this.cssStyles }, label);
        var renderComponent = React.createElement("div", { style: this.cssStyles },
            React.createElement("select", { name: this.props.name, className: "form-control", style: { width: "100%" }, onChange: this.__handleChange.bind(this) },
                React.createElement("option", { label: "L\u00FCtfen Se\u00E7iniz", value: "" }),
                this.__renderOptionValues(this.props.items)));
        var renderEnd = [];
        if (SelectInput.position == "norm" || SelectInput.position == "top") {
            renderEnd.push(labelPositionComponent);
            renderEnd.push(renderComponent);
        }
        else {
            renderEnd.push(renderComponent);
            renderEnd.push(labelPositionComponent);
        }
        return React.createElement("div", null, renderEnd);
    };
    SelectInput.prototype.__renderOptionValues = function (items) {
        var renderItem = [];
        var id = this.props.id != undefined ? this.props.id : "id";
        var value = this.props.value != undefined ? this.props.value : "value";
        if (items.length > 0) {
            items.forEach(function (v) {
                renderItem.push(React.createElement("option", { value: v[id] }, v[value]));
            });
        }
        return renderItem;
    };
    /**
     * Enums.labelPosition içerisindeki değerlerden birisi olabilir.
     * @param position
     * @returns {string}
     * @private
     */
    SelectInput.prototype.__renderLabelPosition = function () {
        debugger;
        var deger = Enums_1.default.labelPosition;
        var position = this.props.labelPosition != undefined ? this.props.labelPosition : Enums_1.default.labelPosition.Left;
        if (position == "Left") {
            SelectInput.position = "norm";
        }
        else if (position == "Right") {
            SelectInput.position = "norm";
        }
        else if (position == "Bottom" || position == "Bottom_Right" || position == "Bottom_Left" || position == "Bottom_Center") {
            SelectInput.position = "bottom";
        }
        else if (position == "Top" || position == "Top_Right" || position == "Top_Left" || position == "Top_Center") {
            SelectInput.position = "top";
        }
        return deger[position];
    };
    /**
     * TODO : Call Component is undefined ?
     * @param {Object} e
     * @private
     */
    SelectInput.prototype.__handleChange = function (e) {
        debugger;
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };
    SelectInput.defaultProps = {
        items: [],
        value: "value",
        id: "id",
        name: "selectinput",
        labelPosition: Enums_1.default.labelPosition.Right
    };
    //norm,top,bottom
    SelectInput.position = "norm";
    return SelectInput;
}(React.Component));
exports.default = SelectInput;
//# sourceMappingURL=SelectInput.js.map