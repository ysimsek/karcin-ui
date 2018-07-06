import Application from '../applications/Applications';
import AjaxRequest from '../request/AjaxRequest';
import BaseClass from '../applications/BaseClass';

export default class RemoteEndPoint extends BaseClass {

    __dataMap: any[] = [];
    __callback: any;
    __filters:any[] = [];
    __orders:any[] = [];
    __paging:any = {start:0, limit:0};

    // request
    requestStatus = true;

    props: any = {
        idField: 'id',
        processor: null,
        type: null,
        url: null,
        method: 'findAll',
        endPoint: 'remoteEndPoint',
        responseData: 'data',
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

            let data:any = {};

            // filters object
            if(this.__filters.length > 0){
                data['filters'] = this.__filters;
            }

            // orders object
            if(this.__orders.length > 0){
                data['orders'] = this.__orders;
            }

            // pagination object
            for(let item in this.__paging){
                data[item] = this.__paging[item];
            }

            this.props.data = [];
            this.props.data.push(data);

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
        this.__dataMap = [];
        this.__orders  = [];
        this.__filters = [];
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
            this.props.method = "deleteById";
            for(let item in items){
                this.props.data.push(item);
            }
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
            this.props.method = "findByFilters";

            if(this.__orders.length > 0){
                let control = false;
                this.__orders.forEach((value:any, index:any)=>{
                    if(value['property'] === fieldName){
                        control = true;
                        value['orderType'] = 'ASC';
                    }
                    this.__orders[index] = value;
                })

                if(!control){
                    this.__orders.push({"property": fieldName, "orderType": 'ASC'});
                }
            }else {
                this.__orders.push({"property": fieldName, "orderType": 'ASC'});
            }
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
            this.props.method = "findByFilters";

            if(this.__orders.length > 0){
                let control = false;
                this.__orders.forEach((value:any, index:any)=>{
                    if(value['property'] === fieldName){
                        control = true;
                        value['orderType'] = 'DESC';
                    }
                    this.__orders[index] = value;
                })

                if(!control){
                    this.__orders.push({"property": fieldName, "orderType": 'DESC'});
                }
            }else {
                this.__orders.push({"property": fieldName, "orderType": 'DESC'});
            }
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
        this.reset();
        this.read(callback);
    }

    /**
     * filters 
     * @param fieldName 
     * @param value 
     * @param callback 
     */
    filter(fieldName: any, value: any, operator: any, callback:any) {
        if (fieldName !== undefined && value !== undefined && operator !== undefined) {
            this.props.method = "findByFilters";
            if(this.__filters.length > 0){
                let control = false;
                this.__filters.forEach((value:any)=>{
                    if(value['property'] === fieldName && value['value'] === value && value['operator'] === operator){
                        control = true;
                    }
                })
                if(!control){
                    this.__filters.push({"property": fieldName, "value": value, "operator" : operator});
                }
            }else {
                this.__filters.push({"property": fieldName, "value": value, "operator" : operator});
            }
            this.call(callback);
        } else {
            throw new Error('Field name empty');
        }
    }

    paging(pageData:any, callback?:any){
        if(pageData !== undefined){
            for(let item in pageData){
                this.__paging[item] = pageData[item];
            }
            this.call(callback);
        }
    }
}
