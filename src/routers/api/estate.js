/**
 * author:yuxiaochen@lifang.com
 * desc:小区相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import proxyFactory from '../../core/proxyFactory';


let router = express.Router();
let estatePxy = proxyFactory.createPxy("estate");

/**
 * 获取小区子划分列表
 */
router.get("/getList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await estatePxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('estate Api==>getList:' + e);
        next(e);
    }
})


module.exports = router;



