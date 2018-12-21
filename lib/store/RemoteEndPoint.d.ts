import BaseClass from '../applications/BaseClass';
export default class RemoteEndPoint extends BaseClass {
    __dataMap: any[];
    __callback: any;
    __filters: any[];
    __orders: any[];
    __paging: any;
    __totalCount: any;
    requestStatus: boolean;
    runMethod: any;
    props: any;
    constructor(props: Object, callback: any);
    mergeProps(props: Object | any): void;
    /**
     * Remote ajax call
     * @param callback
     */
    call(callback?: any, item?: any): void;
    /**
     * General callback ready
     * @param response
     */
    callbackReady(response: any, callback?: any, items?: any): any;
    /**
     * Data read
     * @param callback
     */
    read(props: Object | any, callback?: any): void;
    /**
     * reset
     * @param successCallback
     */
    reset(callback?: any): any;
    create(items: any, callback?: any): void;
    update(items: any, callback?: any): void;
    delete(items: any, callback?: any): void;
    propsChanges(props: Object | any): void;
    /**
     * order sort
     * @param fieldName
     * @param callback
     */
    orderSort(fieldName: any, callback: any): void;
    /**
     * order reverse
     * @param fieldName
     * @param callback
     */
    orderReverse(fieldName: any, callback: any): void;
    /**
     * old data
     * @param callback
     */
    oldDataSort(callback?: any): void;
    /**
     * filters
     * @param fieldName
     * @param value
     * @param callback
     */
    filter(fieldName: any, value: any, operator: any, callback: any): void;
    /**
     * set Filtes
     */
    setFilters(filters: any): void;
    /**
     * reset filters
     */
    resetFilters(): void;
    paging(pageData?: any, type?: any): void;
}
