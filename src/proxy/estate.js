/**
 * author:yuxiaochen@lifang.com
 * desc:小区服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA"); 

class Estate {
    constructor() {
        this.name = this.constructor.name;
    }


    /**
     * @desc 获取小区子划分列表
     * @param  {} estateName
     * @param  {} subEstateId
     * @param  {} publishName
     * @param  {} checkStatus
     * @param  {} cityId
     * @param  {} districtId
     * @param  {} townId
     * @param  {} cookies
     */
    async getList({estateName, subEstateId, publishName, checkStatus, cityId, districtId, townId, cookies}) {
        //页面查询参数
        let opt_data = {
            form: {
                estateName,
                subEstateId,
                publishName,
                checkStatus,
                cityId,
                districtId,
                townId
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "list",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 获取小区审核详情信息
     * @param  {} id
     * @param  {} cookies
     */
    async getDetails({id, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: {
                id
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "details",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 通过
     * @param  {} id
     * @param  {} checkNote
     * @param  {} cookies
     */
    async pass({id, checkNote, cookies}) {
        //页面查询参数
        let opt_data = {
            form: {
                id,
                checkNote
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "pass",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 拒绝
     * @param  {} id
     * @param  {} checkNote
     * @param  {} cookies
     */
    async reject({id, checkNote, cookies}) {
        //页面查询参数
        let opt_data = {
            form: {
                id,
                checkNote
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "pass",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }
}

export default Estate;