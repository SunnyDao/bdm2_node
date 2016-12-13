/**
 * author:yuxiaochen@lifang.com
 * desc:单元相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import proxyFactory from '../../core/proxyFactory';


let router = express.Router();
let unitPxy = proxyFactory.createPxy("unit");


module.exports = router;



