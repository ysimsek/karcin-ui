
export default class BaseClass {
    constructor(props:any){
        this.bindAll(this);
    }

    bindAll(instance:any) {
        let parent = Object.getPrototypeOf(instance);
    
        let bindedKeys:any[] = [];
        let constructorName = parent.constructor.name;

        if (parent === null) {
            return;
        }
        
        let names:any = Object.getOwnPropertyNames(parent);
        for (let i:number = 0; i < names.length; i += 1) {
                let name:any = names[i];
                if(typeof instance[name] === "function"){ 
                    if (!bindedKeys[name]) {
                        instance[name] = instance[name].bind(instance);
                        bindedKeys[name] = true;
                    }
                }
            
        }
        parent = Object.getPrototypeOf(parent);
        
    }

    response(callback?:any, callbackData?:any, count?:any){

        let parentClass = Object.assign(this);
        
        parentClass.__dataMap = parentClass.props.data;
        parentClass.__totalCount = count !== undefined ? count : parentClass.__dataMap.length; 

        let pageData:Array<any> | any = [];
        if(parentClass.props.endPointName === 'localPoint' && parentClass.props.pageData.limit !== undefined &&  parentClass.props.pageData.limit > 0){
                let pages = parentClass.props.pageData;
                let datas =  (callbackData !== undefined) ? callbackData : parentClass.__dataMap;

                for(let i = 0; i < datas.length; i++){
                    if(i >= pages.start && i < (pages.start + pages.limit)){
                        pageData.push(datas[i]); 
                    }
                }
        }
        
        let callData:any = [];

        if(callbackData !== undefined){
            let data = (pageData.length > 0) ? pageData : callbackData;
            callData = {'data': data, 'totalCount': callbackData.length};
        }else {
            let data = (pageData.length > 0) ? pageData : parentClass.__dataMap;
            callData = {'data': data, 'totalCount': parentClass.__totalCount};
        }

        if(parentClass.__callback !== undefined){
            parentClass.__callback(callData);
        }

        if(callback !== undefined){
            if(callbackData !== undefined){
                callback(callData);
            }else {
                callback(callData); 
            }
        }

        return parentClass.__dataMap; 
    }


    static mappingDataFind(response:any,mapping:any) {
        return BaseClass.findResponseData(response, mapping.split('.'))
    }

    static findResponseData(response:any,mapping:any):any {
        if(response !== (undefined || null) && mapping !== undefined && mapping.length > 0){
            return mapping.length > 0 ? response[mapping[0]] !== (null || undefined) ? BaseClass.findResponseData(response[mapping[0]], mapping.slice(1)) : null : response;
        }else {
            return response;
        }
    }
}