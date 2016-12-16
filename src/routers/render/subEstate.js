/**
 * author:yuxiaochen@lifang.com
 * desc:子小区相关路由设定
 */

import express from "express";
import logger from '../../utils/logger';
import routerUtil from "../../utils/router";
import ModuleFactory from '../../core/factory';

let router = express.Router();

let subEstateRoomPxy = ModuleFactory.createProxy("subEstateRoom");


/**
 * desc:小区子划分列表
 */
router.get("/list", function(req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true,
        extraJavascripts: ["wktable","select2","cascadingSelect2","moment","daterangepicker"],
        extraStylesheets: ["treeviewSelect", "wktable","select2","daterangepicker"]
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "新BDM-小区子划分列表" });

    return res.render("subEstate/list", templateData);
})

/**
 * desc:添加子划分对话框视图
 */
router.get("/addDialogView", function(req, res, next) {
    return res.render('subEstate/_addDialog');
})

/**
 * desc:转移子划分对话框视图
 */
router.get("/transferDialogView", function(req, res, next) {
    return res.render('subEstate/_transferDialog');
})

/**
 * desc:标记对话框视图
 */
router.get("/markDialogView", function(req, res, next) {
    return res.render('subEstate/_markDialog');
})

/**
 * desc:绑定学校对话框视图
 */
router.get("/boundSchoolDialogView", function(req, res, next) {
    return res.render('subEstate/_boundSchoolDialog');
})

/**
 * desc:完善情况对话框视图
 */
router.get("/finishDialogView", function(req, res, next) {
    return res.render('subEstate/_finishDialog');
})
/**
 * desc:子划分明细
 */
router.get("/details", function(req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true,
<<<<<<< HEAD
        extraJavascripts: ["wktable","moment","daterangepicker"],
        extraStylesheets: ["treeviewSelect","wktable","daterangepicker"]
=======
        extraJavascripts: ["wktable", "moment","daterangepicker","select2"],
        extraStylesheets: ["treeviewSelect","daterangepicker","wktable", "select2"]
>>>>>>> 287e0073728fdc6ee091d2546bfe285788184413
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "小区子划分明细", "id": req.body.id });

    return res.render("subEstate/details", templateData);
})


/**
 * =======================================部分视图路由定义Start=======================================
 */

/**
 * 基本信息
 */
router.get('/baseInfoView', (req, res, next) => {
    return res.render('subEstate/_baseInfo');
});


/**
 * 图片信息
 */
router.get('/imageInfoView', (req, res, next) => {
    return res.render('subEstate/_imageInfo', req);
});
/**
 * 图片上传对话框
 */
router.get('/imageUpload', (req, res, next) => {
    return res.render('subEstate/_imageUpload', req);
});
/**
 * 单元信息
 */
router.get('/unitInfoView', (req, res, next) => {
    return res.render('subEstate/_unitInfo', req);
});


/**
 * 室号信息
 */
router.get('/roomInfoView', async (req, res, next) => {
    try {
        //根据子划分id,获取楼栋名称信息
        let buindings=await subEstateRoomPxy.getBuildings(req.app.locals.SOAParams);
        return res.render('subEstate/_roomInfo', buindings);
    }
    catch (e) {
        logger.error('subEstate roomInfoView==>:' + e);
        next(e);
    }
});


/**
 * =======================================部分视图路由定义End=======================================
 */


module.exports = router;