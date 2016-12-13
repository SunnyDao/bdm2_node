/**
 * author:yuxiaochen@lifang.com
 * desc:客户应收款情况表api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import proxyFactory from '../../proxy/proxyFactory';


let router = express.Router();
let customerReceivablePxy = proxyFactory.createPxy("customerReceivables");

/**
 * 获取客户收款单列表
 */
router.get("/getList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await customerReceivablePxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('customerReceivables Api==>getList:' + JSON.stringify(e));
        next(e);
    }
})

/**
 * 获取客户收款详情
 */
router.post("/getDetails", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await customerReceivablePxy.getDetails(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('customerReceivables Api==>getDetails:' + JSON.stringify(e));
        next(e);
    }
})

module.exports = router;



