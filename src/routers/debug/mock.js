import express from "express";
let router = express.Router();
/**
 * desc:获取城市数据
 */
router.get("/common/getCityAll.do", (req, res, next) => {
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

//小区子划分接口
router.post("/estate/subEstate/list.do",(req,res,next)=>{
    
    let pos = require("../../../json/subEstateList.json");
    return res.json(pos);
});

//小区子划分标记
router.get("/estate/getSubestateComparePage.do",(req,res,next)=>{
    let pos = require("../../../json/subEstateMark.json");
    console.log("hahahah----");
    return res.json(pos);
});

//获取城市
router.get("/common/getCity.do",(req,res,next)=>{
    let pos = require("../../../json/getCities.json");
    return res.json(pos);
});

//获取区域
router.get("/common/list/simple.do",(req,res,next)=>{
    let pos = require("../../../json/getDistricts.json");
    return res.json(pos);
});

//获取板块
router.get("/common/townList.do",(req,res,next)=>{
    let pos = require("../../../json/getTowns.json");
    return res.json(pos);
});

//获取小区
router.get("/common/getEstateInfoByTownId.do",(req,res,next)=>{
    let pos = require("../../../json/getEstates.json");
    return res.json(pos);
});

//删除子划分
router.get("/dataprocess/deleteEstateSubList.do",(req,res,next)=>{
    //let pos = require("../../../json/getEstates.json");
    return res.json({status:"1"});
});


//删除子划分
router.get("/dataprocess/mergeSubCascade.do",(req,res,next)=>{
    //let pos = require("../../../json/getEstates.json");
    return res.json({status:"1"});
});

//删除子划分
router.get("/dataprocess/addEstateSubInfo.do",(req,res,next)=>{
    //let pos = require("../../../json/getEstates.json");
    return res.json({status:"1"});
});

//标记子划分
router.get("/estate/saveSubestateCompare.do",(req,res,next)=>{
    //let pos = require("../../../json/getEstates.json");
    return res.json({status:"1"});
});

//解锁/锁定子划分
router.get("/dataprocess/lockEstateSub.do",(req,res,next)=>{
    //let pos = require("../../../json/getEstates.json");
    return res.json({status:"1"});
});

//获取绑定学校接口
router.get("/estate/getEstateSchoolList.do",(req,res,next)=>{
    let pos = require("../../../json/getBoundSchools.json");
    return res.json(pos);
});

//完善子划分
router.post("/dataprocess/perfected.do",(req,res,next)=>{
    //let pos = require("../../../json/getFinishRecords.json");
    return res.json({status:1});
});

//
router.get("/dataprocess/perfectedHistory.do",(req,res,next)=>{
    let pos = require("../../../json/getFinishRecords.json");
    return res.json(pos);
});

//
router.get("/dataprocess/getEstateSubById.do",(req,res,next)=>{
    let pos = require("../../../json/subEstateDetail.json");
    return res.json(pos);
});


router.post("/dataprocess/updateEstateSubCasecad.do",(req,res,next)=>{
    //let pos = require("../../../json/subEstateDetail.json");
    return res.json({status:1});
});
/**
 * ================================================小区列表Mock接口 End====================================================
 */

/**
 * ================================================UnitMock接口 Start====================================================
 */
router.post("/estateUnit/pageUnitListBy.do", (req, res, next) => {
    let pos = require("../../../json/unitList.json");
    return res.json(pos);
})

router.post("/estatebuild/queryVerifyBuildingList.do", (req, res, next) => {
    let pos = require("../../../json/unitList.json");
    return res.json(pos);
})

router.post("/estatebuild/verifyEstateBuildingPass.do", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})

router.post("/estatebuild/verifyEstateBuildingReject.do", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})

router.post("/estateUnit/upUnitType.do", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})

/**
 * ================================================UnitMock接口 End====================================================
 */

/**
 * ================================================subEstateRoom接口 Start====================================================
 */

//获取子划分小区室号列表数据
router.post("/houseRoom/getHouseRoomListByCity.do", (req, res, next) => {
    let pos = require("../../../json/subEstateRoomInfoList.json");
    return res.json(pos);
})
//获取子划分小区下楼栋名称数据
router.post("/estateUnit/getBuldListBySubEstId.do", (req, res, next) => {
    let pos = require("../../../json/subEstateBuildings.json");
    return res.json(pos);
})

//获取指定子划分和楼栋下的单元名称数据
router.post("/estateUnit/getUnitNameByBuildingId.do", (req, res, next) => {
    let pos = require("../../../json/subEstateUnits.json");
    return res.json(pos);
})

/**
 * ================================================subEstateRoom接口 End====================================================
 */
/**
 * ================================================Building Mock接口 Start====================================================
 */

//获取子划分小区楼栋信息列表数据
router.post("/estatebuild/list.do", (req, res, next) => {
    let pos = require("../../../json/subEstateBuildingInfoList.json");
    return res.json(pos);
})
//锁定解锁楼栋
router.post("/estatebuild/lock.do", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})
/**
 * ================================================Building Mock接口 Start====================================================
 */



/**
 * ================================================imgInof接口 Start====================================================
 */
//获取全部图片
router.post("/imageInfo/getImgList.do", (req, res, next) => {
    let pos = require("../../../json/imgInofList.json");
    return res.json(pos);
})
//删除图片
router.post("/imageInfo/deleteImg.do", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})
//获取楼栋名称列表
router.post("/imageInfo/getBuildingNameList.do", (req, res, next) => {
    let data = [ { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }, { id: 5, text: 'enhancement' }];
    return res.json({ status: 1, message: "", data: data });
})


/*
 *   单元信息接口
*/
router.post("/estateUnit/upLockStatus.do", (req, res, next) => {
    return res.json({ status: 1, message: "", data: null });
})


module.exports = router;
