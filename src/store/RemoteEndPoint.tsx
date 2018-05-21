import Application from '../applications/Applications';
import AjaxRequest from '../request/AjaxRequest';

export default class RemoteEndPoint {

    __dataMap:any[] = [];
    __callback:any;

    // request
    requestStatus = true;

    props:any = {
        url: null,
        idField: 'id',
        method: 'POST'
    };

    constructor(props:Object, callback:any){
        this.props = Application.mergeObject(this.props, props);
        this.__callback = callback;

        this.call();
    };

    call(){
        if(this.props.url !== null && !this.requestStatus){
            this.requestStatus = false;
            new AjaxRequest({
              url: this.props.url,
              method: this.props.method
          }, this.callbackReady)
      }
    }

    callbackReady(response:any){
        this.requestStatus = false;

        if(response !== undefined){
            this.__callback(response);
        }
    }

    read(){
        if(this.props.url !== undefined){
            this.reset();

            this.call();
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

    }

    update(items:any, successCallback?:any, errorCallback?:any){

    }
}