import axios from 'axios';
import Application from '../applications/Applications';

export interface basicObject {
    [key: string]: string | any
}


export default class AjaxRequest {

    ajaxCallControl = true;

    props: basicObject = {
        type: 'post',
        method: 'findAll',
        processor: '',
        url: window.location.origin + '/karcin-auth/rest-api',
        headers: {},
        data: []
    };

    ajaxProps: basicObject = {};

    constructor(props?: Object, callback?: any) {
        // get object props control
        if (props !== undefined) {
            this.props = Application.mergeObject(this.props, props);
            this.ajaxPropsMerge();
        }

        // url this.props change to url
        if (callback !== undefined) {
            this.props['callback'] = callback;
        }
    }

    ajaxPropsMerge() {
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
        } else {
            this.ajaxCallControl = false;
        }
    }


    call() {
        if (this.props.processor !== undefined && this.props.method) {
            if(this.beforeRequest()){
                axios(this.ajaxProps).then((response:any) => {
                    // props success control
                    if (this.props['successCallback'] !== undefined) {
                        this.props['successCallback'](response);
                    }

                    // props error callback function
                    if (this.props['callback'] !== undefined) {
                        this.props['callback'](response);
                    }

                    // token control method
                    this.tokenControl(response['token']);

                }).catch((error:any) => {
                    // props error control
                    if (this.props['errorCallback'] !== undefined) {
                        this.props['errorCallback'](error);
                    }

                    // props error callback function
                    if (this.props['callback'] !== undefined) {
                        this.props['callback'](error);
                    }
                });
            }
        } else {
            throw new Error('Lütfen zorunlu olan (processor ve method) giriniz.');
        }

    }


    tokenControl(token: any) {
        let returnToken: any;

        if (token !== (undefined && null)) {
            localStorage.setItem('token', token);
            returnToken = token;
        } else {
            if (this.props.headers.token !== undefined) {
                returnToken = this.props.header.token;
            } else if (localStorage.getItem('token') !== null) {
                returnToken = localStorage.getItem('token');
            }
        }

        if (returnToken !== undefined) {
            this.props['headers']['token'] = returnToken;
            return returnToken;
        }
    }

    beforeRequest(){
        let returnControl = true;
        if(localStorage.getItem('token')){
            this.ajaxProps.headers['Authorization'] = localStorage.getItem('token'); 
        }

        // karcin ui için comment'e alındı.
        /*else {
            returnControl = false;
        }*/

        return returnControl;
    }

}
