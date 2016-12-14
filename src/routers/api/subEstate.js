/**
 * author:yuxiaochen@lifang.com
 * desc:子小区相关api定义
 */

import express from "express";
import Logger from '../../utils/logger';
import ModuleFactory from '../../core/factory';


let router = express.Router();
let subEstatePxy = ModuleFactory.createProxy("unit");







module.exports = router;



