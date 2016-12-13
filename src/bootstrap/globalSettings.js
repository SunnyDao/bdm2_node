/**
 * desc:全局配置
 * author:luwei@lifang.com
 */
import path from "path";

export default function(app){
    /**
     * desc:设置阶段环境
     */
    var stageEnv = process.env.STAGE_ENV || 'dev';
    app.set('stage_env', stageEnv);

    /**
     * desc:模板目录及引擎设置 
     * 设置模板的访问路径，__dirname是node.js里面的全局变量，即取得执行的js所在的路径
     * 设置应用的模板模板引擎为handlebars，渲染模板的时候就可以不带模板文件扩展名，默认为hbs
     */
    app.set("views", path.join(__dirname, "..","..", "views"));
    app.set("view engine", "ejs");
}