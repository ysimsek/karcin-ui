export interface basicObject {
    [key: string]: string | any;
}
export default class Applications {
    static ajaxCall: any;
    props: basicObject;
    constructor(props?: any);
    /**
     * merge object 'Object.assign' similar
     * @param {object} mainObj
     * @param {object} mergeObj
     * @returns {{}}
     */
    static mergeObject(mainObj: basicObject, mergeObj: basicObject): basicObject;
    ajaxCallback(response?: any): void;
}
