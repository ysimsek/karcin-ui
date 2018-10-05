import * as React from "react";
import {Menu} from 'karcin-ui';
import {Row, Col} from 'reactstrap';

export default class MenuExample extends React.Component<any, any> {
    constructor(props:any){
        super(props);
        this.state = {
            active : [{
                "id": 1,
                "name": "Arial",
                "title": "Arial",
                "href": "#/Components/Menu"
            }]
        }
    }
    render() {
        let data: Array<any> = [
            {
                "id": 1,
                "name": "Languages",
                "title": "Languages",
                "icon": "fa-cubes",
                "collapse": true,
                "badge": "new",
                "badgeColor": "danger",
                "items": [
                    {
                        "id": 1,
                        "name": "Arial",
                        "title": "Arial",
                        "href": "#/Components/Menu"
                    },
                    {
                        "id": 2,
                        "name": "Calibri",
                        "title": "Calibri",
                        "href": "#/Components/Menu"
                    },
                    {
                        "id": 3,
                        "name": "ComicSans",
                        "title": "Comic Sans",
                        "href": "#/Components/Menu",
                        "badge": "v4",
                        "badgeColor": "warning",
                    },
                    {
                        "id": 4,
                        "name": "corsiva",
                        "title": "Corsiva"
                    },
                    {
                        "id": 5,
                        "name": "couriernew",
                        "title": "Courier New"
                    },
                    {
                        "id": 6,
                        "name": "georgia",
                        "title": "Georgia",
                        "badge": "v3",
                        "badgeColor": "warning",
                    },
                    {
                        "id": 7,
                        "name": "helvetica",
                        "title": "Helvetica Neue"
                    }
                ]
            }, {
                "id": 2,
                "name": "format",
                "title": "Format",
                "icon": "fa-terminal",
                "items": [
                    {
                        "id": 1,
                        "name": "bold",
                        "title": "Bold"
                    },
                    {
                        "id": 2,
                        "name": "italic",
                        "title": "Italic"
                    },
                    {
                        "id": 3,
                        "name": "LineSpecing",
                        "title": "Line Specing",
                        "badge": "2",
                        "badgeColor": "warning",
                        "items": [
                            {
                                "id":1,
                                "name":"single",
                                "title":"Single"
                            },
                            {
                                "id":2,
                                "name":"double",
                                "title":"Double"
                            }
                        ]
                    }
                ]
            }
        ];
        return (<div className="example-menu">
            <Row className="basic-row">
                <Col sm={6}>
                    <span className="example-reagent first">Accordion Menü</span>
                    <Menu data={data} accordion={true} onChange={(val)=>{this.handleChange(val)}} />
                </Col>
                <Col sm={6}>
                    <span className="example-reagent first">Collapse Menu</span>
                    <Menu data={data} active={this.state.active} onChange={(val)=>{this.handleChange(val)}} />
                </Col>
                <Col sm={6}>
                    <span className="example-reagent">Hover Menu</span>
                    <Menu data={data} hover={true} onChange={(val)=>{this.handleChange(val)}} />
                </Col>
            </Row>
        </div>);
    }


    handleChange(val:any){
        console.log(val);
    }


}