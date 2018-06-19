
export interface basicObject {
    [key: string] : string | any
}

export default class Applications {

    /**
     * merge object 'Object.assign' similar
     * @param {object} mainObj
     * @param {object} mergeObj
     * @returns {{}}
     */
    static mergeObject(mainObj: basicObject, mergeObj: basicObject) {
        if (mainObj !== undefined && mergeObj !== undefined) {
            let obj:basicObject = mainObj;

            // merge object
            let mrgObj:any;
            for (mrgObj in mergeObj) {
                if (mergeObj[mrgObj] !== undefined && mergeObj[mrgObj] !== null) {
                    obj[mrgObj] = mergeObj[mrgObj];
                }
            }

            // main object
            let mnObj:any;
            for (mnObj in obj) {
                if(obj[mnObj] === undefined || obj[mnObj] === null) {
                    delete obj[mnObj];
                }

            }

            return obj;
        } else {
            throw new Error('Lütfen default objeniz ve birleştireceğiniz objeyi boş burakmayınız...');
        }
    }
}