import * as React from "react";
export interface ProgressProps {
    /**
     * Default false
     */
    striped?: boolean;
    /**
     * Default false
     */
    animated?: boolean;
    /**
     * Default false
     */
    bar?: boolean;
    /**
     * show the more than one progress
     */
    multi?: boolean;
    /**
     * Primary,secondary, success, info, warning, danger
     */
    color?: string;
    /**
     * Set the show value
     */
    value?: string | any;
    /**
     * You can not use multi child elements
     */
    title?: string | any;
    max?: number | string;
}
export default class Progress extends React.Component<ProgressProps, any> {
    render(): any;
    reRender(data: any): JSX.Element[];
}
