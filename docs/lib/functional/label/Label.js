"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    /**
     * Initial values
     * @param props
     */
    function Label(props) {
        return _super.call(this, props) || this;
    }
    /**
     * @returns {any}
     */
    Label.prototype.render = function () {
        return React.createElement(reactstrap_1.Label, { hidden: this.props.hidden, for: this.props.for, className: this.props.className, tag: this.props.tag }, React.createElement("div", { style: { fontSize: this.props.size + "px", color: this.props.color } }, this.props.children));
    };
    /**
     * Initial props value
     * @type {{size: number}}
     */
    Label.defaultProps = {
        size: 16
    };
    return Label;
}(React.Component));
exports.default = Label;
//# sourceMappingURL=Label.js.map