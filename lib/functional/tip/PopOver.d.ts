import * as React from "react";
export interface PopOverProps {
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
    id: string | HTMLElement;
    /**
     * True or false in toogle
     */
    show?: boolean;
    /**
     * Return function
     */
    toggle?: any;
    /**
     * Set the message title
     */
    title?: string | JSX.Element[];
}
export default class PopOver extends React.Component<PopOverProps, any> {
    static defaultProps: Partial<PopOverProps>;
    render(): JSX.Element;
    toggle(e: any): void;
}
