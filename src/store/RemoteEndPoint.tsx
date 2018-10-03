import Application from '../applications/Applications';
import AjaxRequest from '../request/AjaxRequest';
import BaseClass from '../applications/BaseClass';
import { error } from 'util';

export default class RemoteEndPoint extends BaseClass {

    __dataMap: any[] = [];
    __callback: any;
    __filters:any[] = [];
    __orders:any[] = [];
    __paging:any = {start:0, limit:0};
    __totalCount:any = null;

    // request
    requestStatus = true;
    standartMethod = "findByFilters";

    props: any = {
        idField: 'id',
        processor: null,
        type: null,
        url: null,
        method: 'findByFilters',
        endPoint: 'remoteEndPoint',
        responseData: 'data.resultMap.data.data',
        pageTotalData: 'data.resultMap.data.count',
        data: []
    };

    constructor(props: Object, callback: any) {
        super(props);
        this.props = Application.mergeObject(this.props, props);
        this.__callback = callback;

        this.paging();
        this.call();
    };

    /**
     * Remote ajax call 
     * @param callback 
     */
    call(callback?:any, item?:any) {
        if (this.props.processor !== undefined && this.requestStatus) {
            this.requestStatus = false;

            let data:any = {};

            if(item !== undefined){

                data = item;

            }else{
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
            }

            this.props.data = [];
            this.props.data.push(data);
            this.props.method = (this.props.method !== null ? this.props.method : this.standartMethod);

            let getData = new AjaxRequest(this.props, (response: any) => {
                this.callbackReady(response, callback, item);
            });
            getData.call();
        }
    }

    /**
     * General callback ready 
     * @param response 
     */
    callbackReady(response: any, callback?:any, items?:any) {
        this.requestStatus = true;
        if(items === undefined){
            let dataFind    = this.mappingDataFind(response, this.props.responseData);
            let totalCount  = this.mappingDataFind(response, this.props.pageTotalData);

            if(response !== undefined){
                try{
                    if(dataFind !== undefined){
                        this.props.data = dataFind;
                        this.__totalCount = totalCount;
                        
                        return this.response(callback, undefined, totalCount);
                    }else {
                        throw "reponse or responseData not undefined";
                    }
                }catch(err){
                    throw new Error(err);
                }
            }else {
                throw new Error('response empty!');
            }
        }else {
            return this.response(callback);
        }
        
    }

    

    /**
     * Data read
     * @param callback 
     */
    read(callback?:any) {
        if (this.props.processor !== undefined && this.props.method !== undefined) {
            this.props.method = null;
            this.call(callback);
        }
    }

    /**
     * reset 
     * @param successCallback 
     */
    reset(callback?: any) {
        this.__dataMap = [];
        return this.response(callback);
    }


    create(items: any, callback?:any) {
        if(items !== undefined){
            this.props.method = "add";
            this.call(() => {
                this.read();
                
                if(callback !== undefined){
                    callback();
                }
            }, items);
        }
    }

    update(items: any, callback?:any) {
        if(items !== undefined){
            this.props.method = "update";
            this.call(() => {
                this.read();
                callback();
            }, items);
        }
    }

    delete(items: any, callback?:any) {
        if(items !== undefined){
            this.props.method = "deleteById";
            this.call(() => {
                this.read();
                callback();
            }, items);
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
        this.__orders = [];
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
                this.__filters.forEach((val:any, index:number)=>{
                    if(val['property'] === fieldName && val['operator'] === operator){
                        control = true;
                        this.__filters[index]['value'] = value;
                    }
                });

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

    paging(type?:any){
        if(this.props.pageData !== undefined){
            for(let item in this.props.pageData){
                this.__paging[item] = this.props.pageData[item];
            }

            if(type !== undefined && type){
                this.call();
            }
        }
    }
}
