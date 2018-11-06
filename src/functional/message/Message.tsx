import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Alert from "./msg/Alert";
import Prompt from "./msg/Prompt";
import Confirm from "./msg/Confirm";
import Custom from "./msg/Custom";

class message {
    alert(obj:any){
        let div = this.getDiv();
        let cmp:any = this.standartMethod(obj,div);
        const component = React.createElement(Alert, obj);
        ReactDOM.render(component, div);
    }

    propmt(obj:any){
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
