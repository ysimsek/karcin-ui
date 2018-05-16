import * as React from "react";
import {Button} from 'karcin-ui';
import Store from '../../../store/Store';
import LocalEndPoint from '../../../store/LocaleEndPoint';

export default class ButtonExample extends React.Component<any, any> {
    store = null;
    constructor(props:any){
        super(props);

        this.store = new Store({
            idField : 'id',
            endPoint: new LocalEndPoint({
                data: [{ id: 1, name: "John", surname: "Doe" }, { id: 2, name: "Jane", surname: "Roe" }]
            })
        });

        this.store.create({id :5, name: "Deneme", surname: "asd"}, (vl)=>{this.onSuccess(vl)});
    }
    render() {
        return (
            <div>
                <Button color="light" onClick={()=>{this.onError()}}>light</Button>{' '}
                <Button color="dark" onClick={()=>{this.onError()}}>dark</Button>{' '}
                <Button color="primary" onClick={()=>{this.onError()}}>primary</Button>{' '}
                <Button color="secondary" onClick={()=>{this.onError2()}}>secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="link">link</Button>
                <hr/>
                <Button outline color="light">light</Button>{' '}
                <Button outline color="dark">dark</Button>{' '}
                <Button outline color="primary">primary</Button>{' '}
                <Button outline color="secondary">secondary</Button>{' '}
                <Button outline color="success">success</Button>{' '}
                <Button outline color="info">info</Button>{' '}
                <Button outline color="warning">warning</Button>{' '}
                <Button outline color="danger">danger</Button>
                <hr/>
                <Button color="primary" size="lg">Large Button</Button>{' '}
                <Button color="secondary" size="lg">Large Button</Button>
                <hr/>
                <Button color="primary" size="sm">Small Button</Button>{' '}
                <Button color="secondary" size="sm">Small Button</Button>
                <hr/>
                <Button color="primary" size="lg" block>Block level button</Button>
                <Button color="secondary" size="lg" block>Block level button</Button>
            </div>
        );
    }

    onSuccess(res) {
        console.log(res);
    }

    onError() {
        console.log(this.store.reset());
    }

    onError2(){
        let data = [{ id: 1, name: "Deniz", surname: "Dalkılıç" }, { id: 2, name: "name", surname: "surname" }];
        console.log(this.store.update(data));
    }
}