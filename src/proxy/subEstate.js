/**
 * author:yuxiaochen@lifang.com
 * desc:子小区服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class SubEstate {
    constructor() {
        this.name = this.constructor.name;
    }
    /**
     * @desc 获取小区子划分列表
     * @param  {} cityId
     * @param  {} districtId
     * @param  {} townId
     * @param  {} contour
     * @param  {} point
     * @param  {} id
     * @param  {} chooseId
     * @param  {} lockStatus
     * @param  {} hasPic
     * @param  {} hasHouse
     * @param  {} hasBuild
     * @param  {} newhouse
     * @param  {} estateName
     * @param  {} cityName
     * @param  {} page
     * @param  {} pageSize
     * @param  {} cookies
     */
    async getList({cityId, districtId, townId, contour, point, id, chooseId, lockStatus, hasPic, hasHouse, hasBuild, newhouse, estateName, cityName, page, pageSize, cookies}) {
        //页面查询参数
        let opt_data = {
            form: { cityId, districtId, townId, contour, point, id, chooseId, lockStatus, hasPic, hasHouse, hasBuild, newhouse, estateName, cityName, page, pageSize },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "list",
                converter: false,
                method: "post",
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 获取子划分标记
     * @param  {} {subId
     * @param  {} cookies}
     */
    async getSubEstateMark({subId, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { subId },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getSubEstateMark",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }
      
    
    /**
     * @desc 删除子划分
     * @param  {} idstr
     * @param  {} cookies
     */
    async deleteSubEstate({idstr, cookies}) {
        //页面查询参数
        let opt_data = {
            form: { idstr },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "deleteSubEstate",
                converter: false,
                method:"post"
            }
        }
        return await bdmService.request(this.options);
    }
    
    /**
     * @desc 锁定子划分
     * @param  {} id
     * @param  {} lockStatus
     * @param  {} cookies
     */
    async lockSubEstate({id,lockStatus, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { id,lockStatus },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "lockSubEstate",
                converter: false,                
            }
        }
        return await bdmService.request(this.options);
    }
        
    /**
     * @desc 解锁子划分
     * @param  {} id
     * @param  {} lockStatus
     */
    async unlockSubEstate({id,lockStatus, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { id,lockStatus },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "unlockSubEstate",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }

     /**
      * @desc 新增子划分
      * @param  {} id
      * @param  {} type
      * @param  {} newhouse
      * @param  {} cityId
      * @param  {} suptownid
      * @param  {} townid
      * @param  {} estateId
      * @param  {} estateName
      * @param  {} initName
      * @param  {} subEstateName
      * @param  {} number
      * @param  {} roomRule
      * @param  {} lockStatus
      * @param  {} completed
      * @param  {} propertyRight
      * @param  {} totalHouse
      * @param  {} developers
      * @param  {} developers_phone
      * @param  {} propertyType
      * @param  {} propertyCharges
      * @param  {} propertyCompany
      * @param  {} propertyPhone
      * @param  {} volumeRate
      * @param  {} greenRate
      * @param  {} totalFloorage
      * @param  {} parkingLot
      * @param  {} traffic
      * @param  {} businessCycle
      * @param  {} bank
      * @param  {} hospital
      * @param  {} park
      * @param  {} openTime
      * @param  {} saleAddress
      * @param  {} salePhone
      * @param  {} launchTime
      * @param  {} planRoom
      * @param  {} hasCooperation
      * @param  {} buildDecoration
      * @param  {} floorArea
      * @param  {} startSpace
      * @param  {} endSpace
      * @param  {} startTotalPrice
      * @param  {} endTotalPrice
      * @param  {} groundCarSpace
      * @param  {} undergroundCarSpace
      * @param  {} cookies
      */
     async addSubEstate({id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace, cookies}) {
        //页面查询参数
        let opt_data = {
            form: { id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "addSubEstate",
                converter: false,
                method:"post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**@desc 转移子划分
     * @param  {} id
     * @param  {} cityId
     * @param  {} districtId
     * @param  {} townId
     * @param  {} estateId
     * @param  {} estateName
     * @param  {} cookies
     */
    async transferSubEstate({id,cityId,districtId,townId,estateId,estateName, cookies}) {
        //页面查询参数
        let opt_data = {
            form: { id,cityId,districtId,townId,estateId,estateName },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "transferSubEstate",
                converter: false,
                method:"post"               
            }
        }
        return await bdmService.request(this.options);
    }
    
    /**
     * @desc 更新子划分
     * @param  {} {id
     * @param  {} type
     * @param  {} newhouse
     * @param  {} cityId
     * @param  {} suptownid
     * @param  {} townid
     * @param  {} estateId
     * @param  {} estateName
     * @param  {} initName
     * @param  {} subEstateName
     * @param  {} number
     * @param  {} roomRule
     * @param  {} lockStatus
     * @param  {} completed
     * @param  {} propertyRight
     * @param  {} totalHouse
     * @param  {} developers
     * @param  {} developers_phone
     * @param  {} propertyType
     * @param  {} propertyCharges
     * @param  {} propertyCompany
     * @param  {} propertyPhone
     * @param  {} volumeRate
     * @param  {} greenRate
     * @param  {} totalFloorage
     * @param  {} parkingLot
     * @param  {} traffic
     * @param  {} businessCycle
     * @param  {} bank
     * @param  {} hospital
     * @param  {} park
     * @param  {} openTime
     * @param  {} saleAddress
     * @param  {} salePhone
     * @param  {} launchTime
     * @param  {} planRoom
     * @param  {} hasCooperation
     * @param  {} buildDecoration
     * @param  {} floorArea
     * @param  {} startSpace
     * @param  {} endSpace
     * @param  {} startTotalPrice
     * @param  {} endTotalPrice
     * @param  {} groundCarSpace
     * @param  {} undergroundCarSpace
     * @param  {} cookies}
     */
    async updateSubEstate({id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace, cookies}) {
        //页面查询参数
        let opt_data = {
            form: { id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "updateSubEstate",
                converter: false,
                method:"post"
            }
        }
        return await bdmService.request(this.options);
    }
        
    /**
     * @desc 查询子划分详情
     * @param  {} id
     * @param  {} cookies
     */
    async getSubEstateById({id, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { id },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getSubEstateById",
                converter: false                
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 完善子划分
     * @param  {} perfectStatus
     * @param  {} tags
     * @param  {} channel
     * @param  {} subEstateId
     * @param  {} note
     * @param  {} cookies
     */
    async finishSubEstate({perfectStatus,tags,channel,subEstateId,note, cookies}) {
        //页面查询参数
        let opt_data = {
            form: { perfectStatus,tags,channel,subEstateId,note },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "finishSubEstate",
                converter: false,
                method:"post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @获取子划分绑定学校
     * @param  {} subEstateId
     * @param  {} cookies
     */
    async getBoundSchool({subEstateId, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { subEstateId },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getBoundSchool",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 标记子划分
     * @param  {} id
     * @param  {} subestateId
     * @param  {} chooseId
     * @param  {} checked
     * @param  {} descript
     * @param  {} cookies
     */
    async markSubEstate({id,subestateId,chooseId,checked,descript, cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { id,subestateId,chooseId,checked,descript },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "markSubEstate",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }
    
    

    // async getCountries({cookies}) {
    //     //页面查询参数
    //     let opt_data = {
    //         reqData: {  },
    //         cookies
    //     };
    //     //请求参数
    //     this.options = {
    //         data: opt_data,
    //         soaOpt: {
    //             moduleName: this.name,
    //             actionName: "getCountries",
    //             converter: false,
    //         }
    //     }
    //     return await bdmService.request(this.options);
    // }

    
    /**
     * @desc 获取城市，根据地市权限
     * @param  {} {cookies}
     */
    async getCities({cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: {  },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getCities",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * @desc 获取区域，根据城市id
     * @param  {} {parentId
     * @param  {} cookies}
     */
    async getDistricts({parentId,cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { parentId },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getDistricts",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    
    /**
     * @desc 获取板块，根据区域id
     * @param  {} {parentId
     * @param  {} cookies}
     */
    async getTowns({parentId,cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { parentId },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getTowns",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    
    /**
     * @desc 获取小区列表，根据板块id
     * @param  {} {townid
     * @param  {} cookies}
     */
    async getEstatesByTownId({townid,cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { townid },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getEstatesByTownId",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    
    /**
     * @desc 获取子划分的完善记录
     * @param  {} {subEstateId
     * @param  {} page
     * @param  {} pageSize
     * @param  {} cookies}
     */
    async getFinishRecords({subEstateId,page,pageSize,cookies}) {
        //页面查询参数
        let opt_data = {
            qs: { subEstateId,page,pageSize },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getFinishRecords",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }
}

export default SubEstate;