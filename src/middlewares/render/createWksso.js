/**
 * authot:luwei@lifang.com
 * desc:获取用户信息
 */
import request from 'request-promise';
import Logger from '../../utils/logger';
import config from '../../utils/config';
import sslReader from '../../utils/sslReader'

const env = process.env.STAGE_ENV;
const soaConf = config.getSoaConf();

export default async (req, res, next) => {
    try {
        //如果sso的CASTGC票据没有,直接重定向到登录页面
        if (!req.cookies.CASTGC) {
            //没有票据清空session
            if(req.session){
                req.session.user = null;
                req.session.CASTGC = null;
            }
            return res.redirect(config.getDomain());
        }

        //从session中获取上次缓存的票据
        let oriCASTGC = null;
        if (req.session && req.session.CASTGC) {
            oriCASTGC = req.session.CASTGC
        }

        //请求票据与缓存票据不一致,则重新获取wksso
        if (req.cookies.CASTGC != oriCASTGC) {
            let j = request.jar();
            let opts = {
                url: config.getApi("common", "wksso"),
                jar: j
            }
            //node请求的cookies带到soa请求中
            if (req.cookies) {
                let cookie = [];
                //es6遍历对象
                for (let key in req.cookies) {
                    cookie.push(key + "=" + req.cookies[key]);
                }
                //设置请求头cookie
                opts.headers = {
                    cookie: cookie.join(';')
                };
            }

            Logger.info(`createWksso=>options:${JSON.stringify(opts)}`);

            //非生产环境需要带上自签发的ca证书
            if (env !== 'prod' && soaConf.ssl) {
                opts.ca = sslReader
            }

            //发送请求获取wksso
            let user = await request.get(opts);
            let cookies = j.getCookies(opts.url);
            //将获取到的cookie写入到客户端和本次请求中
            if (cookies) {
                for (let c of cookies) {
                    let {key, value,...options} = c;
                    Logger.info(`createWksso=>cookies:key:${key},value:${value},options:${JSON.stringify(options)}`);
                    res.cookie(key, value, { "path": "/", "httpOnly": true, "hostOnly": true });
                    req.cookies[key] = value;
                }
                //缓存CASTGC，wksso中间件会用它来判断是否重新登录。
                req.session.CASTGC = req.cookies.CASTGC;
            }
            next();
        } else {
            next();
        }
    }
    catch (e) {
        Logger.error('createWksso middlewares errors:' + JSON.stringify(e));
        next();
    }
}