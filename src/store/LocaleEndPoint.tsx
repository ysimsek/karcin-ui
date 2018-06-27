import Application from '../applications/Applications'

export default class LocaleEndPoint {

    __dataMap:any[] = [];
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

    read(){
        if(this.props.data !== undefined && this.props.data.length > 0){
            this.reset();

            this.props.data.forEach((value:any)=>{
               this.create(value)
            });
        }

        this.__callback(this.__dataMap);
        return this.__dataMap;
    }

    reset(successCallback?:any){
        this.__dataMap = [];

        if(successCallback !== undefined) {
            successCallback()
        }

        return this.__dataMap;
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

        return this.__dataMap;
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

        return this.__dataMap;
    }

    orderSort(fieldName:any){
         this.__dataMap.sort((first:any, last:any) => {
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

        return this.__dataMap;
    };

    orderReverse(fieldName:any){
        this.__dataMap = this.orderSort(fieldName);
        this.__dataMap.reverse();

        return this.__dataMap;
    }

    filter(fieldName:any, value:any){
        let data:any = this.__dataMap.filter((val:any, index:any)=>{
            if(val[fieldName].toUpperCase().indexOf(value.toUpperCase()) !== -1){
                return val;
            }
        });
        return data;
    }

    paging(page:any){

    }
}