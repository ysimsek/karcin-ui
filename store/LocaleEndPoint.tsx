import Application from '../applications/Applications'
import {EventHandler} from "react";

export default class LocaleEndPoint {

    __dataMap:any = [];

    props:any = {
        data: [],
        idField: 'id',
    };

    constructor(props:Object){
        this.props = Application.mergeObject(this.props, props);

        this.read();
    }

    read(){
        if(this.props.data !== undefined && this.props.data.length > 0){
            this.reset();

            this.props.data.forEach((value)=>{
               this.create(value)
            });
        }

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
}