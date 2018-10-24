import Application from '../applications/Applications';
import BaseClass from '../applications/BaseClass';

export default class LocaleEndPoint extends BaseClass {

    __dataMap:any[] = [];
    __totalCount:any = 0;
    __oldDataMap:any[] = [];
    __callback:any;
    __paging:any = {start:0, limit:0};

    props:any = {
        data: [],
        idField: 'id',
        endPoint:'localPoint'
    };

    constructor(props:Object, callback:any){
        super(props);
        this.mergeProps(props);
        this.__callback = callback;
        this.read(props);
    }


    mergeProps(props:any){
        this.props = Application.mergeObject(this.props, props);
    }

    /**
     * read data
     * @param callback 
     */
    read(props:any, callback?:any){
        this.__oldDataMap = this.props.data.slice(0);
        this.mergeProps(props);
        return this.response(callback);
    }

    /**
     * reset data
     * @param callback 
     */
    reset(callback?:any){
        this.__dataMap = [];
        if(callback !== undefined) {
            callback()
        }
        return this.response(callback);
    }


    /**
     * create data
     * @param item 
     * @param successCallback 
     * @param errorCallback 
     */
    create(items:any, callback?:any){
        if(items !== undefined && items.length > 0){
            items.forEach((value:any)=>{
                this.__dataMap.push(value);
            });
            
            return this.response(callback);
        }

    }

    /**
     * update data
     * @param items 
     * @param successCallback 
     * @param errorCallback 
     */
    update(items:any, callback?:any){
        if(items !== undefined && items.length > 0){

            this.__dataMap.forEach((value:any, index:number)=>{
                items.forEach((values:any) => {
                    if(value[this.props.idField] === values[this.props.idField]){
                        this.__dataMap[index] = values;
                    }
                });
            });
            
            return this.response(callback);
        }

    }


    delete(items:any, callback?:any){
        if(items !== undefined && items.length > 0){
            this.__dataMap.forEach((value:any, index:number) => {
                items.forEach((values:any) => {
                    if(value[this.props.idField] === values[this.props.idField]){
                        this.__dataMap.splice(index, 1);
                    }
                });
            });

            return this.response(callback);
        }

    }

    /**
     * order sort data
     * @param fieldName 
     * @param callback 
     */
    orderSort(fieldName:any, callback?:any){
        let orderData = this.__dataMap.slice(0);

        orderData.sort((first:any, last:any) => {
            let firstName = first[fieldName].toUpperCase();
            let lastName = last[fieldName].toUpperCase();

            //
            if(firstName < lastName){
                return -1;
            }

            //
            if(firstName > lastName){
                return 1;
            }

            return 0;
        });

        return this.response(callback, orderData);
    };

    /**
     * old data 
     * @param callback 
     */
    oldDataSort(callback?:any){
        return this.response(callback, this.__oldDataMap);
    }

    /**
     * order reverse data
     * @param fieldName 
     * @param callback 
     */
    orderReverse(fieldName:any, callback?:any){
        let orderData:any[] = [];
        this.orderSort(fieldName, (data:any)=>{
            orderData = this.__dataMap.reverse();
        });

        return this.response(callback, orderData);
    }

    /**
     * filter data
     * @param fieldName 
     * @param value 
     * @param callback 
     */
    filter(fieldName:any, value:any, operator:any, callback?:any){
        let data:any;
        if(value !== "" && value !== null){
            data = this.__dataMap.filter((val:any, index:any)=>{
                if(val[fieldName].toUpperCase().indexOf(value.toUpperCase()) !== -1){
                    return val;
                }
            });
        }else {
            data = this.__oldDataMap.slice(0);
        } 

        return this.response(callback, data);
    }

    paging(){
        if(this.props.pageData !== undefined){
            for(let item in this.props.pageData){
                this.__paging[item] = this.props.pageData[item];
            }

            return this.response();
        }
    }
}