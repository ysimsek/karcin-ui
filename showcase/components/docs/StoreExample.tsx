import * as React from "react";
import {Panel,Store} from "karcin-ui";

export default class AjaxRequestExample extends React.Component<any,any>{
    /**
     idField: "oid",
     data: [],
     param: [],
     originUrl: null,
     endPoint: null,
     responseData: null,
     pageTotalData:null,
     processor: null,
     type: 'POST',
     method: null,
     totalCount:0,
     pageData: {},
     * @returns {any}
     */

    render(){
        return <div>
            {this.getStore()}
        </div>
    }
    getStore(){
        return <div>
            {this.getProperties()}
            {this.getRead()}
            {this.getUpdate()}
            {this.getDelete()}
            {this.getReset()}
            {this.getGeneralUsing()}
        </div>
    }
    getProperties(){
        return <div>
            Store kaynakları yönetmek için kolaylık sağlar. Store için özellik yönetimi;<br/>
            &emsp;- <b>idField</b> varsayılan değeri "id" ve çağıracağınız kaynağın id sine göre değiştirebilirsiniz.<br/><br/>
            <pre>
                <code>{`idField: 'dataId'`}</code>
            </pre><br/>
            &emsp;- <b>data</b> ile istersek kaynaklarımızı sabit veri ile yönetebiliriz.<br/><br/>
            <pre>
                <code>{`data: [`}<br/>
                    &emsp;{`{id:1,name:'Ahmet',surname:'Kurnaz'},`}<br/>
                    &emsp;{`{id:2,name:'Selma',surname:'Yeryakan'},`}<br/>
                    &emsp;{`{id:3,name:'Aslı',surname:'Kuzu'}`}<br/>
                    {`]`}</code>
            </pre><br/>
            &emsp;- Store için <b>data</b> ya da <b>url</b> zorunludur.<br/><br/>
            <pre>
                <code>
                {`let store = new Store({`}<br/>
                    &emsp;&emsp;{`url: 'localhost:5522/karcin-rest/apiUrl'`}<br/>
                {`});`}
                </code>
            </pre>
            &emsp;- Store için <b>responseData</b> sunucudan dönen verinin mapping yapılmasını sağlar.<br/><br/>
            <pre>
                <code>
                    {`responseData:"response.data.map"`}
                </code>
            </pre>
            &emsp;- Store için <b>processor</b> ve <b>method</b> Karcin.io için yapılan processor ve ilgili method ismini çağırır.<br/><br/>
            <pre>
                <code>
                    {`processor:'user',method:'add'`}
                </code>
            </pre>
            &emsp;- Store için <b>type</b> belirlenebilir. Varsayılan <b>post</b> methodudur.<br/><br/>
            <pre>
                <code>
                    {`type:'get'`}
                </code>
            </pre>
        </div>
    }
    getRead(){
        return <div>
            * Read fonksiyonu ilk okuma ve tekrardan okuma çekmek için kullanılır.
            <Panel color={"primary"}>
                {`let store = new Store({`}<br/>
                    &emsp;&emsp;{`url: 'localhost:5522/karcin-rest/apiUrl'`}<br/>
                {`});`}<br/>
                {`store.read()`}
            </Panel>
        </div>
    }
    getUpdate(){
        return <div>
            * Update fonksiyonu kontrol amacıyla genel bir update sonrası işlemi kontrol eder.
            <Panel color={"secondary"}>
                {`let store = new Store({`}<br/>
                    &emsp;&emsp;{`url: 'localhost:5522/karcin-rest/apiUrl'`}<br/>
                {`});`}<br/>
                {`store.update()`}
            </Panel>
        </div>
    }
    getDelete(){
        return <div>
            * Delete fonksiyonu silme işlemlerini kontrol etmek için kullanılır.
            <Panel color={"warning"}>
                {`let store = new Store({`}<br/>
                    &emsp;&emsp;{`url: 'localhost:5522/karcin-rest/apiUrl'`}<br/>
                {`});`}<br/>
                {`store.delete()`}
            </Panel>
        </div>
    }
    getReset(){
        return <div>
            * Reset fonksiyonu data veya url değiştiğinde reset kontrollerini ifade eder.
            <Panel color={"success"}>
                {`let store = new Store({`}<br/>
                    &emsp;&emsp;{`url: 'localhost:5522/karcin-rest/apiUrl'`}<br/>
                {`});`}<br/>
                {`store.reset()`}
            </Panel>
        </div>
    }
    getGeneralUsing(){
        return <div>
            * Genel path bazlı kullanım aşağıdaki gibi olabilir.
            <Panel color={"info"}>
                {`let store = new Store({`}<br/>
                    &emsp;&emsp;{`url: 'localhost:5522/karcin-rest/apiUrl'`}<br/>
                    &emsp;&emsp;{`idField :'id'`}<br/>
                    &emsp;&emsp;{`responseData : 'res.data'`}<br/>
                    &emsp;&emsp;{`processor : 'userProcessor'`}<br/>
                    &emsp;&emsp;{`method : 'generalFilter'`}<br/>
                    &emsp;&emsp;{`type :'post'`}<br/>
                {`});`}<br/>
                {`store.reset()`}
            </Panel>
        </div>
    }
}
