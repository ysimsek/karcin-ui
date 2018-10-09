import * as React from "react";
import {Panel,AjaxRequest} from "karcin-ui";

export default class AjaxRequestExample extends React.Component<any,any>{
    render(){
        return <div >
            {this.getAjaxRequest()}
            {this.postAjaxRequest()}
            {this.updateAjaxRequest()}
            {this.deleteAjaxRequest()}
            {this.callBackAjaxRequest()}
        </div>
    }
    getAjaxRequest(){
        return <div>
            &emsp;Kaçin-ui AjaxRequest ile sunucu bilgi alışverişi , ui sayfasının kontrollerinin tutulması ve dinamik olarak sayfa yapılabilmesi,<br/>
            sunucu ile olan veri trafiğinin kontrol edilebilmesi sağlanır.<br/>
            &emsp;AjaxRequest componenti kullanabilmek için <b>url</b> girilmesi gerekiyor ve sunucu'da yönelmesi istenilen path özellik olarak gönderilir.
                <br/><br/>
                    <pre><i>{`url: 'http:localhost:5567/karcin-rest/getList'`}</i></pre>
                <br/>
            &emsp;AjaxRequest componenti <b>type</b> belirtmek istenirse ilgili özellik AjaxRequest'e parametre olarak verilir. Varsayılan type post methodudur.
                <br/><br/>
                    <pre><i>{`type: 'get'`}</i></pre>
                <br/>
            &emsp;AjaxRequest componenti <b>method</b> ve <b>processor</b> özellikleri karcin-io için özel olarak yapılmıştır ve sunucu'da
            bulunan processor içerisinde yazılan methodun çağırdığı response'u döner. Varsayılan method findAll methodudur. Processor'ün tanımlanması gerekmektedir.
                <br/><br/>
                    <pre><i>{`processor: 'UserProcessor',method: 'findById'`}</i></pre>
                <br/>
            &emsp;AjaxRequest ile sunucumuza gönderdiğimiz istekte <b>header</b> bilgisinide ek olarak gönderebiliriz ve sunucumuza özel methodlar yazmamız sağlanabilir.
            Token kontrolü, özel şifre kontrolü vb. yapılar kullanılarak request sadece uygulamaya özel bir hale getirilebilir.<b>header</b> nesne şeklinde değişkenler alarak kullanılır.
                <br/><br/>
                    <pre><i>{`header:{token:'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',filter:['id'='5',name:'hale']}`}</i></pre>
                <br/>
            &emsp;AjaxRequest ile sunucumuza <b>data</b> sayesinde sunucunun cevap vereceği formatta veri gönderebiliriz. Örneğin; deleteById methodumuz olsun. Hangi datayı sileneceğini belirtmemiz gerekebilir.
            Bunun için ;
                <br/><br/>
                    <pre><i>{`data : ['id':1]`}</i></pre>
                <br/>
            &emsp;Sunucumuza gönderdiğimiz <b>get</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Panel color={"primary"}>
            {`let getAjax = new AjaxRequest({url: 'denemeUrl',type: 'get'}, (response)=>{`}
                <br/>
                {`callBack`}
                <br/>
                {`});` }
                <br/>
                {`getAjax.call();`}

            </Panel>
        </div>
    }
    postAjaxRequest(){
        return <div>
            Sunucumuza gönderdiğimiz <b>post</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Panel color={"secondary"}>
                {`let postAjax = new AjaxRequest({url: 'denemeUrl',type: 'post'}, (response)=>{`}
                <br/>
                {`callback`}
                <br/>
                {`})`}
                <br/>
                {`postAjax.call()`}
            </Panel>
        </div>
    }
    updateAjaxRequest(){
        return <div>
            Sunucumuza gönderdiğimiz <b>update</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
                <Panel color={"success"}>
                {`let updateAjax = new AjaxRequest({url: 'denemeUrl',type: 'update'}, (response)=>{`}
                <br/>
                {`callback`}
                <br/>
                {`})`}
                <br/>
                {`updateAjax.call()`}
        </Panel>
        </div>
    }
    deleteAjaxRequest(){
        return <div>
            Sunucumuza gönderdiğimiz <b>delete</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Panel color={"info"}>
                {`let deleteAjax = new AjaxRequest({url: 'denemeUrl',type: 'delete'}, (response)=>{`}
                <br/>
                {`callBack`}
                <br/>
                {`})`}
                <br/>
                {`deleteAjax.call();`}
            </Panel>
        </div>
    }
    callBackAjaxRequest(){
        return <div>
            Tam veri kullanımı aşağıdaki gibidir.
            <Panel color={"warning"}>
                {`let postAjax = new AjaxRequest({url: 'denemeUrl',`}<br/>&emsp;&emsp;
                {`type: 'post',`}<br/>&emsp;&emsp;
                {`processor: 'userProcessor',`}<br/>&emsp;&emsp;
                {`method: 'add',`}<br/>&emsp;&emsp;
                {`header: {`}<br/>&emsp;&emsp;
                {`token : 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'`}<br/>&emsp;
                {`},`}<br/>&emsp;
                {`data :[`}<br/>&emsp;&emsp;
                {`{`}<br/>&emsp;&emsp;&emsp;
                    {`name:"Mustafa",`}<br/>&emsp;&emsp;&emsp;
                    {`surname : "Güngör",`}<br/>&emsp;&emsp;&emsp;
                    {`age : 26,`}<br/>&emsp;&emsp;&emsp;
                    {`job : "Mühendis"`}<br/>&emsp;&emsp;&emsp;
                    {`}`}<br/>&emsp;&emsp;
                {`}]},`}
                {`(response)=>{`}<br/>&emsp;&emsp;
                {`callBack`}<br/>
                {`}})`}<br/>
            </Panel>
        </div>
    }
}
