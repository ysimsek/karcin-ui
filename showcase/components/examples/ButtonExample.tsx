import * as React from "react";
import {Button} from 'karcin-ui';
import AjaxRequest from '../../../request/AjaxRequest';

export default class ButtonExample extends React.Component<any, any> {
    render() {

        let denem = {url: 'dasds'};
        let asd = new AjaxRequest({data: {deniz: 'dede'}}, (response) => {
            this.onSuccess(response)
        });
        return (
            <div>
                <Button color="primary">primary</Button>{' '}
                <Button color="secondary">secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="link">link</Button>
                <hr/>
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

    onError(res) {
        console.log(res);
    }
}