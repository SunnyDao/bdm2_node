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
        next(e.api);
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
        next(e.api);
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
        Logger.error('subestate Api==>getCities:' + e);
        next(e.api);
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
        Logger.error('subestate Api==>getDistricts:' + e);
        next(e.api);
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
        next(e.api);
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
        next(e.api);
    }
})

router.get("/deleteSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.deleteSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e.api);
    }
})

router.post("/transferSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.transferSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e.api);
    }
})


router.post("/addSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.addSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e.api);
    }
})

router.post("/markSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.markSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateMark:' + e);
        next(e.api);
    }
})

router.get("/unlockSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.unlockSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>unlockSubEstate:' + e);
        next(e.api);
    }
})


router.get("/lockSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.lockSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>lockSubEstate:' + e);
        next(e.api);
    }
})

router.get("/getBoundSchool", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getBoundSchool(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getBoundSchool:' + e);
        next(e.api);
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
        next(e.api);
    }
})

router.get("/getFinishRecords", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getFinishRecords(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getFinishRecords:' + e);
        next(e.api);
    }
})

router.get("/getSubEstateById", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.getSubEstateById(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getSubEstateById:' + e);
        next(e.api);
    }
})

router.post("/updateSubEstate", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await subEstatePxy.updateSubEstate(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>updateSubEstate:' + e);
        next(e.api);
    }
})
module.exports = router;



