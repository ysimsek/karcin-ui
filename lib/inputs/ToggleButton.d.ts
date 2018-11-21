import * as React from 'react';
export interface ToggleButtonProps {
    successIcon?: string | any;
    rejectIcon?: string | any;
    onChange?: React.EventHandler<any> | any;
    name?: string | any;
    label?: string | any;
    labelPosition?: string | any;
}
export interface ToggleButtonState {
    checked?: boolean;
}
export default class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
    /**
     * Initial values
     * @param {ToggleButtonProps} props
     */
    constructor(props: ToggleButtonProps);
    /**
     * @returns {any}
     */
    render(): any;
    /**
     * Change the state
     */
    toggleChange(): void;
    /**
     * return eventValues
     */
    propsOnChange(): void;
}
