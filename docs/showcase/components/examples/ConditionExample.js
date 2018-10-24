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
var ConditionExample = /** @class */ (function (_super) {
    __extends(ConditionExample, _super);
    function ConditionExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            data: [
                { id: 1, where: 0, box: "group", children: [
                        { id: 2, field: null, operator: null, value: null, box: 'box' },
                        { id: 3, field: null, operator: null, value: null, box: 'box' },
                        { id: 4, field: null, operator: null, value: null, box: 'box' },
                    ] },
                { id: 6, where: 0, box: "group", children: [
                        { id: 7, field: null, operator: null, value: null, box: 'box' },
                        { id: 8, field: null, operator: null, value: null, box: 'box' },
                        { id: 9, field: null, operator: null, value: null, box: 'box' },
                    ] },
                { id: 11, field: null, operator: null, value: null, box: 'box' }
            ],
            field: [
                { id: 1, field: 'Deneme', fieldFullName: 'deneme12.Asd' },
                { id: 2, field: 'Denemes', fieldFullName: 'deneme12.dsds' },
                { id: 3, field: 'Denemeq', fieldFullName: 'deneme12.wewew' },
                { id: 4, field: 'Denemer', fieldFullName: 'deneme12.bklklk' }
            ]
        };
        return _this;
    }
    ConditionExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(karcin_ui_1.Condition, { data: this.state.data, field: this.state.field })));
    };
    return ConditionExample;
}(React.Component));
exports.default = ConditionExample;
//# sourceMappingURL=ConditionExample.js.map