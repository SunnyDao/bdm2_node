/**
 * author:gaojunfeng@lifang.com
 * desc:图片信息相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';

let router = express.Router();
let imageInfoPxy = ModuleFactory.createProxy("subEstateImage");

/**
 * 获取全部图片
 */
router.get("/getImgList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
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
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 获取楼栋名称列表
 */
router.post("/getBuldListBySubEstId", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.getBuldListBySubEstId(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 上传图片信息
 */
router.post("/uploadPic", async (req, res, next) => {
    try {
        let result = await imageInfoPxy.uploadPic(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})
module.exports = router;
