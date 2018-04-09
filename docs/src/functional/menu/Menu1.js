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
var Menu1 = /** @class */ (function (_super) {
    __extends(Menu1, _super);
    function Menu1(props) {
        var _this = _super.call(this, props) || this;
        _this.menuChilds = [];
        _this.state = {
            menuData: _this.props.data
        };
        _this.menuLoop(_this.state.menuData, false);
        return _this;
    }
    Menu1.prototype.render = function () {
        return React.createElement("div", null, this.menuChilds);
    };
    Menu1.prototype.menuLoop = function (getData, getChild) {
        // for (let i = 0; i < getData.length; i++) {
        //     let value = getData[i];
        //     this.menuChilds.push(<div className="item">
        //         <span>{value.name}</span>{(value.items !== undefined && value.items.length > 0) ?
        //         this.menuLoop(value.items, true) : ''}
        //     </div>);
        // }
    };
    return Menu1;
}(React.Component));
exports.default = Menu1;
//# sourceMappingURL=Menu1.js.map