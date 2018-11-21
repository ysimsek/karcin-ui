declare class i18n {
    private data;
    addLanguageData(data: any): void;
    message(id: any, value?: any): any;
    getLanguageData(): any;
    replace(str: any, obj: any): any;
}
declare const _default: i18n;
export default _default;
