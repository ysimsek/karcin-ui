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
var reactstrap_1 = require("reactstrap");
var CheckInput = /** @class */ (function (_super) {
    __extends(CheckInput, _super);
    function CheckInput(props) {
        return _super.call(this, props) || this;
    }
    CheckInput.prototype.render = function () {
        return (React.createElement(reactstrap_1.FormGroup, { row: true },
            React.createElement(reactstrap_1.Label, { for: "checkbox2", sm: 2 }, "Checkbox"),
            React.createElement(reactstrap_1.Col, { sm: { size: 10 } },
                React.createElement(reactstrap_1.FormGroup, { check: true },
                    React.createElement(reactstrap_1.Label, { check: true },
                        React.createElement(reactstrap_1.Input, { type: "checkbox", id: "checkbox2" }),
                        ' ',
                        "Check me out")))));
    };
    return CheckInput;
}(React.Component));
//# sourceMappingURL=CheckInput.js.map