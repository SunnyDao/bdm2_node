/**
 * author:luwei@lifang.com
 * desc:logger工具类
 */
import path from "path";
import fs from "fs";
import log4js from "log4js";
import logConf from "../../configs/log4js.json";

//创建log的目录
let appenders = logConf.appenders;
if (appenders) {
    let logDir = path.join(__dirname,"..","..","logs");
    if(!fs.existsSync(logDir)){  
        fs.mkdirSync(logDir);     
    }
    for(let a of appenders){
        if(a.type && a.type == "dateFile"){
            let dir = path.join(__dirname,"..","..",a.filename);
            if(!fs.existsSync(dir)){  
                fs.mkdirSync(dir);     
            }
        }
    }
}

//加载log4js的配置
log4js.configure(logConf);

/**
 * desc:logger工具类
 */
class LoggerUtil{
    constructor(){

    }

    /**
     * 获取不同类型logger的实例
     */
    static loggerInfo = log4js.getLogger('info');
    static loggerError = log4js.getLogger('error');
    static loggerWarn = log4js.getLogger('warn');

    /**
     * desc:记录info
     * @param  {String} info
     */
    static info(info){
        if (info) this.loggerInfo.info(info);
    }

    /**
     * desc:记录error
     * @param  {String} error
     */
    static error(error){
        if(error) this.loggerError.error(error);
    }
    /**
     * desc:记录warning
     * @param  {String} warn
     */
    static warn(warn){
        if(warn) this.loggerWarn.warn(warn);
    }
}

export default LoggerUtil;

