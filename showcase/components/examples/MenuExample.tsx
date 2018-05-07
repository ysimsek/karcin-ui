import * as React from "react";
import {Menu} from 'karcin-ui';

export default class MenuExample extends React.Component<any, any> {
    render() {
        let data: Array<any> = [
            {
                "id": 1,
                "name": "Languages",
                "title": "Languages",
                "icon": "fa-cubes",
                "collapse": true,
                "badge": "7",
                "badgeColor": "primary",
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
                        "href": "#/Components/Menu"
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
                        "title": "Georgia"
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
                        "items": [
                            {
                                id:1,
                                name:"single",
                                title:"Single"
                            },
                            {
                                id:2,
                                name:"double",
                                title:"Double"
                            }
                        ]
                    }
                ]
            }
        ];
        return <div>
            <Menu data={data} onChange={(val)=>{this.handleChange(val)}} />
        </div>;
    }


    handleChange(val){
        console.log(val);
    }

}