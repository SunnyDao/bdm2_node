/**
 * author:yuxiaochen@lifang.com
 * desc:单元相关路由定义
 */

import express from "express";
import logger from '../../utils/logger';
import routerUtil from "../../utils/router";


let router = express.Router();

router.get("/auditList", (req, res, next) => {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true,
        extraJavascripts: ["wktable", "moment", "daterangepicker"],
        extraStylesheets: ["treeviewSelect", "wktable", "daterangepicker"]
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "单元审核" });
    return res.render("unit/auditList", templateData);
})

module.exports = router;