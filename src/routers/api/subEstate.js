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
 * 获取室号详情列表
 */
router.get("/getRoomInfoList", async (req, res, next) => {
    try {
        let result = await subEstatePxy.getRoomInfoList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstate Api==>getRoomInfoList:' + e);
        next(e);
    }
})



module.exports = router;



