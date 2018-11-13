import * as React from 'react';
export interface LoadingProps {
    show?: boolean | any;
    size?: string | any;
    className?: string | any;
}
export default class Loading extends React.Component<LoadingProps, any> {
    static defaultProps: Partial<LoadingProps>;
    constructor(props: LoadingProps);
    UNSAFE_componentWillReceiveProps(props: LoadingProps): void;
    render(): JSX.Element;
}
