import * as React from "react";
import {FormGroup,Input,Label,Col} from "reactstrap";

export default class CheckInput extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }
    render(){
        return (<FormGroup row>
            <Label for="checkbox2" sm={2}>Checkbox</Label>
            <Col sm={{ size: 10 }}>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox" id="checkbox2" />{' '}
                        Check me out
                    </Label>
                </FormGroup>
            </Col>
        </FormGroup>)
    }
}
