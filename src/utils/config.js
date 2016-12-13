/**
 * desc:获取配置项
 */

/**
 * desc:加载配置目录下的相关模块
 */
import staticConfs from "../../configs/static.json";
import appConfs from "../../configs/app.json";
import apiConfs from "../../configs/api.json";
import redisConfs from "../../configs/redis.json";
import whiteList from "../../configs/whiteList.json";

/**
 * 获取阶段环境全局变量，这个变量的设置方法：
 * 进入命令行，set STAGE_ENV=dev 这样就将STAGE_ENV设置成了dev，可以有如下值：dev | test | sim | prod
 */
let env = process.env.STAGE_ENV;

/**
 * desc:创建config配置的类
 */
class Config {
    constructor() {

    }
    /**
     * desc:获取静态资源路径的方法
     * @param  {} category
     */
    static getStatic(category) {
        return staticConfs["prefix"][env] + staticConfs[category];
    }
    /**
     * desc:获取静态资源路径的方法
     * @param  {} name
     * @param  {} key
     */
    static getApi(name, key) {
        return `${global.apiDomain}/${apiConfs[name][key]}`;
    }

    /**
    * desc:获取当前域名
    * @param  {} name
    * @param  {} key
    */
    static getDomain() {
        return apiConfs["domain"][env];
    }

    /**
     * desc:获取整个应用当前版本
     */
    static getAppVersion() {
        return appConfs.version;
    }


    /**
     * desc:获取公共插件的js
     * @param  {Array} plugin
     */
    static getPluginJs(plugin) {
        let result = [];
        let router = staticConfs["prefix"][env] + staticConfs["util"];
        let jsConfig = staticConfs["pluginJs"];
        if (Array.isArray(plugin)) {
            for (let p of plugin) {
                if (jsConfig[p]) {
                    for (let j of jsConfig[p]) {
                        result.push(router + j);
                    }
                }
            }
        }
        return result
    }

    /**
     * desc:获取公共插件的css
     * @param  {Array} plugin
     */
    static getPluginCss(plugin) {
        let result = [];
        let router = staticConfs["prefix"][env] + staticConfs["util"];
        let cssConfig = staticConfs["pluginCss"];
        if (Array.isArray(plugin)) {
            for (let p of plugin) {
                if (cssConfig[p]) {
                    for (let c of cssConfig[p]) {
                        result.push(router + c);
                    }
                }
            }
        }
        return result
    }
    /**
     * desc:获取SOA配置
     */
    static getSoaConf() {
        let conf = appConfs['SOA'] || { timeout: 60000, successCode: 200 }
        for (let key in conf) {
            if (!conf[key]) {
                if (key.toLowerCase() == "timeout") conf[key] = 60000;
                if (key.toLowerCase() == "successCode") conf[key] = 200;
            }
        }
        return conf;
    }

    /**
     * desc:获取Redis配置
     */
    static getRedisConf() {
        let redisArray = redisConfs[env];
        let redisConf = [];
        if (redisArray && redisArray.length) {
            for (let v of redisArray) {
                redisConf.push({
                    host: v.host,
                    port: v.port
                });
            }
        }

        return redisConf;
    }

    /**
     * desc:获取白名单设置
     */
    static getWhiteList() {
        return whiteList[env];
    }

    /**
     * desc:获取中间件配置
     */
    static getMiddlewares() {
        return appConfs.middleware;
    }
}
export default Config;



