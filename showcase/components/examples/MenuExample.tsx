import * as React from "react";
import {Menu} from 'karcin-ui';

export default class MenuExample extends React.Component<any, any> {
    render() {
        let data:Array<any> = [
            {
                "id":1,
                "name":"functional",
                "title":"Functional",
                "icon":"fa-cubes",
                "collapse":true,
                "badge" : "12",
                "badgeColor" : "primary",
                "items":[
                    {
                        "id":1,
                        "name":"Button",
                        "title":"Button",
                        "href":"#/Components/Button"
                    },
                    {
                        "id":2,
                        "name":"Menu",
                        "title":"Menü",
                        "href":"#/Components/Menu"
                    },
                    {
                        "id":3,
                        "name":"FaIcon",
                        "title":"Font Awesome Icon",
                        "href":"#/Components/FaIcon"
                    },
                    {
                        "id":4,
                        "name":"Tab",
                        "title":"Tabs",
                        "href":"#/Components/Tabs",
                        "samples":"components/examples/TabsExample",
                        "items":[
                            {
                                "id":1,
                                "name":"Button",
                                "title":"Button",
                                "href":"#/Components/Button"
                            },
                            {
                                "id":2,
                                "name":"Menu",
                                "title":"Menü",
                                "href":"#/Components/Menu"
                            },
                            {
                                "id":3,
                                "name":"FaIcon",
                                "title":"Font Awesome Icon",
                                "href":"#/Components/FaIcon"
                            },
                            {
                                "id":4,
                                "name":"Tab",
                                "title":"Tabs",
                                "href":"#/Components/Tabs",
                                "samples":"components/examples/TabsExample"
                            }
                        ]
                    }
                ]
            },{
                "id":2,
                "name":"input",
                "title":"Input",
                "icon":"fa-terminal",
                "items":[
                    {
                        "id":1,
                        "name":"textInput",
                        "title":"Text Input"
                    },
                    {
                        "id":2,
                        "name":"NumericInput",
                        "title":"NumericInput"
                    },
                    {
                        "id":3,
                        "name":"textArea",
                        "title":"Textarea"
                    }
                ]
            }
        ];
        return <div>
            <Menu data={data}/>
        </div>;
    }
}