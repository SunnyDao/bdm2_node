/**
 * authot:luwei@lifang.com
 * desc:获取用户信息
 */
import CommonPxy from "../../proxy/common";
import Logger from '../../utils/logger';
import config from '../../utils/config';

let commonProxy = new CommonPxy();

export default async (req, res, next) => {
    try {
        if (!req.session.user) {
            let soaConf = config.getSoaConf();
            //请求接口获取用户信息
            let user = await commonProxy.getUser({ cookies: req.cookies });
            if (user.status == soaConf.sessionExpireCode) { //session 过期
                return res.redirect(config.getDomain());
            }
            else {
                if (user.status == soaConf.successCode && user.data) {
                    req.session.user = user.data;
                    next();
                }
                else {
                    return res.redirect(config.getDomain());
                }
            }
        } else {
            next();
        }
    }
    catch (e) {
        Logger.error('userContext middlewares errors:' + JSON.stringify(e));
        next(e);
    }
}