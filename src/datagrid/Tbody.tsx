import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import GetInput from '../functional/getInput/GetInput';
import TypeFormating from '../applications/TypeFormating';
import BaseClass from "../applications/BaseClass";

export interface TbodyProps {
    store: any;
    fields: any;
    onSelected ?: any;
    cellRenderer?: any;
    rowRenderer?:any;
    fieldOption?:any;
    showingPageData?:any;
    multiSelect?:boolean;
}

export interface TbodyState {
    store: any,
    fields: any,
    clickActive: Array<any>,
    clickActiveRow: Array<any>,
    showingPageData: any
}


export default class Tbody extends React.Component<TbodyProps, TbodyState> {

}