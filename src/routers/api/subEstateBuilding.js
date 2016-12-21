/**
 * author:yinqin@lifang.com
 * desc:楼栋管理列表相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let subEstateBuildingPxy = ModuleFactory.createProxy("subEstateBuilding");




/**
 * 获取楼栋详情列表
 */
router.get("/getBuildingInfoList", async (req, res, next) => {
    try {
        let result = await subEstateBuildingPxy.getBuildingInfoList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateBuilding Api==>getBuildingInfoList:' + e);
        next(e.api);
    }
})


/**
 * 解锁锁定
 */
router.post("/lock", async (req, res, next) => {
    try {
        let result = await subEstateBuildingPxy.lock(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateBuilding Api==>lock:' + e);
        next(e.api);
    }
})


module.exports = router;



