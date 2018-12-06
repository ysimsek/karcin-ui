import * as React from "react";
import {Label} from 'reactstrap';
import DatePickerX from 'react-datepicker';
import moment = require('moment');
import "react-datepicker/dist/react-datepicker.css";
import { start } from "repl";

export interface DateInputState {
    startDate: any;
    displayName: string;
}

export interface DateInputProps{
    value ?: string | any;
    name ?: string;
    onChange ?: any;
    inline ?: boolean;
    showTime ?: boolean;
    label ?: string;
    timeFormat ?: string;
    timeInterval ?: number;
    dateFormat ?: string;
    className ?: string;
    showTimeSelect ?: any;
    showTimeSelectOnly ?:any;
    timeIntervals?:any;
    timeCaption?:any;
}

export default class DateInput extends React.Component<DateInputProps, DateInputState> {

    static defaultProps: Partial<DateInputProps> = {
        dateFormat : "DD.MM.YYYY",
        value : null
    }

    constructor(props: DateInputProps) {
        super(props);
        this.state = {
            startDate : this.renderDate(props),
            displayName: 'Example'
        };
    }

    UNSAFE_componentWillReceiveProps(props:DateInputProps){
        this.setState({
            startDate : this.renderDate(props),
        })
    }


    render() {

        let startDate = this.state.startDate;

        //time'da sadece saat geldiği için tarih olduğunu anlamıyor. onun için bugünün tarihini alarak saati ekliyorum sorunu çözüyorum.
        if(this.props.showTimeSelectOnly !== undefined && this.props.value !== (null && undefined)){
            startDate =  moment(moment(moment().format('DD.MM.YYY') + this.props.value, 'DD.MM.YYYY HH:mm:ss').format());
        }

        return (
                <div>
                    {this.props.label != undefined ? <Label className={"label-properties"}>{this.props.label}</Label> : null}
                    <div>
                        <DatePickerX
                            {...this.props}
                            selected={startDate}
                            onChange={(e:any,id:any)=>{this.handleChange(e,id)}}
                            className={"form-control "+this.props.className}
                            inline={this.props.inline != undefined ? true : false}
                            shouldCloseOnSelect={true}
                        />
                    </div>
                </div>

        );
    }


    renderDate(props:DateInputProps){
        let returnDate:any = null;
        if(props.value !== (null && undefined)){
            if(typeof props.value === 'number'){
                returnDate = new Date(props.value);
            }else {
                returnDate = props.value;
            }

            returnDate = moment(returnDate, props.dateFormat)
        }
        return returnDate;
    }

    /**
     *
     * @param {moment.Moment | any | null} date
     * @param getId
     */
    handleChange(date?: any, getId?: any){
        this.setState({
            startDate : date
        })
        this.props.onChange(
            {
                date : date,
                target : {
                    value : moment(date._d).format(this.props.dateFormat), 
                    name : this.props.name
                }, 
                id : getId
            });
    };
}