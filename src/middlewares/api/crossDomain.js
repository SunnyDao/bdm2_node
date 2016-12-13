/**
 * desc:crossDomain 配置类
 * author:yuxiaochen@lifang.com
 */

import cors from 'cors';
import configUtil from '../../utils/config';
import appConfig from '../../../configs/app.json';

let crossDomain;
if (appConfig.crossDomain) {
    let whiteList = configUtil.getWhiteList();
    let corsOptions = {
        origin: (origin, callback) => {
            var originIsWhitelisted = whiteList.indexOf(origin) !== -1;
            callback(originIsWhitelisted ? null : 'Bad Request', originIsWhitelisted);
        }
    };
    if (whiteList && whiteList.length) {
        crossDomain = cors(corsOptions);
    }
}

export default crossDomain;


