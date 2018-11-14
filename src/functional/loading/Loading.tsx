class Loading{

    element:any;
    loading:any;

    add(obj?:any){



        this.element = document.createElement('div');
        this.element.classList.add("loading");
        var name = obj != undefined ? (obj.label != undefined ? obj.label : "" ): "";
        var id:any = obj != undefined ? (obj.id != undefined ? document.getElementById(obj.id) : null) : null;

        if(id != null) {
            this.element.innerHTML =
                '<div class="pre-loading show">\n' +
                '    <span class="glyphicon glyphicon-inset glyphicon-refresh spinning"></span>\n' +
                '<div class="pre-loading-text">' + name + '</div>'
            '</div>';

            id.appendChild(this.element);
            id.style.setProperty("position", "relative");
            document.body.style.setProperty("overflow", "hidden");
        }else{
            this.element.innerHTML =
                '<div class="pre-loading show">\n' +
                '    <span class="glyphicon glyphicon-refresh spinning"></span>\n' +
                '<div class="pre-loading-text">' + name + '</div>'
            '</div>';
            document.body.style.setProperty("overflow", "hidden");
            document.body.appendChild(this.element);
        }

    }

    remove(obj?:string){
        document.body.removeChild(this.element)
    }

}
export default new Loading();

