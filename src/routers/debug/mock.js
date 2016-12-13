import express from "express";
let router = express.Router();
/**
 * desc:获取城市数据
 */
router.get("/getCityListByUser.action", (req, res, next) => {
    let area = require("../../../json/area.json");
    return res.json(area);
});

/**
 * desc:获取用户数据
 */
router.get("/user/getCurrentUser.action", (req, res, next) => {
    let pos = require("../../../json/user.json");
    return res.json(pos);
})


/**
 * desc:获取团购款审核列表
 */
router.post("/groupBuyingAudit/list.action", (req, res, next) => {
    let groupList = require("../../../json/auditList.json");
    return res.json(groupList);
})

/**
 * desc:获取团购款明细
 */
router.post("/groupBuyingAudit/detail.action", (req, res, next) => {
    let groupDetail = require("../../../json/auditDetails.json");
    return res.json(groupDetail);
})

/**
 * desc:团购款审核通过
 */
router.post("/groupBuyingAudit/audit.action", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})

/**
 * desc:团购款审核驳回
 */
router.post("/groupBuyingAudit/audit.action", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})

/**
 * desc:获取客户收款单列表
 */
router.post("/consumerReceivables/getConsumerReceivablesList.action", (req, res, next) => {
    let pos = require("../../../json/customerReceivablesList.json");
    return res.json(pos);
})

/**
 * desc:获取客户收款详情
 */
router.post("/consumerReceivables/getConsumerReceivablesDetails.action", (req, res, next) => {
    let pos = require("../../../json/customerReceivablesDetails.json");
    return res.json(pos);
})

/**
 * desc:客户应收款列表导出
 */
router.post("/consumerReceivables/exportConsumerReceivablesList.action", (req, res, next) => {
    let pos = require("../../../json/user.json");
    return res.json(pos);
})

/**
 * desc:请佣收款单接口
 */
router.post("/contractReceivables/getPleaseCommissionOrderList.action", (req, res, next) => {
    let pos = require("../../../json/signedReceivablesList.json");
    return res.json(pos);
})

/**
 * desc:获取收款单详情
 */
router.post("/contractReceivables/getPleaseCommissionOrderDetails.action", (req, res, next) => {
    let pos = require("../../../json/signedReceivablesDetails.json");
    return res.json(pos);
})

/**
 * desc:取消收款
 */
router.post("/contractReceivables/cancelReceivables.action", (req, res, next) => {
    let pos = require("../../../json/user.json");
    return res.json(pos);
})

/**
 * desc:确认收款
 */
router.post("/contractReceivables/saveReceivables.action", (req, res, next) => {
    let pos = require("../../../json/user.json");
    return res.json(pos);
})

/**
 * desc:凭证管理-团购款列表
 */
router.post("/certificateManagement/groupBuying/list.action", (req, res, next) => {
    let groupList = require("../../../json/grouponFee.json");
    return res.json(groupList);
})

/**
 * desc:凭证管理-团购费转服务费列表
 */
router.post("/groupPurchaseTransferServerFee/list.action", (req, res, next) => {
    let groupList = require("../../../json/serviceFee.json");
    return res.json(groupList);
})

/**
 * desc:凭证管理-成交客户服务费开票列表
 */
router.post("/serverFeeBilling/list.action", (req, res, next) => {
    let groupList = require("../../../json/serviceFeeOrder.json");
    return res.json(groupList);
})

/**
 * desc:获取凭证详情列表
 */
router.post("/certificateManagement/generate.action", (req, res, next) => {
    let groupList = require("../../../json/voucherList.json");
    return res.json(groupList);
})

/**
 * desc:获取凭证详情
 */
router.post("/certificateManagement/detail.action", (req, res, next) => {
    let groupList = require("../../../json/voucherDetails.json");
    return res.json(groupList);
})

/**
 * desc:上传凭证
 */
router.post("/certificateManagement/confirmupload.action", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})

module.exports = router;