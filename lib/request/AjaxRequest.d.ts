import Application from '../applications/Applications';
export interface basicObject {
    [key: string]: string | any;
}
export default class AjaxRequest extends Application {
    ajaxCallControl: boolean;
    props: basicObject;
    ajaxProps: basicObject;
    constructor(props?: Object, callback?: any);
    ajaxPropsMerge(): void;
    /**
     * call method
     */
    call(): void;
    afterToken(token?: any): any;
    beforeToken(): void;
}
