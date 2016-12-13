/**
 * author:yuxiaochen@lifang.com
 * desc:公共服务调用soa类
 */


import SOAFactory from '../core/soafactory';

let financialSOA = SOAFactory.createSOA("financialSOA"); //法务系统SOA类

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
        return await financialSOA.request(this.options);
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

        return await financialSOA.request(this.options);
    }

    /**
     * desc:获取职位
     * @param  {Object} {cookies}
     */
    async getPosition({cookies}) {
        this.options = {
            data: { cookies },
            soaOpt: {
                moduleName: this.name,
                actionName: "position",
                converter: false,
                method: "post"
            }
        }
        return await financialSOA.request(this.options);
    }
}

export default Common;