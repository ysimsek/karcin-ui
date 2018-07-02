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
        type: null,
        url: null,
        method: 'findAll',
        endPoint: 'remoteEndPoint',
        responseData: '',
        data: []
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
        if (this.props.processor !== undefined && this.requestStatus) {
            this.requestStatus = false;
            let getData = new AjaxRequest(this.props, (response: any) => {
                this.callbackReady(response, callback);
            });
            getData.call();
        }
    }

    /**
     * General callback ready 
     * @param response 
     */
    callbackReady(response: any, callback?:any) {
        this.requestStatus = true;
        if (response !== undefined) {
            this.__dataMap = response[this.props.responseData];
            return this.response(callback, response);
        }
    }

    /**
     * Data read
     * @param callback 
     */
    read(callback?:any) {
        if (this.props.url !== undefined) {
            this.call(callback);
        }
    }

    /**
     * reset 
     * @param successCallback 
     */
    reset(callback?: any) {
        this.props.data = [];

        return this.response(callback);
    }


    create(items: any, callback?:any) {
        if(items !== undefined && items.length > 0){
            this.requestStatus = false;
            this.props.method = "add";
            this.props.data = items;

            this.call(callback);
        }
    }

    update(items: any, callback?:any) {
        if(items !== undefined && items.length > 0){
            this.requestStatus = false;
            this.props.method = "update";
            this.props.data = items;

            this.call(callback);
        }
    }

    delete(items: any, callback?:any) {
        if(items !== undefined && items.length > 0){
            this.requestStatus = false;
            this.props.data = items;

            this.call(callback);
        }
    }

    /**
     * order sort 
     * @param fieldName 
     * @param callback 
     */
    orderSort(fieldName: any, callback: any) {
        if (fieldName !== undefined) {
            this.props.data.data['orders'] = [{"property": fieldName, "orderType": 'ASC'}];
            this.call(callback);
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
            this.props.data.data['orders'] = [{"property": fieldName, "orderType": 'DESC'}];
            this.call(callback);
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

    paging(pageData:any, callback?:any){
        if(pageData !== undefined){
            for(let item in pageData){
                this.props.s
            }
            this.call(callback);
        }
    }
}
