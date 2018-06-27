import Application from '../applications/Applications';
import BaseClass from '../applications/BaseClass';

export default class LocaleEndPoint extends BaseClass {

    __dataMap:any[] = [];
    __oldDataMap:any[] = [];
    __callback:any;

    props:any = {
        data: [],
        idField: 'id',
        endPoint:'localEndPoint'
    };

    constructor(props:Object, callback:any){
        super(props);
        this.props = Application.mergeObject(this.props, props);
        this.__callback = callback;
        this.read(); 
    }

    /**
     * read data
     * @param callback 
     */
    read(callback?:any){
        this.__oldDataMap = this.__dataMap.slice(0);

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
        let orderData = this.__dataMap.slice();

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
        if(callback !== undefined){
            callback(this.__oldDataMap);
        }

        return this.response(callback);
    }

    /**
     * order reverse data
     * @param fieldName 
     * @param callback 
     */
    orderReverse(fieldName:any, callback?:any){
        let orderData:any[] = [];
        this.orderSort(fieldName, (data:any)=>{
            orderData = data.reverse();
        });

        return this.response(callback, orderData);
    }

    /**
     * filter data
     * @param fieldName 
     * @param value 
     * @param callback 
     */
    filter(fieldName:any, value:any, callback?:any){

        let data:any = this.__dataMap.filter((val:any, index:any)=>{
            if(val[fieldName].toUpperCase().indexOf(value.toUpperCase()) !== -1){
                return val;
            }
        });

        return this.response(callback, data);
    }
}