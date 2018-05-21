import Application from '../applications/Applications';
import LocalEndPoint from '../store/LocaleEndPoint';
import RemoteEndPoint from '../store/RemoteEndPoint';

export default class Store {

    props:object | any = {
        idField: "oid",
        data:[],
        url: "",
        endPoint: null
    };

    __dataMap:any[];
    callback:any;

    constructor(props:object, callback?:any){
        this.props = Application.mergeObject(this.props, props);
        this.callback = callback;
        this.endPoint();
    }


    endPoint(){
        if(this.props.data.length > 0){
            this.props.endPoint = new LocalEndPoint({
                data : this.props.data
            }, (response)=>{this.endPointCallback(response)});
        }else if(this.props.url !== undefined) {
            this.props.endPoint = new RemoteEndPoint({
                url : this.props.url
            },this.endPointCallback)
        }
    }

    endPointCallback(response:any){
        if(response !== undefined && this.callback !== undefined){
            this.__dataMap = response;
            this.callback(response);
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