/**
 * author:yuxiaochen@lifang.com
 * desc:单元服务调用类
 */


import SOAFactory from '../core/soafactory';

let bdmSOA = SOAFactory.createSOA("bdmSOA");

class Unit {
    constructor() {
        this.name = this.constructor.name;
    }
}

export default Unit;