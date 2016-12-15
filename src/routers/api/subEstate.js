/**
 * author:yuxiaochen@lifang.com
 * desc:子小区相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();

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
 * 获取区域
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

/**
 * 获取板块
 */
router.get("/getTowns", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getTowns(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

/**
 * 获取小区
 */
router.get("/getEstatesByTownId", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getEstatesByTownId(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

router.get("/deleteSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.deleteSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

router.post("/transferSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.transferSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})


router.post("/addSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.addSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

router.post("/markSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.markSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e);
    }
})

router.get("/unlockSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.unlockSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>unlockSubEstate:' + e);
        next(e);
    }
})


router.get("/lockSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.unlockSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>unlockSubEstate:' + e);
        next(e);
    }
})

router.get("/getBoundSchool", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getBoundSchool(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getBoundSchool:' + e);
        next(e);
    }
})

// 
router.post("/finishSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.finishSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>finishSubEstate:' + e);
        next(e);
    }
})

router.get("/getFinishRecords", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getFinishRecords(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getFinishRecords:' + e);
        next(e);
    }
})
module.exports = router;



