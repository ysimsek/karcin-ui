import '../../css/karcin-ui.css';
export default class FileExport {
    props: any;
    constructor(props: any);
    fileControl(): void;
    base64toBlob: (b64Data: any, contentType?: any, sliceSize?: any) => Blob;
}
