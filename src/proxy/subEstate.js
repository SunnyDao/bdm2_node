/**
 * author:yuxiaochen@lifang.com
 * desc:子小区服务调用类
 */


import SOAFactory from '../core/soafactory';

let bdmSOA = SOAFactory.createSOA("bdmSOA");

class SubEstate {
    constructor() {
        this.name = this.constructor.name;
    }
}

export default SubEstate;