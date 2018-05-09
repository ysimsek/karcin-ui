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
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    /**
     * Initial values
     * @param props
     */
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    /**
     * @returns {any}
     */
    List.prototype.render = function () {
        return React.createElement(reactstrap_1.ListGroup, null, this.childsReturn(this.props.data));
    };
    /**
     * Childs elements in list
     * @param {Array<any>} list
     * @returns {JSX.Element[]}
     */
    List.prototype.childsReturn = function (list) {
        var childs = [];
        var me = this;
        list.forEach(function (child, idx) {
            childs.push(React.createElement(reactstrap_1.ListGroupItem, { active: me.props.active == true && (child[me.props.activeValue] == me.props.activeId) ? true : false, color: me.props.color, tag: me.props.tag, href: child[me.props.tagValue], action: me.props.action },
                child[me.props.value] + ' ',
                " ",
                me.props.badge == true ? React.createElement(reactstrap_1.Badge, { pill: true }, child[me.props.badgeValue]) : ""));
        });
        return childs;
    };
    return List;
}(React.Component));
exports.default = List;
//# sourceMappingURL=List.js.map