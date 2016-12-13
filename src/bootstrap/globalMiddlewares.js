/**
 * desc:加载全局中间件
 * author:luwei@lifang.com
 */
import loader from "../utils/loader";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import config from '../utils/config';
import _ from 'lodash';

let middlewares = loader.getModules("middlewares/global");
let middlewaresConfig = config.getMiddlewares();

export default function (app) {
    /**
     * desc:bodyParser是Connect內建的middleware，下面先加载这个中间件
     * 设置此处可以将client提交过来的post请求放入request.body中。
     */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    /**
     * desc:将请求的cookie都解析出来
     */
    app.use(cookieParser());

    /**
     * desc:我们现在都有固定的静态资源域名，所以这里给注释掉了
     */
    //app.use(express.static(path.join(__dirname, 'public'))) ;

    /**
    * desc:注册全局中间件到app中
    */
    if (_.isArray(middlewaresConfig.global) && middlewaresConfig.global.length) {
        for (let c of middlewaresConfig.global) {
            if (_.isFunction(middlewares[c]["default"])) app.use(middlewares[c]["default"]);
        }
    }
}