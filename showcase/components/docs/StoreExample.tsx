import * as React from "react";
import {Panel,Store} from "karcin-ui";
import * as Highlight from "react-highlight";

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
            * <b>idField</b> varsayılan değeri "id" ve çağıracağınız kaynağın id sine göre değiştirebilirsiniz.<br/>
            <Highlight className='javascript'>{'idField: \'dataId\''}</Highlight>
            *<b>data</b> ile istersek kaynaklarımızı sabit veri ile yönetebiliriz.<br/>
            <Highlight className='javascript'>{'data : [\n' +
            '    {id:1,value:"Apple",des:"D1"},\n' +
            '    {id:2,value:"Samsung",des:"D1"},\n' +
            '    {id:3,value:"Huawei",des:"D1"},\n' +
            '    {id:4,value:"Lg",des:"D1"},\n' +
            '    {id:5,value:"Lenovo",des:"D1"}\n' +
            '  ]'}</Highlight>
            * Store için <b>data</b> ya da <b>url</b> zorunludur.<br/>
            <Highlight className='javascript'>{'let store = new Store({\n' +
            '   url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
            '});'}</Highlight>
            * Store için <b>responseData</b> sunucudan dönen verinin mapping yapılmasını sağlar.<br/>
            <Highlight className='javascript'>{'responseData:"response.data.map'}</Highlight>
            * Store için <b>processor</b> ve <b>method</b> Karcin.io için yapılan processor ve ilgili method ismini çağırır.<br/>
            <Highlight className='javascript'>{'processor:\'user\',method:\'add\''}</Highlight>
            * Store için <b>type</b> belirlenebilir. Varsayılan <b>post</b> methodudur.<br/>
            <Highlight className='javascript'>{'type:\'get\''}</Highlight>
        </div>
    }
    getRead(){
        return <div>
            * Read fonksiyonu ilk okuma ve tekrardan okuma çekmek için kullanılır.
                <Highlight className='javascript'>{'let store = new Store({\n' +
                '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
                '});\n' +
                'store.read()'}</Highlight>
        </div>
    }
    getUpdate(){
        return <div>
            * Update fonksiyonu kontrol amacıyla genel bir update sonrası işlemi kontrol eder.
            <Highlight className='javascript'>{'let store = new Store({\n' +
            '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
            '});\n' +
            'store.update()'}</Highlight>
        </div>
    }
    getDelete(){
        return <div>
            * Delete fonksiyonu silme işlemlerini kontrol etmek için kullanılır.
            <Highlight className='javascript'>{'let store = new Store({\n' +
            '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
            '});\n' +
            'store.delete()'}</Highlight>
        </div>
    }
    getReset(){
        return <div>
            * Reset fonksiyonu data veya url değiştiğinde reset kontrollerini ifade eder.
            <Highlight className='javascript'>{'let store = new Store({\n' +
            '    url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
            '});\n' +
            'store.reset()'}</Highlight>
        </div>
    }
    getGeneralUsing(){
        return <div>
            * Genel path bazlı kullanım aşağıdaki gibi olabilir.
            <Highlight className='javascript'>{'let store = new Store({\n' +
            '  url: \'localhost:5522/karcin-rest/apiUrl\'\n' +
            '  idField :\'id\'\n' +
            '  responseData : \'res.data\'\n' +
            '  processor : \'userProcessor\'\n' +
            '  method : \'generalFilter\'\n' +
            '  type :\'post\'\n' +
            '});\n' +
            'store.reset()'}</Highlight>
        </div>
    }
}
