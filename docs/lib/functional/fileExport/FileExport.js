"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../css/karcin-ui.css");
var Applications_1 = require("../../applications/Applications");
var FileSaver = require('file-saver');
var FileExport = /** @class */ (function () {
    function FileExport(props) {
        this.props = {
            extension: 'pdf',
            fileName: 'example',
            fileData: null
        };
        this.base64toBlob = function (b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;
            var byteCharacters = atob(b64Data);
            var byteArrays = [];
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
            var blob = new Blob(byteArrays, { type: contentType });
            return blob;
        };
        this.props = Applications_1.default.mergeObject(this.props, props);
        if (this.props.fileData !== null && this.props.fileData !== '') {
            this.fileControl();
        }
        else {
            throw new Error('fileData empty');
        }
    }
    FileExport.prototype.fileControl = function () {
        var newData = this.base64toBlob(this.props.fileData);
        FileSaver.saveAs(newData, this.props.fileName + '.' + this.props.extension);
    };
    return FileExport;
}());
exports.default = FileExport;
//# sourceMappingURL=FileExport.js.map