/**
 * desc:工具 -> 解决路由页面匹配路由的样式及脚本名称获取，以及路由页面基础模板数据的获得等问题  
 */
import UrlParser from "./urlParser";
import config from "./config";

/**
 * desc:定义Router类
 */
class Router {
    constructor() {

    }

    /**
     * @param  {} req
     * @param  {boolean} matchStylesheet
     * @param  {boolean} matchJavascript
     */
    static getTemplateBasicData({req, matchStylesheet = false, matchJavascript = false, extraJavascripts, extraStylesheets, redirectUrl}) {
        //获取配置项，将静态资源路径变量加到模板变量中
        let up = new UrlParser(req.originalUrl);
        let MCCombined = up.getMCCombined();
        let templateData = {
            version: config.getAppVersion(),
            utilStaticPrefix: config.getStatic("util"), //工具类静态资源路径前缀
            appStaticPrefix: config.getStatic("app"),  //应用类静态资源路径前缀
            matchStylesheet: matchStylesheet ? MCCombined : "", //匹配路由的样式表文件
            matchJavascript: matchJavascript ? MCCombined : "", //匹配路由的脚本文件
            extraStylesheets: Array.isArray(extraStylesheets) ? config.getPluginCss(extraStylesheets) : [],  //除了公共stylesheet以及matchStylesheet之外还需要的样式表
            extraJavascripts: Array.isArray(extraJavascripts) ? config.getPluginJs(extraJavascripts) : [],   //除了公共脚本以及matchJavascript还需要的脚本文件
            redirectUrl
        };
        return templateData;
    }
}

export default Router;
