import * as React from "react";
import {Button, Notify, Message} from "karcin-ui";

export default class MessageExample extends React.Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            show : false,
            message : "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. " +
            "Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere " +
            "bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır."
        }
    }

    render(){
        return <div>
            <span className="example-reagent">MessageBox Alert</span>
            <Button onClick={this.alertClick.bind(this)} color={"primary"}>Alert</Button>

            <span className="example-reagent">MessageBox Confirm</span>
            <Button onClick={this.confirmClick.bind(this)} color={"primary"}>Confirm</Button>

            <span className="example-reagent">MessageBox Prompt</span>
            <Button onClick={this.promptClick.bind(this)} color={"primary"}>Prompt</Button>

            <span className="example-reagent">MessageBox Custom</span>
            <Button onClick={this.customClick.bind(this)} color={"primary"}>Custom</Button>
        </div>
    }

    /**
     * Alert message
     */
    alertClick(){
        Message.alert({message:this.state.message,title:<div>Lorem Ipsum</div>,icon:"fa-exclamation-triangle",iconColor:"primary",callBack:(call)=>{
            console.log(call.response);
            }})
    }

    /**
     * Confirm message
     */
    confirmClick(){
        Message.confirm({message:this.state.message,title:"Confirm",icon:"fa-envelope",callBack:(call)=>{
                console.log(call.response);
            }})
    }

    /**
     * Prompt message
     */
    promptClick(){
        Message.prompt({label:"Kullanıcı Adını Giriniz",title:"Prompt",icon:"fa-exclamation-circle",iconColor:"success",placeholder:"...",callBack:(call)=>{
                console.log(call.response);
            }})
    }

    /**
     * Custom message
     */
    customClick(){
        Message.custom({
            message:this.state.message,
            icon:"fa-envelope",
            title:"Custom",
            button:[
                {color:"primary", title:"Disabled",outline:true,disabled:true,icon:"fa-html5",iconAlign:"right",style:{color:"red"},className:"deneme", onClick(msg){
                    msg.close();
                    }
                },
                {color:"success", title:"Save", onClick(msg){
                        msg.close();
                    }
                },
                {color:"warning", title:"Warning", onClick(msg){
                        // msg.close();
                    }
                },

            ]
        })
    }

}
