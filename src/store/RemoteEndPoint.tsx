import Application from '../applications/Applications';
import AjaxRequest from '../request/AjaxRequest';

export default class RemoteEndPoint {

    __dataMap: any[] = [];
    __callback: any;

    // request
    requestStatus = true;

    props: any = {
        url: null,
        idField: 'id',
        method: 'GET',
        endPoint: 'remoteEndPoint',
        responseData: ''
    };

    constructor(props: Object, callback: any) {
        this.props = Application.mergeObject(this.props, props);
        this.__callback = callback;

        this.call();
    };

    call() {
        if (this.props.url !== null && this.requestStatus) {
            this.requestStatus = false;

            let getData = new AjaxRequest({
                url: this.props.url,
                method: this.props.method
            }, (response: any) => {
                this.callbackReady(response)
            });

            getData.call();
        }
    }

    callbackReady(response: any) {
        this.requestStatus = false;
        if (this.__callback !== undefined && response !== undefined) {
            this.__dataMap = response[this.props.responseData];
            this.__callback(response[this.props.responseData]);
        }
    }

    read() {
        if (this.props.url !== undefined) {
            this.reset();

            this.call();
        }
        return this.__dataMap;
    }

    reset(successCallback?: any) {
        this.__dataMap = [];

        if (successCallback !== undefined) {
            successCallback()
        }

        return this.__dataMap;
    }


    create(item: any, successCallback?: any, errorCallback?: any) {

    }

    update(items: any, successCallback?: any, errorCallback?: any) {

    }

    orderSort(fieldName: any, callback: any) {
        if (fieldName !== undefined) {
            let getAjax = new AjaxRequest({
                url: this.props.url,
                type: this.props.method,
                data: {orders: {"property": fieldName, "orderType": 'ASC'}}
            }, (response: any) => {
                this.callbackReady(response);
                callback(response[this.props.responseData], fieldName, 'asc');
            });
            getAjax.call();
        } else {
            throw new Error('Field name empty');
        }
    }

    orderReverse(fieldName: any, callback: any) {
        if (fieldName !== undefined) {
            let getAjax = new AjaxRequest({
                url: this.props.url,
                type: this.props.method,
                data: {orders: {"property": fieldName, "orderType": 'DESC'}}
            }, (response: any) => {
                this.callbackReady(response);
                callback(response[this.props.responseData], fieldName, 'desc');
            });

            getAjax.call();
        } else {
            throw new Error('Field name empty');
        }
    }

    filter(fieldName: any, value: any, callback:any) {
        if(fieldName != undefined && value !== undefined){
            let getAjax = new AjaxRequest({
                url: this.props.url,
                method: this.props.method,
                params: {filters: {"property": fieldName, "orderType": 'DESC'}}
            }, (response: any) => {
                this.callbackReady(response);
                callback(response[this.props.responseData], fieldName, 'desc');
            });
            getAjax.call();
        }else {
            throw new Error('Field name or value empty');
        }
    }
}
