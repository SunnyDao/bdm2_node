import path from 'path';
import fs from 'fs';
import config from '../utils/config';

const soaConf = config.getSoaConf();
let ca = [];
if (soaConf && soaConf.ssl.length > 0) {
    for (let s of soaConf.ssl) {
        let caFile = path.join(__dirname, '..', '..','ssl', s);
        ca.push(fs.readFileSync(caFile));
    }
}

export default ca;
