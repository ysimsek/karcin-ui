import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Alert from "./msg/Alert";
import Prompt from "./msg/Prompt";
import Confirm from "./msg/Confirm";
import Custom from "./msg/Custom";

export interface MessageProps{
    /**
     * Set the message string or component values
     */
    message ?:any;
    /**
     * Click the button returned call back,
     * alert,prompt,confirm
     */
    callBack ?:Function;
    /**
     * set the label input only prompt message
     */
    label ?:string;
    /**
     * set the placeholder input only prompt message
     */
    placeholder ?:string;
    /**
     * Custom button array
     * callBack get close() method is required
     */
    button ?:any;
    /**
     * FaIcon code
     */
    icon?:string;
    /**
     * FaIcon color
     */
    iconColor?:string;
    /**
     * Set the title message
     */
    title?:string;
}

class message {
    alert(obj:any){
        let div = this.getDiv();
        let cmp:any = this.standartMethod(obj,div);
        const component = React.createElement(Alert, obj);
        ReactDOM.render(component, div);
    }

    prompt(obj:any){
        let div = this.getDiv();
        let cmp:any = this.standartMethod(obj,div);
        const component = React.createElement(Prompt, obj);
        ReactDOM.render(component, div);
    }

    confirm(obj:any){
        let div = this.getDiv();
        let cmp:any = this.standartMethod(obj,div);
        const component = React.createElement(Confirm, obj);
        ReactDOM.render(component, div);
    }

    custom(obj:any){
        let div = this.getDiv();
        let cmp:any = this.standartMethod(obj,div);
        const component = React.createElement(Custom, obj);
        ReactDOM.render(component, div);
    }

    /**
     * Set the Random id
     * @returns {HTMLDivElement}
     */
    getDiv(){
        const div = document.createElement('div');
        let xCount = Math.floor((Math.random() * 10000) + 1) as any;
        div.setAttribute("id",xCount);
        return div;
    }

    /**
     * Overflow hiddeb and appenCild element
     * @param obj
     * @param div
     */
    standartMethod(obj:any,div:any){
        document.body.style.setProperty('overflow', 'hidden');
        document.body.appendChild(div);
        obj.show = true;
    }
}

export default new message();
