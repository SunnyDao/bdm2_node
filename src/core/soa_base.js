/**
 * author:yuxiaochen@lifang.com
 * desc:调用SOA 服务的基类
 */

import request from 'request-promise';
import logger from '../utils/logger';
import config from '../utils/config';
import moduleLoader from '../utils/loader';
import _ from 'lodash';
import fs from 'fs';


const mapper = moduleLoader.getModules("mapper");
const soaConf = config.getSoaConf();

class SOA_Base {
    /**
     * @desc 构造函数
     */
    constructor() {

    }


    /**
     * @param  {Object} {data:请求参数
     * @param  {soaOpt:soa请求参数
     * @param  {String} moduleName:模块名称
     * @param  {String} actionName:方法名称
     * @param  {String} method="get"
     * @param  {Boolean} json=true:返回数据是否转成json
     * @param  {String} encoding
     * @param  {Boolean|Object} converter=true|{mapperName:"xxx",mapperFunc:"yyy"}}}false:不对soa数据进行转换，true:根据moduleName和actionName找相应的mapper，object:根据mapperName和mapperFunc找相应的mapper
     */
    async request({data, soaOpt: { moduleName, actionName, method = "get", json = true, encoding, converter = true}}) {
        //生成soa 请求options
        let soa_opts;

        try {
            soa_opts = this.genOpts(data, { moduleName, actionName, json, method, encoding });

            //收到数据之后的转换
            soa_opts.transform = ({status, message, data} = { status: 0, message: "SOA_Error", data: null }) => {
                return this.transform({ moduleName, actionName, converter }, { status, message, data });
            };

            //根据method判断发送相应请求
            let result = method.toLowerCase() == "get" ? await request.get(soa_opts) : await request.post(soa_opts);

            return result;
        } catch ({name, message, options}) {
            //记录error
            delete soa_opts.ca;
            logger.error(`${moduleName}_${actionName}_SOA_Error==>opts:${JSON.stringify(soa_opts)}`);
            logger.error(`${moduleName}_${actionName}_SOA_Error==>name:${name},message:${message}`);
            return { status: 0, message: "SOA_Error", data: null }
        }
    }

    /**
     * @desc 生成请求的options
     * @param  {Object} {data:请求参数
     * @param  {String} moduleName:模块名称
     * @param  {String} actionName:方法名称
     * @param  {String} method
     * @param  {Boolean} json
     */
    genOpts(data, {moduleName, actionName, json, method, encoding}) {
        let soaConf = config.getSoaConf();

        let soa_opts = {};
        soa_opts.url = moduleName && actionName ? config.getApi(_.lowerFirst(moduleName), actionName) : "";
        soa_opts.timeout = soaConf.timeout;
        soa_opts.encoding = encoding;

        if (_.isNull(encoding)) {
            soa_opts.json = false;
        }
        else {
            soa_opts.json = json;
        }

        soa_opts.method = method;

        if(data.qs) soa_opts.qs = _.isPlainObject(data.qs) ? _.omitBy(data.qs, _.isUndefined) : data.qs;
        if(data.body) soa_opts.body =  _.isPlainObject(data.body) ? _.omitBy(data.body, _.isUndefined) : data.body;
        if(data.form) soa_opts.form =  _.isPlainObject(data.form) ? _.omitBy(data.form, _.isUndefined) : data.form;
        //记录请求参数
        logger.info(`[${moduleName}_${actionName}_SOA_Request]:${JSON.stringify(soa_opts)}`);

        return soa_opts;
    }


    /**
     * @desc SOA Reponse 数据 转换之前调用的函数
     * @param  {} status
     * @param  {} message
     * @param  {} data
     */
    beforeConverted(status, message, data) {
        return {
            status,
            message,
            data
        }
    }

    /**
     * @desc 对于response 对象的 转换方法
     * @param  {String} moduleName:模块名称
     * @param  {String} actionName:方法名称
     * @param  {Boolean|Object} converter}|{mapperName:"xxx",mapperFunc:"yyy"}}}false:不对soa数据进行转换，true:根据moduleName和actionName找相应的mapper，object:根据mapperName和mapperFunc找相应的mapper
     * @param  {} res:soa返回结果
     */
    transform({moduleName, actionName, converter}, res) {
        try {
            //记录original response data
            logger.info(`[${moduleName}_${actionName}_SOA_Respone]:${JSON.stringify(res)}`);

            //调用 beforeConverted 方法
            let {status, message, data} = this.beforeConverted(res.status, res.message, res.data);

            if (converter) {
                //获取converter function
                let converterFn = this.getConverter({ moduleName, actionName, converter });

                if (_.isFunction(converterFn) && status && status.toString() === soaConf.successCode.toString()) {
                    data = converterFn(data);
                }
            }

            return {
                status,
                message,
                data
            }
        }
        catch ({name, message, options}) {
            logger.error(`transform=> name:${name},message:${message}`);
            return {
                status: 0,
                message: "SOA_Transform_Error",
                data: null
            }
        }
    }

    /**
    * @desc 获取数据转换的方式
    * @param  {String} moduleName:模块名称
    * @param  {String} actionName:方法名称
    * @param  {Boolean|Object} converter}|{mapperName:"xxx",mapperFunc:"yyy"}}}false:不对soa数据进行转换，true:根据moduleName和actionName找相应的mapper，object:根据mapperName和mapperFunc找相应的mapper
    */
    getConverter({moduleName, actionName, converter}) {
        let converterFn;

        if (_.isObject(converter) && converter.mapperName && converter.mapperFunc) {
            converterFn = mapper[_.lowerFirst(converter.mapperName)]["default"][converter.mapperFunc];
        } else if (_.isBoolean(converter) && converter) {
            converterFn = mapper[_.lowerFirst(moduleName)]["default"][actionName];
        }

        return converterFn;
    }
}

export default SOA_Base;