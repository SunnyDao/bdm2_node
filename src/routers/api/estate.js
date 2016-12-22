/**
 * author:yuxiaochen@lifang.com
 * desc:小区相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';

let router = express.Router();
let estatePxy = ModuleFactory.createProxy("estate");

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
        next(e.api);
    }
})


/**
 * 获取小区子划分审核详情信息
 */
router.get("/getDetails", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await estatePxy.getDetails(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('estate Api==>getDetails:' + e);
        next(e.api);
    }
})

/**
 * 通过
 */
router.post("/pass", async (req, res, next) => {
    try {
        let result = await estatePxy.pass(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('estate Api==>pass:' + e);
        next(e.api);
    }
});

/**
 * 拒绝
 */
router.post("/reject", async (req, res, next) => {
    try {
        let result = await estatePxy.reject(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('estate Api==>reject:' + e);
        next(e.api);
    }
})


module.exports = router;



