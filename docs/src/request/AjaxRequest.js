"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Applications_1 = require("../applications/Applications");
var AjaxRequest = /** @class */ (function () {
    function AjaxRequest(props, callback) {
        this.props = {
            type: 'GET',
            url: null,
            data: null,
            originUrl: window.location.origin + '/restApi',
            processor: null,
            method: null,
            success: null,
            error: null,
            callback: null
        };
        this.ajaxProps = {
            method: 'GET',
            responseType: 'stream',
            params: null,
        };
        // get object props control
        if (props !== undefined) {
            this.props = Applications_1.default.mergeObject(this.props, props);
            this.ajaxPropsMerge();
        }
        // url this.props change to url
        if (callback !== undefined) {
            this.props['callback'] = callback;
        }
    }
    AjaxRequest.prototype.ajaxPropsMerge = function () {
        this.ajaxProps = Applications_1.default.mergeObject(this.ajaxProps, this.props);
        this.ajaxProps.params = {
            'processor': this.props.processor,
            'method': this.props.method,
            'data': this.props.data
        };
    };
    AjaxRequest.prototype.call = function () {
        var _this = this;
        axios_1.default(this.ajaxProps).then(function (response) {
            // props success control
            if (_this.props['success'] !== undefined) {
                _this.props['success'](response);
            }
            // props error callback function
            if (_this.props['callback'] !== undefined) {
                _this.props['callback'](response);
            }
        }).catch(function (error) {
            // props error control
            if (_this.props['error'] !== undefined) {
                _this.props['error'](error);
            }
            // props error callback function
            if (_this.props['callback'] !== undefined) {
                _this.props['callback'](error);
            }
        });
    };
    return AjaxRequest;
}());
exports.default = AjaxRequest;
//# sourceMappingURL=AjaxRequest.js.map