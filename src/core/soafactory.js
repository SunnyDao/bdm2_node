/**
 * author:yuxiaochen@lifang.com
 * desc:SOA 工厂类
 */

import modulesLoader from '../utils/loader';
import SOA_Base from './soa_base';

const serviceLoader = modulesLoader.getModules("service");

class SOAFactory {
    
    /**
     * desc:根据type创建相应的SOA类
     * @param  {String} type
     */
    static createSOA(type) {
        if (type) {
            if (serviceLoader&&serviceLoader.hasOwnProperty(type)) {          
                let customService = serviceLoader[type];
                return new customService["default"]();
            }
        }

        return new SOA_Base();
    }
}

export default SOAFactory;