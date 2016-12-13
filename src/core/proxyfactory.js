/**
 * author:luwei@lifang.com
 * desc:proxy 工厂类
 */

import modulesLoader from '../utils/loader';

const pxyLoader = modulesLoader.getModules("proxy");

class ProxyFactory {
    
    /**
     * desc:根据type创建相应的SOA类
     * @param  {String} type
     */
    static createPxy(type) {
        if (type) {
            if (pxyLoader&&pxyLoader.hasOwnProperty(type)) {          
                let proxy = pxyLoader[type];
                return new proxy["default"]();
            }
        }
        return null;
    }
}

export default ProxyFactory;