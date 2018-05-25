import * as React from "react";
import {Loading, Button} from 'karcin-ui';

export default class LoadingExample extends React.Component<any, any> {

    constructor(props:any){
        super(props);

        this.state = {
            loadingShowing : true
        }
    }
    render() {
        this.loadingClose();
        return (<div>
                <Button color="primary" onClick={this.loadingOpen.bind(this)}>Loading Open</Button>
                <Loading show={this.state.loadingShowing} size={"full"}/>
            </div>
        );
    }

    loadingClose() {
        let self = this;
        setTimeout(() => {
            self.setState({
                loadingShowing:false
            });
        }, 3000);
    }

    loadingOpen () {
        this.setState({
            loadingShowing:true
        });
        this.loadingClose();
    }
}