/**
 * author:yuxiaochen@lifang.com
 * desc:单元相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let unitPxy = ModuleFactory.createProxy("unit");


module.exports = router;



