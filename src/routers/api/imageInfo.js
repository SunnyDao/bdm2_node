/**
 * author:gaojunfeng@lifang.com
 * desc:图片信息相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';

let router = express.Router();
let imageInfoPxy = ModuleFactory.createProxy("imageInfo");

/**
 * 获取全部图片
 */
router.get("/getImgList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getList:' + e);
        next(e);
    }
})

/**
 * 删除图片
 */
router.post("/deleteImg", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.deleteImg(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getList:' + e);
        next(e);
    }
})

/**
 * 获取楼栋名称列表
 */
router.post("/getBuildingNameList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.getBuildingNameList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subestate Api==>getList:' + e);
        next(e);
    }
})
module.exports = router;
