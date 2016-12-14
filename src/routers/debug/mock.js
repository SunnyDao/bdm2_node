import express from "express";
let router = express.Router();
/**
 * desc:获取城市数据
 */
router.get("/common/getCityAll", (req, res, next) => {
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
 * ================================================小区列表Mock接口 Start====================================================
 */

router.post("/estateSubEdit/getEstateSubEditListByCondition.do", (req, res, next) => {
    let pos = require("../../../json/estateList.json");
    return res.json(pos);
})

//获取审核详细信息
router.post("/estateSubEdit/getEstateSubEditDetail.do", (req, res, next) => {
    let pos = require("../../../json/estateAuditDetails.json");
    return res.json(pos);
})

//审核通过
router.post("/estateSubEdit/pushEstateSub.do", (req, res, next) => {
    let pos = require("../../../json/estatePass.json");
    return res.json(pos);
})

//审核拒绝
router.post("/estateSubEdit/dotPass.do", (req, res, next) => {
    let pos = require("../../../json/estatePass.json");
    return res.json(pos);
})

/**
 * ================================================小区列表Mock接口 End====================================================
 */

//获取子划分小区室号列表数据
router.post("/houseRoom/list.do", (req, res, next) => {
    let pos = require("../../../json/subEstateRoomInfoList.json");
    return res.json(pos);
})

module.exports = router;