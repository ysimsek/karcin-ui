import Application from '../applications/Applications';
import AjaxRequest from '../request/AjaxRequest';
import BaseClass from '../applications/BaseClass';

export default class RemoteEndPoint extends BaseClass {

    __dataMap: any[] = [];
    __callback: any;

    // request
    requestStatus = true;

    props: any = {
        idField: 'id',
        processor: null,
        type: 'POST',
        originUrl: null,
        method: '',
        endPoint: 'remoteEndPoint',
        responseData: '',
        params: null
    };

    constructor(props: Object, callback: any) {
        super(props);
        this.props = Application.mergeObject(this.props, props);
        this.__callback = callback;

        this.call();
    };

    /**
     * Remote ajax call 
     * @param callback 
     */
    call(callback?:any) {
        if (this.props.url !== null && this.requestStatus) {
            this.requestStatus = false;
            let getData = new AjaxRequest(this.props, (response: any) => {
                this.callbackReady(response)

                if(callback !== undefined) {
                    callback();
                }
            });
            getData.call();
        }
    }

    /**
     * General callback ready 
     * @param response 
     */
    callbackReady(response: any) {
        this.requestStatus = false;
        if (this.__callback !== undefined && response !== undefined) {
            this.__dataMap = response[this.props.responseData];
            this.__callback(response[this.props.responseData]);
        }
    }

    /**
     * Data read
     * @param callback 
     */
    read(callback?:any) {
        if (this.props.url !== undefined) {
            this.reset();

            this.call(callback);
        }
        return this.__dataMap;
    }

    /**
     * reset 
     * @param successCallback 
     */
    reset(callback?: any) {
        this.__dataMap = [];

        if (callback !== undefined) {
            callback();
        }

        return this.__dataMap;
    }


    create(item: any, props:any, successCallback?: any, errorCallback?: any) {
        if(item !== undefined && item.length > 0){
            this.requestStatus = false;
            this.props['params'] = item;

            if(successCallback !== undefined){
                this.props['successCallback'] = successCallback;
            }

            if(errorCallback !== undefined){
                this.props['errorCallback'] = successCallback;
            }

            let getData = new AjaxRequest(this.props, (response: any) => {
                this.callbackReady(response)
            });
            getData.call();
        }
    }

    update(item: any, successCallback?: any, errorCallback?: any) {

        if(item !== undefined && item.length > 0){
            this.requestStatus = false;
            this.props['params'] = item;

            if(successCallback !== undefined){
                this.props['successCallback'] = successCallback;
            }

            if(errorCallback !== undefined){
                this.props['errorCallback'] = successCallback;
            }

            let getData = new AjaxRequest(this.props, (response: any) => {
                this.callbackReady(response)
            });
            getData.call();
        }
    }

    delete(item: any, props:any, successCallback?: any, errorCallback?: any) {
        if(props !== undefined){
            this.props = Application.mergeObject(this.props, props);
        }else if(props['type'] === undefined && props === undefined) {
            this.props['type'] = 'DELETE';
        }

        if(item !== undefined && item.length > 0){
            this.requestStatus = false;
            this.props['params'] = item;

            if(successCallback !== undefined){
                this.props['successCallback'] = successCallback;
            }

            if(errorCallback !== undefined){
                this.props['errorCallback'] = successCallback;
            }

            let getData = new AjaxRequest(this.props, (response: any) => {
                this.callbackReady(response)
            });
            getData.call();
        }
    }

    /**
     * order sort 
     * @param fieldName 
     * @param callback 
     */
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

    /**
     * order reverse
     * @param fieldName 
     * @param callback 
     */
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

    /**
     * old data
     * @param callback 
     */
    oldDataSort(callback?:any){
        this.read(callback);
    }

    /**
     * filters 
     * @param fieldName 
     * @param value 
     * @param callback 
     */
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
