/**
 * author:yuxiaochen@lifang.com
 * desc:子小区相关路由设定
 */

import express from "express";
import logger from '../../utils/logger';
import routerUtil from "../../utils/router";

let router = express.Router();


/**
 * desc:小区子划分列表
 */
router.get("/list", function (req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: false,
        extraJavascripts: ["wktable"],
        extraStylesheets: ["treeviewSelect", "wktable"]
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "新BDM-小区子划分列表" });

    return res.render("subEstate/list", templateData);
})

/**
 * desc:子划分明细
 */
router.get("/details", function (req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true,
        extraJavascripts: ["wktable","daterangepicker","moment"],
        extraStylesheets: ["treeviewSelect","daterangepicker","wktable"]
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "小区子划分明细" });

    return res.render("subEstate/details", templateData);
})


/**
 * =======================================部分视图路由定义Start=======================================
 */

/**
 * 基本信息
 */
router.get('/baseInfoView', (req, res, next) => {
    return res.render('subEstate/_baseInfo', req);
});


/**
 * 图片信息
 */
router.get('/imageInfoView', (req, res, next) => {
    return res.render('subEstate/_imageInfo', req);
});


/**
 * 楼栋信息
 */
router.get('/buildingInfoView', (req, res, next) => {
    return res.render('subEstate/_buildingInfo', req);
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
router.get('/roomInfoView', (req, res, next) => {
    return res.render('subEstate/_roomInfo', req);
});


/**
 * =======================================部分视图路由定义End=======================================
 */

module.exports = router;