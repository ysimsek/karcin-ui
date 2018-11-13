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
var axios_1 = require("axios");
var Applications_1 = require("../applications/Applications");
var AjaxRequest = /** @class */ (function (_super) {
    __extends(AjaxRequest, _super);
    function AjaxRequest(props, callback) {
        var _this = _super.call(this, props) || this;
        _this.ajaxCallControl = true;
        _this.props = {
            type: null,
            method: null,
            processor: null,
            url: null,
            headers: null,
            data: null
        };
        _this.ajaxProps = {};
        // url  control
        var localUrl = localStorage.getItem('mainUrl');
        if (localUrl !== null) {
            _this.props.url = localUrl;
        }
        if (_this.ajaxUrl !== undefined && _this.ajaxUrl !== null) {
            _this.props.url = _this.ajaxUrl;
        }
        // get object props control
        if (props !== undefined) {
            _this.props = Applications_1.default.mergeObject(_this.props, props);
            _this.ajaxPropsMerge();
        }
        // url this.props change to url
        if (callback !== undefined) {
            _this.props['callback'] = callback;
        }
        return _this;
    }
    AjaxRequest.prototype.ajaxPropsMerge = function () {
        // basic url control
        if (this.props.url !== undefined) {
            this.ajaxProps['url'] = this.props.url;
        }
        // header control
        this.ajaxProps['headers'] = {};
        if (this.props.headers !== undefined) {
            this.ajaxProps['headers'] = this.props.headers;
        }
        // ajax post type
        this.ajaxProps['method'] = this.props.type || 'post';
        // method and processor control
        if (this.props.processor !== undefined || this.props.method !== undefined || this.props.data !== undefined) {
            this.ajaxProps['data'] = { 'data': [null] };
            // processor merge
            if (this.props.processor !== undefined) {
                this.ajaxProps['data']['processor'] = this.props.processor;
                this.ajaxProps['data']['method'] = 'findAll';
            }
            // method merge
            if (this.props.method !== undefined) {
                this.ajaxProps['data']['method'] = this.props.method;
            }
            // data merge
            if (this.props.data !== undefined) {
                this.ajaxProps['data'] = this.props.data;
            }
        }
    };
    /**
     * call method
     */
    AjaxRequest.prototype.call = function () {
        var _this = this;
        if (this.props.url !== undefined) {
            // before token add
            this.beforeToken();
            axios_1.default(this.ajaxProps).then(function (response) {
                // application runt method
                _this.ajaxCallback(response);
                // props success control
                if (_this.props['successCallback'] !== undefined) {
                    _this.props['successCallback'](response);
                }
                // props error callback function
                if (_this.props['callback'] !== undefined) {
                    _this.props['callback'](response);
                }
                // token control method
                if (response.token !== undefined) {
                    _this.afterToken();
                }
            }).catch(function (error) {
                // application runt method
                _this.ajaxCallback(error);
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
            console.error('Lütfen zorunlu olan (url) giriniz.');
        }
    };
    AjaxRequest.prototype.afterToken = function (token) {
        var returnToken;
        if (token !== (undefined && null)) {
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
    AjaxRequest.prototype.beforeToken = function () {
        var token = localStorage.getItem('token');
        if (token !== null) {
            this.ajaxProps['headers']['Authorization'] = localStorage.getItem('token');
        }
    };
    return AjaxRequest;
}(Applications_1.default));
exports.default = AjaxRequest;
//# sourceMappingURL=AjaxRequest.js.map