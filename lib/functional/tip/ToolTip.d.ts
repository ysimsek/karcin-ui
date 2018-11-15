import * as React from "react";
export interface ToolTipProps {
    /**
     * 'auto',
     'auto-start',
     'auto-end',
     'top',
     'top-start',
     'top-end',
     'right',
     'right-start',
     'right-end',
     'bottom',
     'bottom-start',
     'bottom-end',
     'left',
     'left-start',
     'left-end',
     */
    position?: string | any;
    /**
     * Up element id
     */
    id?: string | HTMLElement;
    /**
     * True or false in toogle
     */
    show?: boolean;
    /**
     * Return function
     */
    toggle?: any;
}
export default class ToolTip extends React.Component<any, any> {
    static defaultProps: Partial<ToolTipProps>;
    render(): JSX.Element;
    toggle(e: any): void;
}
