/**
 * author:yuxiaochen@lifang.com
 * desc:工厂类
 */

import modulesLoader from '../utils/loader';
import SOA_Base from './soa_base';


class ModuleFactory {

    /**
     * @desc:根据type创建相应的Service类
     * @param  {String} type
     */
    static createService(type) {
        let serviceLoader = modulesLoader.getModules("service");
        if (type) {
            if (serviceLoader && serviceLoader.hasOwnProperty(type)) {
                let customService = serviceLoader[type];
                return new customService["default"]();
            }
        }

        return new SOA_Base();
    }

    /**
     * @desc 根据不同type创建Proxy 类
     * @param  {} type
     */
    static createProxy(type) {
        let proxyLoader = modulesLoader.getModules("proxy");
        if (type) {
            if (proxyLoader && proxyLoader.hasOwnProperty(type)) {
                let proxy = proxyLoader[type];
                return new proxy["default"]();
            }
        }
        return null;
    }
}

export default ModuleFactory;