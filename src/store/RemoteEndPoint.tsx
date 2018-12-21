import Application from '../applications/Applications';
import AjaxRequest from '../request/AjaxRequest';
import BaseClass from '../applications/BaseClass';

export default class RemoteEndPoint extends BaseClass {

    __dataMap: any[] = [];
    __callback: any;
    __filters:any[] = [];
    __orders:any[] = [];
    __paging:any = {start:0, limit:0};
    __totalCount:any = null;

    // request
    requestStatus:boolean = true;
    runMethod:any;

    props: any = {
        idField: 'id',
        processor: null,
        type: null,
        url: null,
        param: [],
        filters: [],
        orders: [],
        method: 'findByFilters',
        readMethod : 'findByFilters',
        createMethod : 'add',
        updateMethod : 'update',
        deleteMethod : 'deleteById',
        endPointName: 'remoteEndPoint',
        responseData: 'data.resultMap.data.data',
        pageTotalData: 'data.resultMap.data.count',
        data: []
    };

    constructor(props: Object, callback: any) {
        super(props);
        this.mergeProps(props);
        this.__callback = callback;


        this.runMethod = this.props.method;
        this.paging(this.props.pageData, true);
        this.setFilters(this.props.filters);
        this.call();
    };


    mergeProps(props: Object | any){
        this.props = Application.mergeObject(this.props, props);
    }

    /**
     * Remote ajax call 
     * @param callback 
     */
    call(callback?:any, item?:any) {
        if (this.props.processor !== undefined && this.requestStatus) {
            this.requestStatus = false;

            let data:any = {};
            let param:any = this.props.param.length > 0 ? this.props.param[0] : null;

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

                if(param !== null){
                    for(let col in param){
                        data[col] = param[col];
                    }
                }

                // pagination object
                for(let item in this.props.pageData){
                    data[item] = this.props.pageData[item];
                }

            }

            this.props.data = [];
            this.props.data.push(data);
            this.props.method = this.runMethod;

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
        if(response.status !== undefined && response.status === 200 && items === undefined){
            let dataFind    = BaseClass.mappingDataFind(response, this.props.responseData);
            let totalCount  = BaseClass.mappingDataFind(response, this.props.pageTotalData);

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
            if(callback !== undefined){
                callback(response); 
            }
        }
        
    }

    /**
     * Data read
     * @param callback 
     */
    read(props:Object | any, callback?:any) {
        this.mergeProps(props);
        this.runMethod = this.props.readMethod; 
        this.call(callback);
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
            this.runMethod = this.props.createMethod; 
            this.call((response:any) => {
                if(callback !== undefined){
                    callback(response);
                }
            }, items);
        }
    }

    update(items: any, callback?:any) {
        if(items !== undefined){
            this.runMethod = this.props.updateMethod;
            this.call((response:any) => {
                callback(response);
            }, items);
        }
    }

    delete(items: any, callback?:any) {
        if(items !== undefined){
            this.runMethod = this.props.deleteMethod;
            this.call((response:any) => {
                callback(response);
            }, items);
        }
    }

    propsChanges(props:Object | any){
        for(let item in props){
            this.props[item] = props[item]
        }
    }

    /**
     * order sort 
     * @param fieldName 
     * @param callback 
     */
    orderSort(fieldName: any, callback: any) {
        if (fieldName !== undefined) {
            this.runMethod = this.props.readMethod;

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
            this.runMethod = this.props.readMethod;

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
            this.runMethod = this.props.readMethod;

            if(this.__filters.length > 0){
                let control = false;
                this.__filters.forEach((val:any, index:number)=>{
                    if(val['property'] === fieldName && val['operator'] === operator){
                        control = true;
                        this.__filters[index]['value'] = value;
                    }
                });

                if(!control){
                    this.__filters.push({"property": fieldName, "value": value, "operator" : operator, "index": 1});
                }
            }else {
                this.__filters.push({"property": fieldName, "value": value, "operator" : operator, "index": 1});
            }

            this.call(callback);
        } else {
            throw new Error('Field name empty');
        }
    }

    /**
     * set Filtes
     */

    setFilters(filters:any){
        if(filters.length > 0){
            filters.forEach((value:any, index:number)=>{
                if(value.fieldName && value.value && value.operator){
                    value['index'] = 1;
                    this.__filters.push(value);
                }else {
                    console.error('fieldName, value ve operatorlarından bir değer bulunamadı');
                }
            });
        }
    }

    /**
     * reset filters
     */
    resetFilters(){
        this.__filters = [];
    }

    paging(pageData?:any, type?:any){
        if(pageData !== undefined){
            for(let item in this.props.pageData){
                this.__paging[item] = pageData[item];
                this.props.pageData[item] = pageData[item];
            }

            if(type === undefined){
                this.call();
            }
        }
    }
}
