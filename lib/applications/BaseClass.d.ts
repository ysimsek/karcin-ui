export default class BaseClass {
    constructor(props: any);
    bindAll(instance: any): void;
    response(callback?: any, callbackData?: any, count?: any): any;
    static mappingDataFind(response: any, mapping: any): any;
    static findResponseData(response: any, mapping: any): any;
}
