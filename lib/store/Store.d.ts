export default class Store {
    props: object | any;
    __dataMap?: any[];
    __callback?: any;
    __updated?: boolean;
    __component?: any;
    __order?: any;
    __page: any;
    __oldData?: any[];
    __endPoint: any;
    constructor(props: object, selfComponent?: any, callback?: any, updated?: boolean);
    /**
     * component load run
     */
    storeRead(): void;
    /**
     * Endpoint control
     */
    endPoint(): void;
    /**
     * Endpoint callback
     * @param response
     */
    endPointCallback(response: any): void;
    /**
     * Store read
     * @param callback
     */
    read(callback?: any): void;
    /**
     * Create
     * @param item
     * @param successCallback
     * @param errorCallback
     */
    create(items: any, callback?: any): void;
    /**
     * Update
     * @param items
     * @param successCallback
     * @param errorCallback
     */
    update(items: any, callback?: any): void;
    /**
     * Delete
     * @param items
     * @param successCallback
     * @param errorCallback
     */
    delete(items: any, callback?: any): void;
    /**
     * Reset
     * @param successCallback
     */
    reset(callback?: any): any;
    /**
     * Order sort data
     * @param fieldName
     * @param callback
     */
    orderSort(fieldName: any, callback?: any): void;
    /**
     * Order reverse data
     * @param fieldName
     * @param callback
     */
    orderReverse(fieldName: any, callback?: any): void;
    /**
     * Sort get old data
     * @param fieldName
     * @param callback
     */
    oldDataSort(fieldName: any, callback?: any): void;
    /**
     * Order callback data
     * @param data
     * @param order
     * @param fieldName
     * @param callback
     */
    orderCallback(data: any, order: any, fieldName: any, callback?: any): void;
    /**
     * filters
     * @param fieldName
     * @param value
     * @param callback
     */
    filter(fieldName: any, value: any, operator?: any, callback?: any): void;
    /**
     * Set Filters
     * @param filters
     */
    setFilters(filters: any): void;
    /**
     * Reset Filters
     */
    resetFilters(): void;
    /**
     * data page
     * @param page
     * @param pageShow
     */
    pagination(pageShow: any, page?: any): void;
}
