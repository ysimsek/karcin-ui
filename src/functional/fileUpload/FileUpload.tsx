import * as React from 'react';
import FaIcon from '../faicon/FaIcon';

export interface FileUploadProps {

}

export interface FileUploadState {

}

export default class FileUpload extends React.Component <FileUploadProps,FileUploadState> {
    constructor(props:FileUploadProps){
        super(props);

    }

    fileInput:any;
    getFileImage:any = [];

    render(){
        return (<div className="karcin-file-upload">
            <input type="file" name="fileInput" ref={e=>this.fileInput = e} onChange={this.getData}/>
            <div className="select-file" onClick={this.clickFile}>
                <span>Dosya Seçiniz</span>
            </div>
            <div className="list-images">
            {this.renderFile()}
            </div>
        </div>);
    }

    clickFile = () => {
        this.fileInput.click();
    }

    getData = (e:any) => {
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();

            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
                this.getImage(reader.result, file);
            })
        }
    }

    getImage(imageData:any, file:any){
        if(imageData !== undefined){
            this.getFileImage.push({file:imageData, filesOption:file});
            this.forceUpdate();
        }
    }

    renderFile(){
        let items:Array<any> = [];

        this.getFileImage.forEach((value:any, index:any)=>{
            items.push(<div className="items" key={index}>
            <div className="close-item" onClick={(index)=>{this.removeItems(index)}}><FaIcon code="fa-times"/></div>
            <div className="image">
                {this.getRenderImage(value)}
            </div>
            <div className="text">
                <div className="center">
                <strong>{value.filesOption.name}</strong>
                <span>{value.filesOption.type}</span>
                <span>{value.filesOption.size + "KB"}</span>
                </div>
            </div>
            </div>);
        });

        return items;
    }

    getRenderImage(value:any){
        let extensions:any = value.filesOption.type.split('/')[1];
        if(extensions !== undefined) {
            let showImageExtensions = ['jpg', 'jpg', 'jpeg', 'gif', 'png'];
            if(showImageExtensions.indexOf(extensions) !== -1){
                return <img src={value.file}></img>
            }else {
                return <span className="file-icon file-icon-lg" data-type={extensions}></span>
            }
        }
        return null;
    }

    removeItems(id:any){
        this.getFileImage.splice(id, 1);
        this.forceUpdate();
    }
}
