import * as React from "react";
import {Loading, Button} from 'karcin-ui';
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
                <Row id={"dd"}>
                    dsadsads<br/>
                    sdada<br/>
                </Row>
                <Button color="primary" onClick={this.loadingOpen.bind(this)}>Loading Open</Button>
            </div>
        );
    }

    loadingClose() {
        let self = this;
        setTimeout(() => {
                Loading.remove();
        }, 3000);
    }

    loadingOpen () {
        Loading.add({id:"dd",label:"Loading..."});
		// this.loadingClose();
    }
}
