import Application from '../applications/Applications';
import LocalEndPoint from '../store/LocaleEndPoint';
import RemoteEndPoint from '../store/RemoteEndPoint';

export default class Store {

    props: object | any = {
        idField: "oid",
        data: [],
        originUrl: null,
        endPoint: null,
        responseData: null,
        processor: null,
        type: 'GET',
        method: null,
    };

    __dataMap?: any[];
    __callback?: any;
    __updated?: boolean = false;
    __component?: any;
    __order?:any;
    __oldData?:any[];

    constructor(props: object, selfComponent?: any, callback?: any, updated?: boolean) {
        this.props = Application.mergeObject(this.props, props);

        this.__callback = callback;
        this.__component = selfComponent;
        this.endPoint();

    }

    /**
     * Endpoint control
     */
    endPoint() {
        if (this.props.processor !== undefined || this.props.originUrl !== undefined) {
            // get endpoint
            this.props.endPoint = new RemoteEndPoint(this.props, (response: any) => {
                this.endPointCallback(response)
            });
        }else {
            // old data
            this.__oldData = this.props.data.slice(0);

            // get endpoint
            this.props.endPoint = new LocalEndPoint(this.props, (response: any) => {
                this.endPointCallback(response);
            });
        }
    }

    /**
     * Store read
     * @param callback 
     */
    read(callback?:any) {
        this.props.endPoint.read(this.props, (data:any)=>{
            console.log(data);
        });
        this.__callback(this.props.data);

        if(callback !== undefined)
            callback(this.props.data);
    }

    /**
     * Endpoint callback
     * @param response 
     */
    endPointCallback(response: any) {
        if (response !== undefined) {
            this.props.data = response;
        }

        if (this.__callback !== undefined) {
            this.__callback(response);
        }
    }

    /**
     * Create
     * @param item 
     * @param successCallback 
     * @param errorCallback 
     */
    create(items: any, successCallback?: any, errorCallback?: any) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.create(items, successCallback, errorCallback);
            this.__callback(this.__dataMap);
        }
    }

    /**
     * Update
     * @param items 
     * @param successCallback 
     * @param errorCallback 
     */
    update(items: any, callback?: any) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.update(items, callback);
            this.__callback(this.__dataMap);
        }
    }


    /**
     * Delete
     * @param items 
     * @param successCallback 
     * @param errorCallback 
     */
    delete(items: any, callback?: any) {
        if (items !== undefined && items.length > 0) {
            this.props.endPoint.delete(items, callback);
            this.__callback(this.__dataMap);
        }
    }

    /**
     * Reset
     * @param successCallback 
     */
    reset(callback?: any) {
        this.__callback(this.__dataMap);
        return this.props.endPoint.reset(callback);
    }

    /**
     * Order sort data
     * @param fieldName 
     * @param callback 
     */
    orderSort(fieldName: any, callback?:any) {
        if (fieldName !== undefined) {
            this.props.endPoint.orderSort(fieldName, (data: any) => {
                this.orderCallback(data, 'ASC', fieldName, callback);
            });
        } else {
            throw new Error('Field name empty');
        }
    }

    /**
     * Order reverse data
     * @param fieldName 
     * @param callback 
     */
    orderReverse(fieldName: any, callback?:any) {
        if (fieldName !== undefined) {
            this.props.endPoint.orderReverse(fieldName, (data: any) => {
                this.orderCallback(data, 'DESC', fieldName, callback); 
            });
        } else {
            throw new Error('Field name empty');
        }
    }

    /**
     * Sort get old data
     * @param fieldName 
     * @param callback 
     */
    oldDataSort(fieldName:any, callback?:any){
        this.props.endPoint.oldDataSort((data:any)=>{
            this.orderCallback(data, '', fieldName, callback);

            if(callback !== undefined) {
                callback(data);
            }
        });
    }

    /**
     * Order callback data
     * @param data 
     * @param order 
     * @param fieldName 
     * @param callback 
     */
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

    /**
     * filters
     * @param fieldName 
     * @param value 
     * @param callback 
     */
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