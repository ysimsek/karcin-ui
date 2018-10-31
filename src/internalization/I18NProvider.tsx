import* as  React from "react";
import {addLocaleData, FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, IntlProvider, intlShape} from "react-intl";
const tr = require("./files/TR.json");
const en = require("./files/EN.json");

import * as trLocalData from "react-intl/locale-data/tr";
import * as enLocalData from "react-intl/locale-data/en";

addLocaleData([...trLocalData, ...enLocalData]);


//Locale messages
export interface i18nProps  {
    /**
     * language model type
     * {
     *      name : "en",
     *      messages : {
     *          "message":"Default Message"
     *      }
     * }
     */
    language:any;
}
export default class I18NProvider extends React.Component<i18nProps>{

    render() {
        if(this.props.language.name == undefined){
            console.log("Model içerisinde language bulunamıyor");
            return;
        }
        if(this.props.language.message == undefined){
            console.log("Model içerisinde message bulunamıyor");
            return;
        }

        return (
            <IntlProvider locale={this.props.language.name} messages={this.props.language.message}>
                {this.props.children}
            </IntlProvider>
        );
    }
}
