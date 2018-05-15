import Application from '../applications/Applications';

export default class Store {

    props:object | any = {
        idField: "oid",
        autoLoad: false,
        importer: (response: any): any => {
            return response;
        },
        result: {
            data: [],
            totalCount: 0
        },
        endPoint: null
    };

    __dataMap = [];

    constructor(props:object){
        this.props = Application.mergeObject(this.props, props);

        this.endPoint();
    }


    endPoint(){
        if(this.props.endPoint !== undefined){
            this.__dataMap = this.props.endPoint;
        }
    }


    create(item:any, successCallback?:any, errorCallback?:any){
        if(item !== undefined){
            return this.props.endPoint.create(item, successCallback, errorCallback);
        }
    }

    reset(successCallback?:any){
        return this.props.endPoint.reset(successCallback);
    }

    update(items:any, successCallback?:any, errorCallback?:any){
        if(items !== undefined && items.length > 0){
            return this.props.endPoint.update(items, successCallback, errorCallback);
        }
    }


}