import Application from '../applications/Applications';
import LocalEndPoint from '../store/LocaleEndPoint';
import RemoteEndPoint from '../store/RemoteEndPoint';

export default class Store {

    props: object | any = {
        idField: "oid",
        data: [],
        oldData: [],
        url: "",
        endPoint: null,
        order: null,
        responseData: '',

    };

    __dataMap?: any[];
    __callback?: any;
    __updated?: boolean = false;
    __component?: any;
    __order?:any;

    constructor(props: object, selfComponent?: any, callback?: any, updated?: boolean) {
        this.props = Application.mergeObject(this.props, props);
        // old data
        this.props.oldData = this.props.data.slice(0);

        this.__callback = callback;
        this.__component = selfComponent;
        this.endPoint();

    }


    endPoint() {
        if (this.props.data !== undefined) {
            this.props.endPoint = new LocalEndPoint({
                data: this.props.data
            }, (response: any) => {
                this.endPointCallback(response)
            });
        } else if (this.props.url !== undefined) {
            this.props.endPoint = new RemoteEndPoint({
                url: this.props.url,
                responseData: this.props.responseData
            }, (response: any) => {
                this.endPointCallback(response)
            })
        }
    }

    read(callback?:any) {
        this.props.data = this.props.endPoint.read(this.props.data);
        this.__callback(this.props.data);

        if(callback !== undefined)
            callback(this.props.data);
    }

    endPointCallback(response: any) {
        if (response !== undefined) {
            this.props.data = response;
        }

        if (this.__callback !== undefined) {
            this.__callback(response);
        }
    }

    create(item: any, successCallback?: any, errorCallback?: any) {
        if (item !== undefined) {
            this.props.endPoint.create(item, successCallback, errorCallback);
        }
    }

    reset(successCallback?: any) {
        return this.props.endPoint.reset(successCallback);
    }

    update(items: any, successCallback?: any, errorCallback?: any) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.update(items, successCallback, errorCallback);
        }
    }

    orderSort(fieldName: any, callback?:any) {
        if (fieldName !== undefined) {
            this.props.endPoint.orderSort(fieldName, (data: any) => {
                this.orderCallback(data, 'ASC', fieldName, callback);
            });
        } else {
            throw new Error('Field name empty');
        }
    }

    orderReverse(fieldName: any, callback?:any) {
        if (fieldName !== undefined) {
            this.props.endPoint.orderReverse(fieldName, (data: any, order: any, fieldName: any) => {
                this.orderCallback(data, 'DESC', fieldName, callback);
            });
        } else {
            throw new Error('Field name empty');
        }
    }

    oldDataSort(fieldName:any, callback?:any){
        this.props.endPoint.oldDataSort((data:any)=>{
            this.orderCallback(data, '', fieldName, callback);

            if(callback !== undefined) {
                callback(data);
            }
        });
    }

    orderCallback(data: any, order: any, fieldName: any, callback?:any) {
        if (data !== undefined && data.length > 0) {
            this.props.data = data;
            this.__order = {order: order, value: fieldName};
            this.__dataMap = data;
            this.__callback();

            if(callback !== undefined)
                callback(data);
        }
    }

    filter(fieldName: any, value: any, callback?:any) {
        if (fieldName !== undefined) {
            this.props.endPoint.filter(fieldName, value, (data:any)=>{
                this.props.data = data;
            });
        } else {
            throw new Error('Field name empty')
        }
    }


}