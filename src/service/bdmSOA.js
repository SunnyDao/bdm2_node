/**
 * author:yuxiaochen@lifang.com
 * desc:BDM调用SOA 服务类
 */

import SOA_Base from '../core/soa_base';
import sslReader from '../utils/sslReader';
import config from '../utils/config';
import _ from 'lodash';


const env = process.env.STAGE_ENV;
const soaConf = config.getSoaConf();

class BDM_SOA extends SOA_Base {
    /**
     * @desc 构造函数
     */
    constructor() {
        super();
    }

    /**
     * @desc 生成请求的options
     * @param  {Object} {data:请求参数
     * @param  {String} moduleName:模块名称
     * @param  {String} actionName:方法名称
     * @param  {String} method
     * @param  {Boolean} json
     * @param  {String} contentType="application/json"
     */
    genOpts(data, {moduleName, actionName, json, method, encoding, contentType}) {
        let soa_opts = super.genOpts(data, { moduleName, actionName, json, method, encoding, contentType });

        let cookies = data.cookies;
        let cookieArray = [];

        //node请求的cookies带到soa请求中
        if (cookies) {
            //es6遍历对象
            for (let key in cookies) {
                cookieArray.push(key + "=" + cookies[key]);
            }

            if (method == "post") {
                //设置请求头cookie
                soa_opts.headers = {
                    cookie: cookieArray.join(';'),
                    "Content-Type": contentType
                };
            }
            else {
                //设置请求头cookie
                soa_opts.headers = {
                    cookie: cookieArray.join(';')
                };
            }
        }

        //非生产环境需要带上自签发的ca证书
        if (env !== 'prod' && soaConf.ssl) {
            soa_opts.ca = sslReader
        }


        if (soa_opts.body && soa_opts.body.cookies) delete soa_opts.body.cookies;
        if (soa_opts.qs && soa_opts.qs.cookies) delete soa_opts.qs.cookies;

        return soa_opts;
    }


    /**
     * 重写 beforeConverted
    */
    beforeConverted(s, m, d) {
        let {status, message, data} = super.beforeConverted(s, m, d);

        //已登录情况下，session过期处理逻辑。如果有配置sessionExpireCode则进行登陆信息过期处理
        if (soaConf.sessionExpireCode && _.isString(data)) {
            let value = JSON.parse(data);
            if (value.hasOwnProperty("messageNo") && value.messageNo.toString() === soaConf.sessionExpireCode.toString()) {
                status = soaConf.sessionExpireCode;
                message = "登陆信息过期";
            }
        }

        return {
            status,
            message,
            data
        }
    }
}

export default BDM_SOA;