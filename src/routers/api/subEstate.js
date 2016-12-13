/**
 * author:yuxiaochen@lifang.com
 * desc:子小区相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import proxyFactory from '../../core/proxyFactory';


let router = express.Router();
let subEstatePxy = proxyFactory.createPxy("unit");



module.exports = router;



