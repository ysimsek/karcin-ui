import * as React from "react";
var AmCharts = require("@amcharts/amcharts3-react");
import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";
import "amcharts3/amcharts/themes/chalk";
import "amcharts3/amcharts/themes/dark";
import "amcharts3/amcharts/themes/patterns";
import "amcharts3/amcharts/themes/black";
import "amcharts3/amcharts/gantt"
import "ammap3/ammap/ammap";


export interface AmChartProps{

    /**
     * AmCharts theme {black,chalk,dark,light,patterns}
     */
    theme?:string;
    /**
     * AmCharts color intensity {0...}
     */
    colorSteps?:number;
    /**
     * AmChart waiting data
     */
    centerAllCode?:any;
    /**
     * onChange returned
     */
    clickOnChange?: any;
    /**
     * Click the zoom
     * true or false default false
     */
    zoom ?: boolean;
    /**
     * Set the country code
     */
    code ?: any;
    /**
     * Set the map title
     */
    title ?: string;
    /**
     * Set the Page height
     */
    height ?: string | number;
    /**
     * Set the array data with idField, descrField and valueField
     */
    data ?: Array<any>;
    /**
     * id in Data field
     */
    idField ?: any;
    /**
     * value in data field
     */
    valueField ?: any;
    /**
     * description in data field
     */
    descrField ?: any;
    rendererItems ?: any;
    /**
     * HaritaMap
     */
    map ?: any;
}

function g() {
    console.log("g(): evaluated");
    return function (target:any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

export default class MapChart extends React.Component<AmChartProps,any>{

    static defaultProps : Partial<AmChartProps> = {
        theme : "light",
        colorSteps : 50,
        zoom : false
    }

    //chart için defaultMap
    defaultMap = "usaLow";
    //Turkiye koordinatları
    geo = {"country_code": "TR", "country_name": "Turkey"};
    //Seçilen harita değer içerisinde dönülecek
    countryMaps:any = {
        "AF": [ "afghanistanLow" ],
        "AL": [ "albaniaLow" ],
        "DZ": [ "algeriaLow" ],
        "AD": [ "andorraLow" ],
        "AO": [ "angolaLow" ],
        "AR": [ "argentinaLow" ],
        "AM": [ "armeniaLow" ],
        "AU": [ "australiaLow" ],
        "AT": [ "austriaLow" ],
        "AZ": [ "azerbaijanLow" ],
        "BS": [ "bahamasLow" ],
        "BH": [ "bahrainLow" ],
        "BD": [ "bangladeshLow" ],
        "BY": [ "belarusLow" ],
        "BE": [ "belgiumLow" ],
        "BZ": [ "belizeLow" ],
        "BT": [ "bhutanLow" ],
        "BO": [ "boliviaLow" ],
        "BA": [ "bosniaHerzegovinaCantonsLow" ],
        "BW": [ "botswanaLow" ],
        "BR": [ "brazilLow" ],
        "BN": [ "bruneiDarussalamLow" ],
        "BG": [ "bulgariaLow" ],
        "BF": [ "burkinaFasoLow" ],
        "BI": [ "burundiLow" ],
        "KH": [ "cambodiaLow" ],
        "CM": [ "cameroonLow" ],
        "CA": [ "canadaLow" ],
        "CV": [ "capeVerdeLow" ],
        "CF": [ "centralAfricanRepublicLow" ],
        "TD": [ "chadLow" ],
        "CL": [ "chileLow" ],
        "CN": [ "chinaLow" ],
        "CO": [ "colombiaLow" ],
        "CD": [ "congoDRLow" ],
        "CG": [ "congoLow" ],
        "CR": [ "costaRicaLow" ],
        "HR": [ "croatiaLow" ],
        "CU": [ "cubaLow" ],
        "CY": [ "cyprusLow" ],
        "UN": [ "cyprusNorthernCyprusLow" ],
        "GB": [ "unitedKingdomLow" ],
        "CZ": [ "czechRepublicLow" ],
        "DK": [ "denmarkLow" ],
        "DJ": [ "djiboutiLow" ],
        "DO": [ "dominicanRepublicLow" ],
        "EC": [ "ecuadorLow" ],
        "EG": [ "egyptLow" ],
        "SV": [ "elSalvadorLow" ],
        "EE": [ "estoniaLow" ],
        "FI": [ "finlandLow" ],
        "FR": [ "france2016Low" ],
        "GE": [ "georgiaLow" ],
        "DE": [ "germanyLow" ],
        "GR": [ "greeceLow" ],
        "GT": [ "guatemalaLow" ],
        "GN": [ "guineaLow" ],
        "GY": [ "guyanaLow" ],
        "HT": [ "haitiLow" ],
        "HN": [ "hondurasLow" ],
        "HK": [ "hongKongLow" ],
        "HU": [ "hungaryLow" ],
        "GL": [ "icelandLow" ],
        "IS": [ "icelandLow" ],
        "IN": [ "indiaLow" ],
        "ID": [ "indonesiaLow" ],
        "MY": [ "malaysiaLow" ],
        "IR": [ "iranLow" ],
        "IQ": [ "iraqLow" ],
        "IE": [ "irelandLow" ],
        "IL": [ "israelLow" ],
        "PS": [ "palestineLow" ],
        "VA": [ "italyLow" ],
        "SM": [ "sanMarinoLow" ],
        "MT": [ "italyLow" ],
        "IT": [ "italyLow" ],
        "JM": [ "jamaicaLow" ],
        "JP": [ "japanLow" ],
        "KZ": [ "kazakhstanLow" ],
        "KE": [ "kenyaLow" ],
        "XK": [ "kosovoLow" ],
        "KG": [ "kyrgyzstanLow" ],
        "LA": [ "laosLow" ],
        "LV": [ "latviaLow" ],
        "LT": [ "lithuaniaLow" ],
        "LU": [ "luxembourgLow" ],
        "MK": [ "macedoniaLow" ],
        "ML": [ "maliLow" ],
        "MX": [ "mexicoLow" ],
        "MD": [ "moldovaLow" ],
        "MN": [ "mongoliaLow" ],
        "ME": [ "montenegroLow" ],
        "MA": [ "moroccoLow" ],
        "MM": [ "myanmarLow" ],
        "NP": [ "nepalLow" ],
        "NL": [ "netherlandsLow" ],
        "NZ": [ "newZealandLow" ],
        "NI": [ "nicaraguaLow" ],
        "NG": [ "nigeriaLow" ],
        "NO": [ "norwayLow" ],
        "AE": [ "unitedArabEmiratesLow" ],
        "OM": [ "omanLow" ],
        "PK": [ "pakistanLow" ],
        "PA": [ "panamaLow" ],
        "PY": [ "paraguayLow" ],
        "PE": [ "peruLow" ],
        "PH": [ "philippinesLow" ],
        "PL": [ "polandLow" ],
        "PT": [ "portugalLow" ],
        "PR": [ "puertoRicoLow" ],
        "US": [ "usaLow" ],
        "QA": [ "qatarLow" ],
        "RO": [ "romaniaLow" ],
        "RW": [ "rwandaLow" ],
        "SA": [ "saudiArabiaLow" ],
        "RS": [ "serbiaLow" ],
        "SG": [ "singaporeLow" ],
        "SK": [ "slovakiaLow" ],
        "SI": [ "sloveniaLow" ],
        "LS": [ "southAfricaLow" ],
        "ZA": [ "southAfricaLow" ],
        "KR": [ "southKoreaLow" ],
        "ES": [ "spainLow" ],
        "LK": [ "sriLankaLow" ],
        "SR": [ "surinameLow" ],
        "SE": [ "swedenLow" ],
        "CH": [ "switzerlandLow" ],
        "SY": [ "syriaLow" ],
        "TW": [ "taiwanLow" ],
        "TJ": [ "tajikistanLow" ],
        "TH": [ "thailandLow" ],
        "TR": [ "turkeyLow" ],
        "UG": [ "ugandaLow" ],
        "UA": [ "ukraineLow" ],
        "GG": [ "unitedKingdomLow" ],
        "JE": [ "unitedKingdomLow" ],
        "IM": [ "unitedKingdomLow" ],
        "UY": [ "uruguayLow" ],
        "UZ": [ "uzbekistanLow" ],
        "VE": [ "venezuelaLow" ],
        "VN": [ "vietnamLow" ],
        "YE": [ "yemenLow" ]
    };
    //Harita title almak için boş dizi tanımlanıyor
    titles:Array<any> = [];
    currentMap = this.props.map;

    balloonTextShow: any = "";

    //tüm şehir kodlarına erişmek için
    allCentralKey: any = [];


    /**
     * initial values
     * @param props
     */
    constructor(props:Object){
        super(props);

        //dizi içerisinde değer döndürmek için
        if (this.countryMaps[this.props.code] !== undefined) {
            this.currentMap = this.countryMaps[this.geo.country_code][0];

            // add country title
            if (this.geo.country_name) {
                this.titles.push({
                    "text": this.props.title
                });
            }
        }
    }

    mapData = {
        "type": "map",
        "theme": this.props.theme,
        "colorSteps": this.props.colorSteps,
        "dataProvider": {
            "mapURL": "amcharts/svg/"+ this.currentMap + ".svg",
            "getAreasFromMap": true,
            "zoomLevel": 0.9,
            "areas": []
        },
        "areasSettings": {
            "autoZoom": this.props.zoom == true ? "true" : undefined,
            "balloonText": this.balloonText()
        },
        "valueLegend": {
            "right": 10,
            "minValue": "little",
            "maxValue": "a lot!"
        },
        "zoomControl": {
            "minZoomLevel": 0.9
        },
        "titles": this.titles,
        "listeners": [{
                        "event": "init",
                        "method": this.updateHeatmap.bind(this)
                      },
                      {
                        "event":"clickMapObject",
                        "method": this.handleCursorChange.bind(this)
                      }]
    };



    render(){
        return <AmCharts.React refs="amchartMap" style={{width:"100%",height:this.props.height}} options={this.mapData} ref="turkmap"/>
    }

    //Şehrin üzerine geldiğinde gösterilecek data
    balloonText(){
        return "[[title]]: <strong>[[value]]</strong><br/>[[description]]";
    }


    /**
     * map ile gelen event gösterimi için değişken,
     * init de gösterilecek data ayıklanıyor
     * @type {*}
     */
    updateHeatmap( event:any ) {
        var map = event.chart;
        if ( map.dataGenerated )
            return;
        if ( map.dataProvider.areas.length === 0 ) {
            setTimeout( this.updateHeatmap, 100 );
            return;
        }

        //Prop da Data varsa bu şekilde
        if(this.props.data != undefined) {
            let data = this.props.data;
            let me = this;
            for ( var i = 0; i < map.dataProvider.areas.length; i++ ) {
                //////////////allCentralKey///////////////////////////
                let returnObject = {
                    name:map.dataProvider.areas[i].enTitle,
                    id:map.dataProvider.areas[i].id
                }
                me.allCentralKey.push(returnObject);
                ///////////////////////////////////////////////////////
                data.forEach(function (val: any, idx: number) {
                    if(map.dataProvider.areas[i].id == val[me.props.idField]) {
                        map.dataProvider.areas[i].description = (me.props.rendererItems)?me.props.rendererItems(val): val[me.props.descrField]
                        map.dataProvider.areas[i].value = val[me.props.valueField] != undefined ? val[me.props.valueField] : NaN;
                    }
                })
            }
        }else { //Propsda data yoksa random sayı ata
            for ( var i = 0; i < map.dataProvider.areas.length; i++ ) {
                map.dataProvider.areas[ i ].value = Math.round( Math.random() * 10000 );
                //////////////allCentralKey///////////////////////////
                let returnObject = {
                    name:map.dataProvider.areas[i].enTitle,
                    id:map.dataProvider.areas[i].id
                }
                this.allCentralKey.push(returnObject);
                ///////////////////////////////////////////////////////
            }
        }
        map.dataGenerated = true;
        map.validateNow();
    }
    /**
     * Change Map Turkey
     * e = true (Object), a,b,c === false()
     * Harita onClick olduğunda şehirler
     * @param e
     * @param a
     * @param b
     * @param c
     */
    handleCursorChange(e:any, value:any) {
        let me = this;
        if(me.props.clickOnChange){
           e.centrals = me.allCentralKey;
           return me.props.clickOnChange(e)
        }else{
            //TODO
        }

    }

}
