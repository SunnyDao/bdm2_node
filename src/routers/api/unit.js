/**
 * author:yuxiaochen@lifang.com
 * desc:单元相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let unitPxy = ModuleFactory.createProxy("unit");

/**
 * desc:获取单元信息列表
 */
router.get("/list", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await unitPxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('uint Api==>getList:' + e);
        next(e);
    }
});

/**
 * desc:审核成功
 */
router.post("/approve", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await unitPxy.approve(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('uint Api==>approve:' + e);
        next(e);
    }
});

/**
 * desc:审核失败
 */
router.post("/reject", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await unitPxy.reject(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('uint Api==>reject:' + e);
        next(e);
    }
});

/**
 * desc:设为实体
 */
router.post("/setReal", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await unitPxy.setReal(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('uint Api==>setReal:' + e);
        next(e);
    }
});

/**
 * desc:设为虚拟
 */
router.post("/setVirtual", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await unitPxy.setVirtual(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('uint Api==>setVirtual:' + e);
        next(e);
    }
});

/**
 * desc:锁定
 */
router.post("/setLocked", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await unitPxy.setLocked(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('uint Api==>setVirtual:' + e);
        next(e);
    }
});

module.exports = router;



