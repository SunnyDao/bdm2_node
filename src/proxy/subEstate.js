/**
 * author:yuxiaochen@lifang.com
 * desc:子小区服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class SubEstate {
    constructor() {
        this.name = this.constructor.name;
    }

}

export default SubEstate;