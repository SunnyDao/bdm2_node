/**
 * author:yuxiaochen@lifang.com
 * desc:子小区室号信息相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let subEstateRoomPxy = ModuleFactory.createProxy("subEstateRoom");


/**
 * 根据子划分id,获取室号详情列表
 */
router.get("/getList", async (req, res, next) => {
    try {
        let result = await subEstateRoomPxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateRoom Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 根据子划分id,获取全部的楼栋名称信息
 */
router.get("/getBuildings", async (req, res, next) => {
    try {
        let result = await subEstateRoomPxy.getBuildings(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateRoom Api==>getBuildings:' + e);
        next(e.api);
    }
});

/**
 * 根据子划分id和楼栋Id,获取全部的单元信息
 */
router.get("/getUnits", async (req, res, next) => {
    try {
        let result = await subEstateRoomPxy.getUnits(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateRoom Api==>getUnits:' + e);
        next(e.api);
    }
});


module.exports = router;



