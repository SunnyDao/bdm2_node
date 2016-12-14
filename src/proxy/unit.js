/**
 * author:yuxiaochen@lifang.com
 * desc:单元服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA"); 

class Unit {
    constructor() {
        this.name = this.constructor.name;
    }
}

export default Unit;