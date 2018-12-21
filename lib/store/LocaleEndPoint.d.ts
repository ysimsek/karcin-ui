import BaseClass from '../applications/BaseClass';
export default class LocaleEndPoint extends BaseClass {
    __dataMap: any[];
    __totalCount: any;
    __oldDataMap: any[];
    __callback: any;
    __paging: any;
    props: any;
    constructor(props: Object, callback: any);
    mergeProps(props: any): void;
    /**
     * read data
     * @param callback
     */
    read(props: Object | any, callback?: any): any;
    /**
     * reset data
     * @param callback
     */
    reset(callback?: any): any;
    /**
     * create data
     * @param item
     * @param successCallback
     * @param errorCallback
     */
    create(items: any, callback?: any): any;
    /**
     * update data
     * @param items
     * @param successCallback
     * @param errorCallback
     */
    update(items: any, callback?: any): any;
    delete(items: any, callback?: any): any;
    /**
     * order sort data
     * @param fieldName
     * @param callback
     */
    orderSort(fieldName: any, callback?: any): any;
    /**
     * old data
     * @param callback
     */
    oldDataSort(callback?: any): any;
    /**
     * order reverse data
     * @param fieldName
     * @param callback
     */
    orderReverse(fieldName: any, callback?: any): any;
    /**
     * filter data
     * @param fieldName
     * @param value
     * @param callback
     */
    filter(fieldName: any, value: any, operator: any, callback?: any): any;
    setFilters(filters: any, callback?: any): any;
    resetFilters(callback?: any): any;
    paging(pageData: any): any;
}
