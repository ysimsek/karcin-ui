"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reactstrap_1 = require("reactstrap");
var karcin_ui_1 = require("karcin-ui");
var Highlight = require("react-highlight");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        var _this = _super.call(this, props) || this;
        _this.getStarted.bind(_this);
        return _this;
    }
    HomePage.prototype.render = function () {
        var version = (sessionStorage.getItem("version") != "$VERSION") ? React.createElement("span", null, "v" + sessionStorage.getItem("version")) : null;
        var date = null;
        if (sessionStorage.getItem("date")) {
            var dateString = new Date(sessionStorage.getItem("date"));
            date = React.createElement("span", null,
                "Build Date: ",
                dateString.toLocaleDateString(),
                " ",
                dateString.toLocaleTimeString());
        }
        return React.createElement("div", null,
            React.createElement("div", { className: "header" },
                React.createElement("div", { className: "overlay" }),
                React.createElement("div", { className: "header-bg" }),
                React.createElement(reactstrap_1.Container, { className: "slide-title" },
                    React.createElement("h3", null, "Kar\u00E7in UI Showcase"),
                    React.createElement("p", null, "REACT & TYPESCRIPT & BOOTSTRAP"),
                    React.createElement("p", { className: "build-text" },
                        version,
                        " ",
                        date),
                    React.createElement("div", { className: "buttons" },
                        React.createElement(karcin_ui_1.Button, { onClick: this.getStarted, color: "primary", size: "lg" }, "GET STARTED"),
                        ' ',
                        React.createElement(karcin_ui_1.Button, { href: "#Components", color: "success", size: "lg" }, "COMPONENTS")))),
            React.createElement("div", { id: "get-started" },
                React.createElement(reactstrap_1.Container, null,
                    React.createElement(reactstrap_1.Row, null,
                        React.createElement(reactstrap_1.Col, null,
                            React.createElement("h2", null, "Get Started"),
                            React.createElement("hr", null),
                            React.createElement("h4", null, "NPM"),
                            React.createElement("p", null, "Install karcin-ui and peer dependencies via NPM"),
                            React.createElement("pre", null,
                                React.createElement("code", { className: "hljs" },
                                    React.createElement("span", { className: "hljs-keyword" }, "npm install"),
                                    " --save ",
                                    React.createElement("span", { className: "hljs-string" }, "karcin-ui"))),
                            React.createElement("p", null, "Import the components you need"),
                            React.createElement("div", { className: "example-card" },
                                React.createElement("p", null, "EXAMPLE"),
                                React.createElement(karcin_ui_1.Button, { color: "primary" }, "Hello World!")),
                            React.createElement(Highlight, { className: 'javascript' }, 'import * as React from \'react\';\n' +
                                'import { Button } from \'karcin-ui\';\n' +
                                '\n' +
                                'export default class Example extends React.Component<any, any> {\n' +
                                '  return (\n' +
                                '    <Button color="primary">Hello World!</Button>\n' +
                                '  );\n' +
                                '};'))))));
    };
    HomePage.prototype.getStarted = function () {
        window.scrollTo(0, document.getElementById("get-started").offsetTop - 70);
    };
    return HomePage;
}(React.Component));
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map