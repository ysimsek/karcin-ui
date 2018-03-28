/// <reference types="react" />
import * as React from "react";
export interface SelectInputProps {
    items: Array<any>;
    value?: string;
    id?: string;
    label?: string;
    labelPosition?: string;
    name?: string;
    onChange?: any;
    item?: Object;
}
export default class SelectInput extends React.Component<SelectInputProps> {
    static defaultProps: Partial<SelectInputProps>;
    cssStyles: any;
    static position: string;
    constructor(props: any);
    render(): JSX.Element;
    __renderOptionValues(items: Array<any>): JSX.Element[];
    /**
     * Enums.labelPosition içerisindeki değerlerden birisi olabilir.
     * @param position
     * @returns {string}
     * @private
     */
    __renderLabelPosition(): any;
    /**
     * TODO : Call Component is undefined ?
     * @param {Object} e
     * @private
     */
    __handleChange(e: Object): void;
}
