import axios from 'axios';
import Application from '../applications/Applications';

export interface basicObject {
    [key: string]: string | any
}


export default class AjaxRequest {

    props: basicObject = {
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
            if (this.props['success'] !== undefined) {
                this.props['success'](response);
            }

            // props error callback function
            if (this.props['callback'] !== undefined) {
                this.props['callback'](response);
            }

        }).catch((error) => {
            // props error control
            if (this.props['error'] !== undefined) {
                this.props['error'](error);
            }

            // props error callback function
            if (this.props['callback'] !== undefined) {
                this.props['callback'](error);
            }
        });

    }

}
