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
var FaIcon_1 = require("../faicon/FaIcon");
var FileUpload = /** @class */ (function (_super) {
    __extends(FileUpload, _super);
    function FileUpload(props) {
        var _this = _super.call(this, props) || this;
        _this.getFileImage = [];
        _this.clickFile = function () {
            _this.fileInput.click();
        };
        _this.getData = function (e) {
            var file = e.target.files[0];
            if (file) {
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(file);
                reader_1.addEventListener('load', function () {
                    _this.getImage(reader_1.result, file);
                });
            }
        };
        return _this;
    }
    FileUpload.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "karcin-file-upload" }, React.createElement("input", { type: "file", name: "fileInput", ref: function (e) { return _this.fileInput = e; }, onChange: this.getData }), React.createElement("div", { className: "select-file", onClick: this.clickFile }, React.createElement("span", null, "Dosya Se\u00E7iniz")), React.createElement("div", { className: "list-images" }, this.renderFile())));
    };
    FileUpload.prototype.getImage = function (imageData, file) {
        if (imageData !== undefined) {
            this.getFileImage.push({ file: imageData, filesOption: file });
            this.forceUpdate();
        }
    };
    FileUpload.prototype.renderFile = function () {
        var _this = this;
        var items = [];
        this.getFileImage.forEach(function (value, index) {
            items.push(React.createElement("div", { className: "items", key: index }, React.createElement("div", { className: "close-item", onClick: function (index) { _this.removeItems(index); } }, React.createElement(FaIcon_1.default, { code: "fa-times" })), React.createElement("div", { className: "image" }, _this.getRenderImage(value)), React.createElement("div", { className: "text" }, React.createElement("div", { className: "center" }, React.createElement("strong", null, value.filesOption.name), React.createElement("span", null, value.filesOption.type), React.createElement("span", null, value.filesOption.size + "KB")))));
        });
        return items;
    };
    FileUpload.prototype.getRenderImage = function (value) {
        var extensions = value.filesOption.type.split('/')[1];
        if (extensions !== undefined) {
            var showImageExtensions = ['jpg', 'jpg', 'jpeg', 'gif', 'png'];
            if (showImageExtensions.indexOf(extensions) !== -1) {
                return React.createElement("img", { src: value.file });
            }
            else {
                return React.createElement("span", { className: "file-icon file-icon-lg", "data-type": extensions });
            }
        }
        return null;
    };
    FileUpload.prototype.removeItems = function (id) {
        this.getFileImage.splice(id, 1);
        this.forceUpdate();
    };
    return FileUpload;
}(React.Component));
exports.default = FileUpload;
//# sourceMappingURL=FileUpload.js.map