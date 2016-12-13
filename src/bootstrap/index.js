/**
 * desc:bootstrap启动模块
 * author:luwei@lifang.com
 */
import settings from './globalSettings'
import middlewares from './globalMiddlewares'
import router from './routerRegister'
export default function (app) {
    //注册app全局配置
    settings(app);
    //注册全局中间件
    middlewares(app);
    //注册路由
    router(app);
}
