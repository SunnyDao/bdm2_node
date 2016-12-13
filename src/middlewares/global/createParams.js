/**
 * authot:luwei@lifang.com
 * desc:构造SOA请求参数
 */


export default function (req, res, next) {
    req.app.locals.SOAParams = Object.assign(req.query, req.body, { cookies: req.cookies });
    next();
}