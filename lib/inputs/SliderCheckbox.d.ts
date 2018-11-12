import * as React from 'react';
export interface SliderCheckboxProps {
    successIcon?: string | any;
    rejectIcon?: string | any;
}
export interface SliderCheckboxState {
    checked?: boolean;
}
export default class SliderCheckbox extends React.Component<SliderCheckboxProps, SliderCheckboxState> {
    constructor(props: SliderCheckboxProps);
    render(): JSX.Element;
    toggleChange(): void;
}
