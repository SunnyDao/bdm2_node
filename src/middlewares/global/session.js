/**
 * desc:session配置项
 * author:yuxiaochen@lifang.com
 */
import session from "express-session";
import Redis from "ioredis";
import appConf from "../../../configs/app.json";
import connectRedis from "connect-redis";
import config from '../../utils/config';


/**
 * desc:模块输出为一个方法，在app.js中执行，吧以express创建的应用app当做参数
 * @其中new redisStore的参数中的ttl参数是规定session失效时间的，单位为秒，这里设定为一小时
 * @如果redis服务器有密码设置，就在这个选项里面加上pass 这个key
 */
let sessionMd;
let redisStore = connectRedis(session);
let sessionConf = appConf.session;
let client = new Redis.Cluster(config.getRedisConf());
sessionMd = session({
    secret: sessionConf.secret,
    store: new redisStore({ client: client, ttl: sessionConf.timeout, prefix: sessionConf.prefix }),
    saveUninitialized: false,
    resave: false
})
export default sessionMd;