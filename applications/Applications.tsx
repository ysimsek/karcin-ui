export default class Applications {

    /**
     * merge object 'Object.assign' similar
     * @param {object} mainObj
     * @param {object} mergeObj
     * @returns {{}}
     */
    static mergeObject(mainObj: object, mergeObj: object) {
        let obj = {};

        if (mainObj !== undefined && mergeObj !== undefined) {

            // main object
            for (let mnObj in mainObj) {
                obj[mnObj] = mainObj[mnObj];
            }

            // merge object
            for (let mergObj in mergeObj) {
                if (obj[mergObj] !== undefined) {
                    obj[mergObj] = mergeObj[mergObj];
                } else {
                    throw new Error('Tanımsız bir name(' + mergObj + ') kullandınız!');
                }
            }

            return obj;
        } else {
            throw new Error('Lütfen default objeniz ve birleştireceğiniz objeyi boş burakmayınız...');
        }
    }
}