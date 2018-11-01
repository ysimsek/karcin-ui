class i18n{

    private data:any = {};

    addLanguageData(data:any){
        this.data = data;
    }

    message(id:any,value?:any){
        let data = this.getLanguageData();
        return this.replace(data.message[id], value);
    }

    getLanguageData(){
        return this.data;
    }

    replace(str:any, obj:any) {
        var re = /{([^}]*.?)\}/g, match;
        if (re.exec(str) != null){
            while(match = re.exec(str)) {
                str = str.replace(match[0], obj[match[1]])
                re.lastIndex = 0;
            }
        }
        return str;
    }
}

export default new i18n();
