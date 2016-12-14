/**
 * author:yuxiaochen@lifang.com
 * desc:公共api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let commonPxy = ModuleFactory.createProxy("common");

/**
 * desc:获取城市数据
 */
router.get("/getCityAll", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await commonPxy.getArea(req.session.user.id, req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('Common Api==>getCityAll:' + e);
        next(e);
    }
});

module.exports = router;



