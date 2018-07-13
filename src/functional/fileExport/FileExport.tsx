import * as React from 'react';
import * as ReactDom from 'react-dom';
import '../../css/karcin-ui.css';
import Applications from '../../applications/Applications';
const FileSaver = require('file-saver');

export default class FileExport{

    props:any = {
        extension   : 'pdf',
        fileName    : 'example',
        fileData    : null
    };

    constructor(props:any){
        this.props = Applications.mergeObject(this.props, props);

        if(this.props.fileData !== null && this.props.fileData !== ''){
            this.fileControl();
        }else {
            throw new Error('fileData empty');
        }
    }

    fileControl(){
        let newData = this.base64toBlob(this.props.fileData);
        FileSaver.saveAs(newData, this.props.fileName + '.' + this.props.extension);
    }


    base64toBlob = function(b64Data:any, contentType?:any, sliceSize?:any) {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
    
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
    
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
    
            var byteNumbers = new Array(slice.length);
            for (var i=0; i<slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
    
            var byteArray = new Uint8Array(byteNumbers);
    
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

}