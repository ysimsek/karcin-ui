import axios from 'axios';
import Application from '../applications/Applications';

export interface basicObject {
    [key: string]: string | any
}


export default class AjaxRequest {

    props: basicObject = {
        type: 'GET',
        url: null,
        params: null,
        originUrl: window.location.origin + '/restApi',
        processor: null,
        method: null,
        successCallback: null,
        errorCallback: null,
        callback: null
    };

    ajaxProps: basicObject = {
        method: 'GET',
        responseType: 'stream',
        params: null,
    };

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
        this.ajaxProps = Application.mergeObject(this.ajaxProps, this.props);
        this.ajaxProps.params = {
            'processor': this.props.processor,
            'method': this.props.method,
            'data': this.props.data
        };
    }


    call() {
        axios(this.ajaxProps).then((response) => {
            // props success control
            if (this.props['successCallback'] !== undefined) {
                this.props['successCallback'](response);
            }

            // props error callback function
            if (this.props['callback'] !== undefined) {
                this.props['callback'](response);
            }

        }).catch((error) => {
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

}
