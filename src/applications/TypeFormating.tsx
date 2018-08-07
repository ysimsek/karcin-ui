import Application from '../applications/Applications';
export default class TypeFormating {

    props:any = {
        data: null,
        type:null,
        format:null        
    }

    constructor(props:Object, callback:any){
        this.props = Application.mergeObject(this.props, props);

        if(this.props.data && this.props.type && callback){
            callback(this.typeCall());
        }
    }

    typeCall(){
        let returnValue:any;

        switch(this.props.type){
            case 'int':
            case 'integer':
                returnValue = parseInt(this.props.data);
            break;

            case 'boolean':
                returnValue = this.props.data.toString(); 
            break;

            case 'date':
                let format:any;
                if(this.props.data.format){
                    format = this.props.format;
                }else {
                    format = "DD.MM.YYYY";
                }

                returnValue = new Date(this.props.data, format);
            break;

            case 'dateTime':
                let formatTime:any;
                if(this.props.data.format){
                    formatTime = this.props.format;
                }else {
                    formatTime = "DD.MM.YYYY";
                }

                returnValue = new Date(this.props.data, formatTime);
            break;

            default:
                returnValue = this.props.data.toString();
        }

        return returnValue;
    }

    
}