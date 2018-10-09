import * as React from "react";
import {Panel,AjaxRequest} from "karcin-ui";
import * as Highlight from "react-highlight";

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
            <Highlight className='javascript'>{'url: \'http:localhost:5567/karcin-rest/getList'}</Highlight>
            &emsp;AjaxRequest componenti <b>type</b> belirtmek istenirse ilgili özellik AjaxRequest'e parametre olarak verilir. Varsayılan type post methodudur.
            <Highlight className='javascript'>{'type: \'get\''}</Highlight>
            &emsp;AjaxRequest componenti <b>method</b> ve <b>processor</b> özellikleri karcin-io için özel olarak yapılmıştır ve sunucu'da
            bulunan processor içerisinde yazılan methodun çağırdığı response'u döner. Varsayılan method findAll methodudur. Processor'ün tanımlanması gerekmektedir.
            <Highlight className='javascript'>{'processor: \'UserProcessor\',method: \'findById\''}</Highlight>
            &emsp;AjaxRequest ile sunucumuza gönderdiğimiz istekte <b>header</b> bilgisinide ek olarak gönderebiliriz ve sunucumuza özel methodlar yazmamız sağlanabilir.
            Token kontrolü, özel şifre kontrolü vb. yapılar kullanılarak request sadece uygulamaya özel bir hale getirilebilir.<b>header</b> nesne şeklinde değişkenler alarak kullanılır.
            <Highlight className='javascript'>{'header:{token:\'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad\',filter:[\'id\'=\'5\',name:\'hale\']}'}</Highlight>
            &emsp;AjaxRequest ile sunucumuza <b>data</b> sayesinde sunucunun cevap vereceği formatta veri gönderebiliriz. Örneğin; deleteById methodumuz olsun. Hangi datayı sileneceğini belirtmemiz gerekebilir.
            Bunun için ;
            <Highlight className='javascript'>{'data : [\'id\':1]'}</Highlight>
            &emsp;Sunucumuza gönderdiğimiz <b>get</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Highlight className='javascript'>{'let getAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
            '   //callBack\n' +
            '});\n' +
            'getAjax.call();'}</Highlight>
        </div>
    }
    postAjaxRequest(){
        return <div>
            Sunucumuza gönderdiğimiz <b>post</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Highlight className='javascript'>{'let postAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
            '   //callBack\n' +
            '});\n' +
            'postAjax.call();'}</Highlight>
        </div>
    }
    updateAjaxRequest(){
        return <div>
            Sunucumuza gönderdiğimiz <b>update</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Highlight className='javascript'>{'let updateAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
            '   //callBack\n' +
            '});\n' +
            'updateAjax.call();'}</Highlight>
        </div>
    }
    deleteAjaxRequest(){
        return <div>
            Sunucumuza gönderdiğimiz <b>delete</b> methodunun sonucu aşağıdaki gibi bir kod kullanarak çekilebilir.
            Sunucudan gelen sonuç callBack yazan yerde response yazan değişkenin içerisine eşitlenir.
            <Highlight className='javascript'>{'let deleteAjax = new AjaxRequest({url: \'denemeUrl\',type: \'get\'}, (response)=>{\n' +
            '   //callBack\n' +
            '});\n' +
            'deleteAjax.call();'}</Highlight>
        </div>
    }
    callBackAjaxRequest(){
        return <div>
            Tam veri kullanımı aşağıdaki gibidir.
            <Highlight className='javascript'>{'let postAjax = new AjaxRequest({url: \'denemeUrl\',\n' +
            '  type: \'post\',\n' +
            '  processor: \'userProcessor\',\n' +
            '  method: \'add\',\n' +
            '  header: {\n' +
            '  token : \'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad\'\n' +
            ' },\n' +
            ' data :[\n' +
            '  {\n' +
            '   name:"Mustafa",\n' +
            '   surname : "Güngör",\n' +
            '   age : 26,\n' +
            '   job : "Mühendis"\n' +
            '   }\n' +
            '  ]},\n' +
            '(response)=>{\n' +
            '  callBack\n' +
            '})'}</Highlight>
        </div>
    }
}
