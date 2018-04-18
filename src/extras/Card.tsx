import * as React from "react";
import { Card as CardX, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Card extends React.Component<any,any>{
    render(){
        return <div>
            <CardX>
                {this.returnImage()}
                {this.returnBody()}
            </CardX>
        </div>
    }
    returnImage(){
        //"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        return this.props.imgsrc ? <CardImg top width="100%" src={this.props.imgsrc} alt="Card image cap" />: null;
    }
    returnBody(){
        return <CardBody>
            <CardTitle>{this.props.color}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>{this.props.text}</CardText>
            {this.props.button ? <Button>Button</Button> : <span/>}
        </CardBody>;
    }
}
