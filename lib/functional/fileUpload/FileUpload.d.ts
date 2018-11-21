import * as React from 'react';
export interface FileUploadProps {
}
export interface FileUploadState {
}
export default class FileUpload extends React.Component<FileUploadProps, FileUploadState> {
    constructor(props: FileUploadProps);
    fileInput: any;
    getFileImage: any;
    render(): JSX.Element;
    clickFile: () => void;
    getData: (e: any) => void;
    getImage(imageData: any, file: any): void;
    renderFile(): any[];
    getRenderImage(value: any): JSX.Element | null;
    removeItems(id: any): void;
}
