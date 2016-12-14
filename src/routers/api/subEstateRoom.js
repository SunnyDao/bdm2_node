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
router.get("/getRoomInfoList", async (req, res, next) => {
    try {
        let result = await subEstateRoomPxy.getRoomInfoList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateRoom Api==>getRoomInfoList:' + e);
        next(e);
    }
})

/**
 * 根据子划分id,获取全部的楼栋名称信息
 */
router.get("getBuildingsBySubEstateId", async (req, res, next) => {
    try {
        let result = await subEstateRoomPxy.getBuildingsBySubEstateId(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateRoom Api==>getBuildingsBySubEstateId:' + e);
        next(e);
    }
});

/**
 * 根据子划分id和楼栋Id,获取全部的单元信息
 */
router.get("getUnitsBySubEstateIdAndBuildingId", async (req, res, next) => {
    try {
        let result = await subEstateRoomPxy.getUnitsBySubEstateIdAndBuildingId(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateRoom Api==>getUnitsBySubEstateIdAndBuildingId:' + e);
        next(e);
    }
});


module.exports = router;



