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
var Loading = /** @class */ (function (_super) {
    __extends(Loading, _super);
    function Loading(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            show: _this.props.show,
            size: _this.props.size
        };
        return _this;
    }
    Loading.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.setState(props);
    };
    Loading.prototype.render = function () {
        var styleClass = this.props.className === undefined ? "" : this.props.className;
        return (React.createElement("div", { className: "pre-loading " + (this.props.show ? 'show' : '') + " " + (this.props.size === 'inset' ? 'inset' : '') }, React.createElement("span", { className: "glyphicon glyphicon-refresh spinning " + styleClass })));
    };
    Loading.defaultProps = {
        show: true,
        size: "full"
    };
    return Loading;
}(React.Component));
exports.default = Loading;
//# sourceMappingURL=Loading.js.map