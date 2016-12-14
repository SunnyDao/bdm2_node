/**
 * author:yuxiaochen@lifang.com
 * desc:子小区相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let subEstatePxy = ModuleFactory.createProxy("subEstate");

/**
 * 获取小区子划分列表
 */
router.get("/getList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getList:' + e);
        next(e);
    }
})


/**
 * 获取小区子划分列表
 */
router.get("/getSubEstateMark", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getSubEstateMark(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})


/**
 * 获取城市
 */
router.get("/getCities", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getCities(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

/**
 * 获取城市
 */
router.get("/getDistricts", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getDistricts(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

module.exports = router;



