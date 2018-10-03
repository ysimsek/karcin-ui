import * as React from "react";
import {DataGrid, Store, Button} from 'karcin-ui';
import Axios from 'axios';


export default class DataGridExample extends React.Component<any, any> {
    show = true;

    constructor(props: any) {
        super(props);

        let data = [];

        this.state = {
            fields: [
                {
                    "property": "int",
                    "value": "id",
                    "name": "ID"
                },
                {
                    "property": "string",
                    "value": "title",
                    "name": "Başlık"
                },
                {
                    "property": "string",
                    "value": "body",
                    "name": "Açıklama",
                }
            ],
            store: new Store({
                idField: 'id',
                url: 'https://jsonplaceholder.typicode.com/posts',
                processor:'report',
                method:'getReport',
                param: [{filters: [
                        {property: "cardStatus", value: "PASSIVE", operator: "=", index: 1},
                        {property: "cardType", value: "ZIYARETCI", operator: "=", index: 1}
                    ]}]
            }),
            page:1,
        };
    }

    render() {
        return (<div><DataGrid title={"Example Data"} store={this.state.store} fields={this.state.fields} onSelected={false} page={this.state.page}   pagination={true} pageShow={3} />
        </div>);
    }
}