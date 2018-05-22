
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
        let obj:basicObject = {};

        if (mainObj !== undefined && mergeObj !== undefined) {

            // main object
            let mnObj:any;
            for (mnObj in mainObj) {
                obj[mnObj] = mainObj[mnObj];
            }

            // merge object
            let mrgObj:any;
            for (mrgObj in mergeObj) {
                if (obj[mrgObj] !== undefined) {
                    obj[mrgObj] = mergeObj[mrgObj];
                } else {
                    throw new Error('Tanımsız bir name(' + mrgObj + ') kullandınız!');
                }
            }

            return obj;
        } else {
            throw new Error('Lütfen default objeniz ve birleştireceğiniz objeyi boş burakmayınız...');
        }
    }
}