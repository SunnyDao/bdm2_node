/**
 * author:yinqin@lifang.com
 * desc:楼栋管理相关路由设定
 */

import express from "express";
import logger from '../../utils/logger';
import routerUtil from "../../utils/router";

let router = express.Router();


/**
 * desc:楼栋管理列表
 */
router.get("/list", function (req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true,
        extraJavascripts: ["wktable","moment"],
        extraStylesheets: ["treeviewSelect", "wktable"]
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "楼栋管理列表" });

    return res.render("subEstate/_buildingInfo", templateData);
})


/**
 * =======================================部分视图路由定义End=======================================
 */

module.exports = router;