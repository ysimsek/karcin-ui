import * as React from "react";
import {Button,Notify} from 'karcin-ui';

export default class ButtonExample extends React.Component<any, any> {

    render() {
        return (
            <div>
                <span className="example-reagent first">Buttons</span>
                <Button color="primary">primary</Button>{' '}
                <Button color="secondary">secondary</Button>{' '}
                <Button color="success">success</Button>{' '}
                <Button color="info">info</Button>{' '}
                <Button color="warning">warning</Button>{' '}
                <Button color="danger">danger</Button>{' '}
                <Button color="dark">dark</Button>{' '}
                <Button color="light">light</Button>{' '}
                <Button color="link">link</Button>

                <span className="example-reagent">Outline Buttons</span>
                <Button outline color="primary">primary</Button>{' '}
                <Button outline color="secondary">secondary</Button>{' '}
                <Button outline color="success">success</Button>{' '}
                <Button outline color="info">info</Button>{' '}
                <Button outline color="warning">warning</Button>{' '}
                <Button outline color="danger">danger</Button>{' '}
                <Button outline color="dark">dark</Button>{' '}
                <Button outline color="light">light</Button>{' '}

                <span className="example-reagent">Icon Buttons</span>
                <Button color="primary" icon={"fa-html5"}>HTML5 </Button>{' '}
                <Button color="primary" icon={"fa-css3"} iconAlign={"left"}> CSS3</Button>{' '}

                <span className="example-reagent">Large Buttons</span>
                <Button color="primary" size="lg">Large Button</Button>{' '}
                <Button color="secondary" size="lg">Large Button</Button>

                <span className="example-reagent">Small Buttons</span>
                <Button color="primary" size="sm">Small Button</Button>{' '}
                <Button color="secondary" size="sm">Small Button</Button>

                <span className="example-reagent">Block Button</span>
                <Button color="primary" size="lg" block>Block level button</Button>
                <Button color="secondary" size="lg" block>Block level button</Button>

                <span className="example-reagent">Asynchronous Button</span>
                <Button color={"primary"} async={true} onClick={this.onClick.bind(this)}>Primary Asynchronous</Button>{' '}
                <Button color={"success"} async={true} onClick={this.onClick.bind(this)}>Success Asynchronous</Button>{' '}
                <Button  color={"warning"} async={true} onClick={this.onClick.bind(this)}>Warning Asynchronous</Button>{' '}

            </div>
        );
    }


    onClick(e:any, finish:Function){
            let me = this;
                setTimeout(function () {
                    me.onResponse(finish);
                }, 1000);
    }

    onResponse(finish:Function){
            Notify.info({message:"Async Button"});
            finish();
    }
}
