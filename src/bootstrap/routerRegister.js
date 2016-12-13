/**
 * desc:注册路由与路由中间件
 * author:luwei@lifang.com
 */

import loader from '../utils/loader';
import config from '../utils/config';
import _ from 'lodash';

/**
 * desc:加载router
 */
let routers = loader.getModules("routers");

/**
 * desc:加载middlewares
 */
let middlewaresConfig = config.getMiddlewares();
let renderModules = loader.getModules("middlewares/render");
let apiModules = loader.getModules("middlewares/api");

let renderMiddlewares = [];
let apiMiddlewares = [];

let stageEnv = process.env.STAGE_ENV || 'dev';

/**
 * desc:根据app.json中middlewares配置顺序组装api中间件
 */
if (_.isArray(middlewaresConfig.api) && middlewaresConfig.api.length) {
    for (let c of middlewaresConfig.api) {
        if (_.isFunction(apiModules[c]["default"])) apiMiddlewares.push(apiModules[c]["default"]);
    }
}

/**
 * desc:根据app.json中middlewares配置顺序组装reder中间件
 */
if (_.isArray(middlewaresConfig.render) && middlewaresConfig.render.length) {
    for (let c of middlewaresConfig.render) {
        if (_.isFunction(renderModules[c]["default"])) renderMiddlewares.push(renderModules[c]["default"]);
    }
}

export default function (app) {
    let renderRoutes = routers.render;
    let apiRoutes = routers.api;
    let debugRoutes = routers.debug;

    //添加 render routers
    Object.keys(renderRoutes).forEach(function (key) {
        if (key === 'home') app.use('/', [...renderMiddlewares, renderRoutes[key]]); //如果是home添加'/'路由支持
        app.use('/' + key, [...renderMiddlewares, renderRoutes[key]]);
    });

    //添加 api routers
    Object.keys(apiRoutes).forEach(function (key) {
        app.use('/api/' + key, [...apiMiddlewares, apiRoutes[key]]);
    });

    //如果是开发环境则需要注册debug router
    if (stageEnv != "prod" && debugRoutes) {
        Object.keys(debugRoutes).forEach(function (key) {
            app.use('/' + key, [debugRoutes[key]]);
        });
    }
};

