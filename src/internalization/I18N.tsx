import * as React from "react";
import {IntlProvider, FormattedMessage,addLocaleData} from 'react-intl';

export interface I18NInterface{
    /**
     * Set the string id
     */
    id?:string | any;
    /**
     * {name : value}
     */
    setValues ?: any;
}

export default class I18N extends React.Component<I18NInterface>{
    render(){
        return <FormattedMessage id={this.props.id} values={this.props.setValues}/>
    }
}
