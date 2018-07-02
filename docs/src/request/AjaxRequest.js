"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var Applications_1 = require("../applications/Applications");
var AjaxRequest = /** @class */ (function () {
    function AjaxRequest(props, callback) {
        this.ajaxCallControl = true;
        this.props = {
            type: 'post',
            method: 'findAll',
            processor: '',
            url: window.location.origin + '/karcin-auth/rest-api',
            headers: {},
            data: []
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
        if (this.props.processor !== undefined && this.props.processor !== '') {
            this.ajaxCallControl = true;
            this.ajaxProps = {
                method: this.props.type,
                url: this.props.url,
                headers: this.props.headers,
                data: {
                    'processor': this.props.processor,
                    'method': this.props.method,
                    'data': this.props.data
                }
            };
        }
        else {
            this.ajaxCallControl = false;
        }
    };
    AjaxRequest.prototype.call = function () {
        var _this = this;
        if (this.ajaxCallControl) {
            // token control method
            this.tokenControl();
            debugger;
            axios_1.default(this.ajaxProps).then(function (response) {
                // props success control
                if (_this.props['successCallback'] !== undefined) {
                    _this.props['successCallback'](response);
                }
                // props error callback function
                if (_this.props['callback'] !== undefined) {
                    _this.props['callback'](response);
                }
                // token control method
                _this.tokenControl(response['token']);
            }).catch(function (error) {
                // props error control
                if (_this.props['errorCallback'] !== undefined) {
                    _this.props['errorCallback'](error);
                }
                // props error callback function
                if (_this.props['callback'] !== undefined) {
                    _this.props['callback'](error);
                }
            });
        }
        else {
            throw new Error('Lütfen zorunlu olan (processor ve method) giriniz.');
        }
    };
    AjaxRequest.prototype.tokenControl = function (token) {
        var returnToken;
        if (token !== undefined) {
            localStorage.setItem('token', token);
            returnToken = token;
        }
        else {
            if (this.props.headers.token !== undefined) {
                returnToken = this.props.header.token;
            }
            else if (localStorage.getItem('token') !== null) {
                returnToken = localStorage.getItem('token');
            }
        }
        if (returnToken !== undefined) {
            this.props['headers']['token'] = returnToken;
            return returnToken;
        }
    };
    return AjaxRequest;
}());
exports.default = AjaxRequest;
//# sourceMappingURL=AjaxRequest.js.map