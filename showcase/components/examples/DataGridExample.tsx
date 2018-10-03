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
                data : data
            }),
            page:1,
        };
    }

    componentDidMount(){
        this.updateDatas();
    }

    render() {
        return (<div><DataGrid store={this.state.store} fields={this.state.fields} onSelected={false} page={this.state.page} changePage={(page:any)=>{
            this.pageChange(page);
        }} toolbar={[{
            name: 'Ekle',
            icon: 'fa-plus',
            url: 'https://www.google.com',
            disabled: this.show
        }, {
            name: 'Düzenle', icon: 'fa-minus', onClick: () => {
                this.clickEdit()
            }

        }]} pagination={true} pageShow={3}/>
        <Button color="danger" onClick={()=>{this.deleteData();}}>Delete Deniz</Button>
        <Button color="info" onClick={()=>{this.updateData();}}>Update Bora</Button>
        <Button color="success" onClick={()=>{this.addData();}}>Insert Ayça</Button>
        <Button color="success" onClick={()=>{this.deneme();}}>Deneme</Button>
        </div>);
    }

    clickEdit(){

    }

    deleteData(){
        this.state.store.delete([{
            'id': '1',
            'name': 'Deniz',
            'surname': 'DALKILIÇ',
            'title': 'Yazılım Uzmanı'
        }],(data:any)=>{
            console.log(data);
        })
    }

    updateData(){
        this.state.store.update([{
            'id': '5',
            'name': 'Bora',
            'surname': 'AVCI',
            'title': 'Project Manager'
        }],(data:any)=>{
            console.log(data);
        })
    }

    addData(){
        this.state.store.create([{
            'id': '6',
            'name': 'Ayça',
            'surname': 'DEMİRBİLEK',
            'title': 'İnsan Kaynakları'
        }],(data:any)=>{
            console.log(data);
        })
    }

    deneme(){
        setTimeout(()=>{
            this.state.store.props.data = [{
                'id': '6',
                'name': 'Ayça',
                'surname': 'DEMİRBİLEK',
                'title': 'İnsan Kaynakları'
            }];
            this.state.store.read();
        },3000);
    }


    pageChange(pages) {
        let state = {page:pages};
        this.setState(state);;
    }

    updateDatas(){
        setTimeout(() => {
            this.state.store.props.data = [{
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
                },
                {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
                },
                {
                userId: 1,
                id: 4,
                title: "eum et est occaecati",
                body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
                },
                {
                userId: 1,
                id: 5,
                title: "nesciunt quas odio",
                body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
                },
                {
                userId: 1,
                id: 6,
                title: "dolorem eum magni eos aperiam quia",
                body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
                }];
                this.state.store.read(); 
        }, 2000);
    }
}