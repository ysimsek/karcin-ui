import * as React from "react";
import {MapChart,Panel} from "karcin-ui";
import {Row,Col} from "reactstrap";

const turkeyMapData = [
    {id: "TR-01",name: "Adana",value:"Pamuk, Adana Kebabı, ÇukurOva", point:700},
    {id: "TR-02",name: "Adıyaman",value:"Besni Üzümü, Nemrud Dağı, Kahta Çayı", point:170},
    {id: "TR-03",name: "Afyon",value:"Kaymak, Haşhaş, Sucuk, Mermer", point:370},
    {id: "TR-04",name: "Ağrı",value:"Ağrı Dağı, İshak Paşa Sarayı, Balık Gölü", point:377},
    {id: "TR-05",name: "Amasya",value:"Ihlara Vadisi, Eğri Minare, Yılanlı Kilise", point:533},
    {id: "TR-06",name: "Ankara",value:"Anıtkabir, Dağ Keçisi, Tiftik Keçisi, Hacı Bayram Veli Camisi", point:1133},
    {id: "TR-07",name: "Antalya",value:"Düden-Kurşunlu-Manavgat Şelaleleri, Dim-Damlataş-Karain Mağaraları, Olimpos-Beydağları-Köprülü Kanyon Milli Parkları", point:243},
    {id: "TR-08",name: "Artvin",value:"Boğa Güreşleri, Barhal Klisesi, Çoruh Nehri", point:612},
    {id: "TR-09",name: "Aydın",value:"Deve Güreşleri, Büyük Menderes Nehri, Afrodisias-Milet-Didim-Priene Antik Kentleri, Aydın İnciri", point:962},
    {id: "TR-10",name: "Balıkesir",value:"Susurluk Ayranı ve Tostu, Manyas Gölü ve Manyas Yoğurdu, Zeytin, Höşmerim Tatlısı", point:521},
    {id: "TR-34",name: "İstanbul",value:"İstanbul Boğazı, Yerebatan Sarnıcı, Ayasofya, SultanAhmet Meydanı", point:628},

];


export default class MapChartExam extends React.Component{
    render(){
        return <Row>
            <Col md={6}>
                <Panel title={"MapChart"}>
                    <MapChart
                        height={400}
                        data ={turkeyMapData}
                        idField={"id"}
                        valueField={"point"}
                        descrField={"value"}
                        zoom={true}
                        map = "turkeyLow"
                        code ="TR"
                        title={"Turkey"}
                    />
                </Panel>
            </Col>
            <Col md={6}>
                <Panel title={"MapChart"}>
                    <MapChart
                        title={"Brazil"}
                        map = "brazilHigh"
                        theme={"none"}
                        height={400}
                        code={"BR"}
                        colorSteps={20}/>
                </Panel>
            </Col>
            <Col md={4}>
                <Panel title={"MapChart"}>
                    <MapChart
                        title={"Egypt"}
                        map = "egyptHigh"
                        code={"EG"}
                        theme={"pattern"}
                        height={400}
                        colorSteps={20}/>
                </Panel>
            </Col>
            <Col md={4}>
                <Panel title={"MapChart"}>
                    <MapChart
                        title={"Haiti"}
                        map = "haitiHigh"
                        code={"HT"}
                        theme={"chalk"}
                        height={400}
                        colorSteps={20}/>
                </Panel>
            </Col>
            <Col md={4}>
                <Panel title={"MapChart"}>
                    <MapChart
                        title={"Bahama"}
                        map = "bahamasHigh"
                        code={"BS"}
                        clickOnChange={this.handleChange.bind(this)}
                        height={400}
                        colorSteps={20}/>
                </Panel>
            </Col>

        </Row>
    }
    handleChange(e:any) {
        console.log(e);
    }
}