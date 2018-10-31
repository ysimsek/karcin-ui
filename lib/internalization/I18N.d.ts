import * as React from "react";
export interface I18NInterface {
    /**
     * Set the string id
     */
    id?: string | any;
    /**
     * {name : value}
     */
    setValues?: any;
}
export default class I18N extends React.Component<I18NInterface> {
    render(): JSX.Element;
}
