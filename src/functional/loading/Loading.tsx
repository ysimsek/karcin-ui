class Loading{

    element:any;
    loading:any;

    add(obj?:any){
        this.element = document.createElement('div');
        this.element.classList.add("loading");
        var name = obj != undefined ? (obj.label != undefined ? obj.label : "" ): "";
        var id:any = obj != undefined ? (obj.id != undefined ? document.getElementById(obj.id) : null) : null;
        var color = obj != undefined ? (obj.color != undefined ? " "+obj.color:"") : "";
        if(id != null) {
            this.element.innerHTML =
                '<div class="pre-loading inset show">\n' +
                '    <span class="glyphicon glyphicon-inset glyphicon-refresh spinning' +
                color +
                '"></span>\n' +
            '</div>';
            this.element.setAttribute("id","setLoadIdOfSystem")
            id.appendChild(this.element);
            id.style.setProperty("position", "relative");
        }else{
            this.element.innerHTML =
                '<div class="pre-loading show">\n' +
                '    <span class="glyphicon glyphicon-refresh spinning'+ color+'"></span>\n'
            '</div>';
            document.body.style.setProperty("overflow", "hidden");
            document.body.appendChild(this.element);
        }

    }

    remove(obj?:any){
        try {
            if(obj != undefined){
                let element:any = document.getElementById(obj.id);
                let child:any = element.querySelector("#setLoadIdOfSystem");
                obj.id != undefined ? element.removeChild(child) : document.body.removeChild(this.element)
            }else{
                document.body.removeChild(this.element)
                document.body.style.removeProperty('overflow');
            }

        }catch (e){
            console.log(e)
        }
    }

}
export default new Loading();

