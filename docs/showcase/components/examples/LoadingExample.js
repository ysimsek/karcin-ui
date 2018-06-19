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
var karcin_ui_1 = require("karcin-ui");
var LoadingExample = /** @class */ (function (_super) {
    __extends(LoadingExample, _super);
    function LoadingExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loadingShowing: true
        };
        return _this;
    }
    LoadingExample.prototype.render = function () {
        this.loadingClose();
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.Button, { color: "primary", onClick: this.loadingOpen.bind(this) }, "Loading Open"),
            React.createElement(karcin_ui_1.Loading, { show: this.state.loadingShowing, size: "full" })));
    };
    LoadingExample.prototype.loadingClose = function () {
        var self = this;
        setTimeout(function () {
            self.setState({
                loadingShowing: false
            });
        }, 3000);
    };
    LoadingExample.prototype.loadingOpen = function () {
        this.setState({
            loadingShowing: true
        });
        this.loadingClose();
    };
    return LoadingExample;
}(React.Component));
exports.default = LoadingExample;
//# sourceMappingURL=LoadingExample.js.map