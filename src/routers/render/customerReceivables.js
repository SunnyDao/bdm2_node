/**
 * author:yuxiaochen@lifang.com
 * desc:
 */

import express from "express";
import logger from '../../utils/logger';
import routerUtil from "../../utils/router";
import proxyFactory from '../../proxy/proxyFactory';
import moment from 'moment';
import contentDisposition from "content-disposition";

const router = express.Router();
let customerReceivablePxy = proxyFactory.createPxy("customerReceivables");


router.get("/index", function (req, res, next) {
    let param = {
        req: req,
        matchJavascript: true,
        matchStylesheet: true,
        extraJavascripts: ["moment", "bootstrap-datepicker"],
        extraStylesheets: ["treeviewSelect", "wktable", "bootstrap-datepicker"]
    }

    let templateData = routerUtil.getTemplateBasicData(param);

    Object.assign(templateData, { "title": "客户应收款情况表" });

    return res.render("customerReceivables/index", templateData);
})

/**
 * 导出
 */
router.get("/export", async function (req, res, next) {
    try {
        let nowTime = moment(new Date());
        let filename = `客户应收款情况表${nowTime.format("YYYYMMDD_hmmss")}.xls`;
        let result=await customerReceivablePxy.export(req.app.locals.SOAParams);

        res.setHeader('Content-Type', 'application/vnd.openxmlformats');
        res.setHeader("Content-Disposition", contentDisposition(filename));

        res.end(result, 'binary');
    } catch (e) {
        logger.error("customerReceivables=>export errors" + e);
    }
})


/**
 * 客户应收款详情部分视图
 */
router.get("/_details", async function (req, res, next) {
    res.render('customerReceivables/_details');
})

module.exports = router;