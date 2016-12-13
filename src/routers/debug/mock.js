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

/**
 * ================================================小区列表Mock接口 End====================================================
 */

module.exports = router;