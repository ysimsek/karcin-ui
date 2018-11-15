import * as React from "react";
import {Loading, Button , Panel} from 'karcin-ui';
import {Row,Col} from "reactstrap";

export default class LoadingExample extends React.Component<any, any> {

    constructor(props:any){
        super(props);

        this.state = {
            loadingShowing : true
        }
    }
    render() {

        return (<div>
                <span className="example-reagent">Row example inset loading</span>
                <Row id={"inRow"} style={{border:"2px solid gray",padding:5}}>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
                    <p>Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
                        karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</p>
                    <p>Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.</p>
                    <p>1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                </Row>
                <p>
                    <span className="example-reagent">Loading Inset</span>
                    <Button onClick={this.loadingOpen.bind(this)}>default</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"primary"}>primary</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"success"}>success</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"warning"}>warning</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"danger"}>danger</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"info"}>info</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"secondary"}>secondary</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"dark"}>dark</Button>{' '}
                    <Button onClick={this.loadingOpen.bind(this)} color={"light"}>light</Button>{' '}


                    <span className="example-reagent">Loading Full</span>
                    <Button onClick={this.loadingOpenBody.bind(this)}>default</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"primary"}>primary</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"success"}>success</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"warning"}>warning</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"danger"}>danger</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"info"}>info</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"secondary"}>secondary</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"dark"}>dark</Button>{' '}
                    <Button onClick={this.loadingOpenBody.bind(this)} color={"light"}>light</Button>{' '}
                </p>
            </div>
        );
    }

    loadingClose(id?:string | number) {
        let self = this;
        setTimeout(() => {
                id != undefined ? Loading.remove({id:id}) : Loading.remove();
        }, 3000);
    }

    loadingOpen (e) {
        Loading.add({id:"inRow",label:"Loading...",color:e.target.textContent != "default" ? e.target.textContent : undefined});
		this.loadingClose("inRow");
    }

    loadingOpenBody(e){
        Loading.add({color:e.target.textContent != "default" ? e.target.textContent : undefined});
        this.loadingClose();
    }
}
