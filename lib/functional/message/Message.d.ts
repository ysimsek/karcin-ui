export interface MessageProps {
    /**
     * Set the message string or component values
     */
    message?: any;
    /**
     * Click the button returned call back,
     * alert,prompt,confirm
     */
    callBack?: Function;
    /**
     * set the label input only prompt message
     */
    label?: string;
    /**
     * set the placeholder input only prompt message
     */
    placeholder?: string;
    /**
     * Custom button array
     * callBack get close() method is required
     */
    button?: any;
    /**
     * FaIcon code
     */
    icon?: string;
    /**
     * FaIcon color
     */
    iconColor?: string;
    /**
     * Set the title message
     */
    title?: string;
}
declare class message {
    alert(obj: any): void;
    prompt(obj: any): void;
    confirm(obj: any): void;
    custom(obj: any): void;
    /**
     * Set the Random id
     * @returns {HTMLDivElement}
     */
    getDiv(): HTMLDivElement;
    /**
     * Overflow hiddeb and appenCild element
     * @param obj
     * @param div
     */
    standartMethod(obj: any, div: any): void;
}
declare const _default: message;
export default _default;
