

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

        //this.props.data = this.__dataMap;
        let parentClass = Object.assign(this);
        
        parentClass.__dataMap = parentClass.props.data;
        parentClass.__totalCount = count !== undefined ? count : parentClass.__dataMap.length;
        
        let callData = (callbackData !== undefined) ? callbackData : {'data' : parentClass.__dataMap, 'totalCount':parentClass.__totalCount};

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


    mappingDataFind(response:any,mapping:any) {
        return this.findResponseData(response,mapping.split('.'))
    }

    findResponseData(response:any,mapping:any) { 
        return mapping.length ? this.findResponseData(response[mapping[0]],mapping.slice(1)) : response;
    }
}