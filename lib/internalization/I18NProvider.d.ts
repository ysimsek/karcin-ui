import * as React from "react";
export interface i18nProps {
    /**
     * language model type
     * {
     *      name : "en",
     *      messages : {
     *          "message":"Default Message"
     *      }
     * }
     */
    language: any;
}
export default class I18NProvider extends React.Component<i18nProps> {
    render(): JSX.Element | undefined;
}
