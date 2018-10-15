import * as React from "react";
import {Label} from "karcin-ui";

export default class LabelExample extends React.Component<any,any>{
    render(){
        return <div>
            <Label>Lorem Ipsum nedir?</Label><br/>
            <Label size={20}>Renkler ve Özellikleri</Label><br/>
            <Label color={"red"}>Kırmızı Çiçekler</Label><br/>
            <Label color={"#ab00ff"}>Mor Güller</Label><br/>
            <Label color={"rgb(0,205,102)"}>Yeşil Orman ve Gülleri</Label><br/>
        </div>
    }
}
