/**
 * author:yuxiaochen@lifang.com
 * desc:公共服务调用soa类
 */

import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA"); 

class Common {
    constructor() {
        this.name = this.constructor.name;
    }

    /**
     * desc:获取地级市板块信息
     * @param  {Integer} {user
     * @param  {Integer} min
     * @param  {Integer} max
     * @param  {Object} cookies}
     */
    async getArea(userId, {min, max, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: {
                userId: userId,
                min,
                max
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,                  //request请求参数
            soaOpt: {
                moduleName: this.name,        //模块名称    
                actionName: "area",             //请求接口名称
                converter: { mapperName: "area", mapperFunc: "list" }
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 获取用户信息
     * @param  {Object} {cookies}
     */
    async getUser({cookies}) {
        let opt_data = {
            cookies
        }

        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "user",
                converter: false
            }
        }

        return await bdmService.request(this.options);
    }

}

export default Common;