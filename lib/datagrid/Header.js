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
var FaIcon_1 = require("../functional/faicon/FaIcon");
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    /**
     * Initial values
     */
    function Header(props) {
        var _this = _super.call(this, props) || this;
        /**
         * general variable
         */
        _this.paginationControl = true;
        _this.editValues = {};
        _this.state = {
            isOpen: false,
            selectedRow: { selected: _this.props.selectedRow },
            buttonType: null
        };
        return _this;
    }
    Header.prototype.UNSAFE_componentWillReceiveProps = function (props) {
        this.state.selectedRow.selected = props.selectedRow;
        this.forceUpdate();
    };
    /**
     * return any
     */
    Header.prototype.render = function () {
        // header Html Elements
        var data = this.props.toolbars;
        var buttons = [];
        var self = this;
        if (data !== undefined) {
            var _loop_1 = function (i) {
                var value = data[i];
                buttons.push(React.createElement(reactstrap_1.Button, { key: i, color: "defaults", disabled: (value.disabled !== undefined ? value.disabled : false), onClick: function () {
                        if (value.url !== undefined) {
                            self.urlDirectory(value.url);
                        }
                        else {
                            if (value.onClick !== undefined) {
                                value.onClick();
                            }
                        }
                    } },
                    (value.icon !== undefined ?
                        React.createElement(FaIcon_1.default, { code: value.icon }) : ""),
                    React.createElement("span", null, value.name)));
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        }
        return React.createElement("div", { className: "toolbar head" },
            this.props.title !== undefined ? React.createElement(reactstrap_1.Col, { className: 'datagridTitle' }, this.props.title) : '',
            React.createElement("div", { className: "header-buttons" },
                React.createElement(reactstrap_1.ButtonGroup, null, buttons)));
    };
    /**
     * location url
     * @param url
     */
    Header.prototype.urlDirectory = function (url) {
        window.location.href = url;
    };
    /**
     * Initial props value
     */
    Header.defaultProps = {
        type: "footer",
        toolbars: []
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=Header.js.map