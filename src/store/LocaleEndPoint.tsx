import Application from '../applications/Applications'

export default class LocaleEndPoint {

    __dataMap:any[] = [];
    __oldDataMap:any[] = [];
    __callback:any;

    props:any = {
        data: [],
        idField: 'id',
        endPoint:'localEndPoint'
    };

    constructor(props:Object, callback:any){
        this.props = Application.mergeObject(this.props, props);
        this.__callback = callback;

        this.read();
    }

    read(callback?:any){
        let newData:any = this.props.data;
        if(newData !== undefined){
            this.reset();

            newData.forEach((value:any)=>{
               this.create(value)
            });
        }

        this.__callback(this.__dataMap);
        this.__oldDataMap = this.__dataMap.slice(0);

        if(callback !== undefined){
            callback(this.__dataMap);
        }
    }

    reset(successCallback?:any){
        this.__dataMap = [];

        if(successCallback !== undefined) {
            successCallback()
        }
    }


    create(item:any, successCallback?:any, errorCallback?:any){
        if(item !== undefined){
            this.__dataMap.push(item);
            let result = {
                data : this.__dataMap,
                totalCount: this.__dataMap.length
            };

            if(successCallback !== undefined) {
                successCallback(result);
            }
        }else {
            if(errorCallback !== undefined) {
                errorCallback('item not undefined');
            }
        }
    }

    update(items:any, successCallback?:any, errorCallback?:any){
        if(items !== undefined && items.length > 0){
            this.reset();

            this.__dataMap = items;
            let result = {
                data : this.__dataMap,
                totalCount: this.__dataMap.length
            };

            if(successCallback !== undefined) {
                successCallback(result);
            }
        }else {
            if(errorCallback !== undefined) {
                errorCallback('item not undefined');
            }
        }
    }

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

        if(callback !== undefined)
            callback(orderData);
    };

    oldDataSort(callback?:any){
        if(callback !== undefined)
            callback(this.__oldDataMap);
    }

    orderReverse(fieldName:any, callback?:any){
        let orderData:any[] = [];

        this.orderSort(fieldName, (data:any)=>{
            orderData = data.reverse();

        });

        if(callback !== undefined)
            callback(orderData, 'desc', fieldName);
    }

    filter(fieldName:any, value:any, callback?:any){

        let data:any = this.__dataMap.filter((val:any, index:any)=>{
            if(val[fieldName].toUpperCase().indexOf(value.toUpperCase()) !== -1){
                return val;
            }
        });

        if(callback !== undefined)
            callback(data);
    }
}