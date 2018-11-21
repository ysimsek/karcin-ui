export interface basicObject {
    [key: string]: string | any;
}
export default class Applications {
    ajaxUrl: any;
    constructor(props?: any);
    /**
     * merge object 'Object.assign' similar
     * @param {object} mainObj
     * @param {object} mergeObj
     * @returns {{}}
     */
    static mergeObject(mainObj: basicObject, mergeObj: basicObject): basicObject;
    setAjaxCall(callback: any): void;
    setUrl(url: any): void;
    ajaxCallback(response?: any): void;
}
