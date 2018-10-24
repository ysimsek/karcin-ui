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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            activeTab: props.activeTab || 0
        };
        return _this;
    }
    Tab.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(nextProps);
        this.forceUpdate();
    };
    Tab.prototype.render = function () {
        return (React.createElement("div", { className: "karcin-tab " + ((this.props.className !== undefined) ? this.props.className : '') + " " + this.props.color },
            React.createElement(reactstrap_1.Nav, { tabs: true, className: ((this.props.vertical !== undefined && this.props.vertical) ? 'vertical' : '') + " " + this.props.align }, this.getTab().header),
            React.createElement(reactstrap_1.TabContent, { className: (this.props.vertical !== undefined && this.props.vertical) ? 'vertical' : '', activeTab: this.state.activeTab }, this.getTab().body)));
    };
    Tab.prototype.toggle = function (tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    Tab.prototype.getTab = function () {
        var _this = this;
        var header = [];
        var body = [];
        var item = [];
        if (this.props.children) {
            if (Array.isArray(this.props.children)) {
                item = this.props.children;
            }
            else {
                item.push(this.props.children);
            }
            item.forEach(function (v, i) {
                if (v) {
                    var className = (_this.state.activeTab === i) ? "active" : "";
                    if (v.props.className) {
                        className = className + " " + v.props.className;
                    }
                    header.push(React.createElement(reactstrap_1.NavItem, { className: v.props.action !== undefined && v.props.action.icon ? 'closible' : "", key: i },
                        React.createElement(reactstrap_1.NavLink, { className: className, onClick: function () { if (v.props.action !== undefined) {
                                v.props.action.handler(i);
                            }
                            else {
                                _this.toggle(i);
                            } } },
                            v.props.action !== undefined ? v.props.action.title : v.props.title,
                            (v.props.action !== undefined && v.props.action.icon ? React.createElement("div", { className: "close-tab" },
                                React.createElement("i", { className: v.props.action.icon })) : ""))));
                    body.push(React.createElement(reactstrap_1.TabPane, __assign({}, v.props, { tabId: i, key: i }), v.props.children));
                }
            });
        }
        return { header: header, body: body };
    };
    Tab.defaultProps = {
        align: 'left',
        color: 'secondary'
    };
    return Tab;
}(React.Component));
exports.default = Tab;
//# sourceMappingURL=Tab.js.map