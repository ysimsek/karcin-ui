import * as React from 'react';
import FaIcon from '../faicon/FaIcon'

export interface DataFilterProps {
    field:Array<FieldArray>;
}

export interface DataFilterState {

}

export interface FieldArray {
    label ?: string,
    type ?: string,
    name ?: string,
    filter?: boolean
}

export default class DataFilter extends React.Component<DataFilterProps, DataFilterState> {

    constructor(props:DataFilterProps){
        super(props);
    }


    render(){
        return(<div className="karcin-datafilter">

        </div>);
    }

}