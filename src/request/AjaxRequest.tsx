import axios from 'axios';
import Application from '../applications/Applications';

export interface basicObject {
    [key: string]: string | any
}


export default class AjaxRequest extends Application {

    ajaxCallControl = true;

    props: basicObject = {
        type: null,
        method: null,
        processor: null,
        url: null,
        headers: null,
        data: null
    };

    ajaxProps: basicObject = {};

    constructor(props?: Object, callback?: any) {
        super(props);

        // url  control
        let localUrl = localStorage.getItem('mainUrl');
        if(localUrl !== null){
            this.props.url = localUrl;
        }
        
        if(this.ajaxUrl !== undefined && this.ajaxUrl !== null){
            this.props.url = this.ajaxUrl;
        }


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

        // basic url control
        if(this.props.url !== undefined){
            this.ajaxProps['url'] = this.props.url;
        }

        // header control
        this.ajaxProps['headers'] = {};
        if(this.props.headers !== undefined){
            this.ajaxProps['headers'] = this.props.headers;
        }

        // ajax post type
        this.ajaxProps['method'] = this.props.type || 'post';


        // method and processor control
        if (this.props.processor !== undefined || this.props.method !== undefined || this.props.data !== undefined) {
            this.ajaxProps['data'] = {'data': [null]};

            // processor merge
            if(this.props.processor !== undefined){
                this.ajaxProps['data']['processor'] = this.props.processor;
                this.ajaxProps['data']['method'] = 'findAll';
            }

            // method merge
            if(this.props.method !== undefined){
                this.ajaxProps['data']['method'] = this.props.method;
            }

            // data merge
            if(this.props.data !== undefined){
                if(this.props.processor !== undefined && this.props.method !== undefined){
                    this.ajaxProps['data']['data'] = this.props.data;
                }else {
                    this.ajaxProps['data'] = this.props.data;
                }
            }
        }
    }


    /**
     * call method
     */
    call() {
        if (this.props.url !== undefined) {
            // before token add
            this.beforeToken();
            axios(this.ajaxProps).then((response:any) => {

                // application runt method
                this.ajaxCallback(response);

                // props success control
                if (this.props['successCallback'] !== undefined) {
                    this.props['successCallback'](response);
                }

                // props error callback function
                if (this.props['callback'] !== undefined) {
                    this.props['callback'](response);
                }

                // token control method
                if(response.token !== undefined){
                    this.afterToken();
                }

            }).catch((error:any) => {

                // application runt method
                this.ajaxCallback(error);

                // props error control
                if (this.props['errorCallback'] !== undefined) {
                    this.props['errorCallback'](error);
                }

                // props error callback function
                if (this.props['callback'] !== undefined) {
                    this.props['callback'](error);
                }
            });
        } else {
            console.error('Lütfen zorunlu olan (url) giriniz.');
        }

    }


    afterToken(token?: any) {
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

    beforeToken(){
        let token:any = localStorage.getItem('token');
        if(token !== null){
            this.ajaxProps['headers']['Authorization'] = localStorage.getItem('token');
        }
    }

}
