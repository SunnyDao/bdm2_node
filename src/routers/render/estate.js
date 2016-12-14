/**
 * author:yuxiaochen@lifang.com
 * desc:小区列表
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

    Object.assign(templateData, { "title": "新BDM-小区列表" });

    return res.render("estate/list", templateData);
})

/**
 * desc:小区子划分明细
 */
router.get("/details", function (req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "新BDM-小区列表-审核" });

    return res.render("estate/audit", templateData);
})

module.exports = router;