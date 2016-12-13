/**
 * author:yuxiaochen@lifang.com
 * desc:小区服务调用类
 */


import SOAFactory from '../core/soafactory';

let bdmSOA = SOAFactory.createSOA("bdmSOA");

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
            reqData: {
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
        return await bdmSOA.request(this.options);
    }
}

export default Estate;