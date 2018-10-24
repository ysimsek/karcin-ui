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
/**
 * List array data or childs data returned
 */
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    /**
     * Initial values
     * @param props
     */
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeId: _this.props.activeId
        };
        return _this;
    }
    /**
     * @returns {any}
     */
    List.prototype.render = function () {
        var renderList = [];
        if (this.props.children != undefined) {
            renderList = this.renderShowChilds(this.props.children);
        }
        else {
            renderList.push(React.createElement(reactstrap_1.ListGroup, { onClick: this.onClick.bind(this), key: "list" }, this.childsReturn(this.props.data)));
        }
        return renderList;
    };
    /**
     * Return Childs Elements
     * @param childs
     * @returns {JSX.Element[]}
     */
    List.prototype.renderShowChilds = function (childs) {
        var renderElements = [];
        childs.forEach(function (child, index) {
            renderElements.push(React.createElement(reactstrap_1.ListGroupItem, { key: index + 'lgi' }, child));
        });
        return renderElements;
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
            childs.push(React.createElement(reactstrap_1.ListGroupItem, { active: me.props.active == true && (child[me.props.activeValue] == me.state.activeId) ? true : false, color: me.props.color, tag: me.props.tag, id: (idx + 1).toString(), key: idx + 'lgc', href: child[me.props.tagValue], action: me.props.action }, child[me.props.value] + ' ', " ", me.props.badge == true ? React.createElement(reactstrap_1.Badge, { pill: true }, child[me.props.badgeValue]) : ""));
        });
        return childs;
    };
    /**
     * Change the State
     * @param f
     */
    List.prototype.onClick = function (f) {
        this.setState({ activeId: Number(f.target.id) });
        this.props.onClick != undefined ? this.props.onClick(f) : null;
    };
    return List;
}(React.Component));
exports.default = List;
//# sourceMappingURL=List.js.map