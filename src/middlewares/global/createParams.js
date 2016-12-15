/**
 * authot:luwei@lifang.com
 * desc:构造SOA请求参数
 */


export default function (req, res, next) {
    let userId = req.session.user ? req.session.user.id : "";
    req.app.locals.SOAParams = Object.assign(req.query, req.body, { cookies: req.cookies }, { userId: userId });
    next();
}