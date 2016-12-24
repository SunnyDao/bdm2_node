/**
 * author:gaojunfeng@lifang.com
 * desc:图片信息相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';

//使用文件上传模块
import multipart from "connect-multiparty";
var multipartMiddleware = multipart();//调用构造函数，创建对象

let router = express.Router();
let imageInfoPxy = ModuleFactory.createProxy("subEstateImage");

/**
 * 获取全部图片
 */
router.get("/getImgList", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.getList(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 删除图片
 */
router.post("/deleteImg", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.deleteImg(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 获取楼栋名称列表
 */
router.post("/getBuldListBySubEstId", async (req, res, next) => {
    try {
        //调用proxy获取数据
        let result = await imageInfoPxy.getBuldListBySubEstId(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 上传图片信息
 */
router.post("/saveImageInfo", async (req, res, next) => {
    try {
        let result = await imageInfoPxy.saveImageInfo(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }
})

/**
 * 接受图片流文件
 */
router.post("/fileUpload",multipartMiddleware,async (req, res, next) => {
    console.log(req.files);//获取上传的文件
   /*
    var request = require('request');
    var fs = require('fs');
    var uploadPic = request.put('https://yun2.test.wkzf/bdm/estate/sub/image/uploadPic.do');
    fs.createReadStream(req.files.myfile.path).pipe(uploadPic);
    uploadPic.on("finish",function (params) {
        console.log(1111111111111111111111111);
    });
    res.send("upload success!");
    */
    /*try {
        let result = await imageInfoPxy.uploadPic(req.app.locals.SOAParams);
        return res.json(result);
    } catch (e) {
        Logger.error('subEstateImage Api==>getList:' + e);
        next(e.api);
    }*/
})
module.exports = router;
