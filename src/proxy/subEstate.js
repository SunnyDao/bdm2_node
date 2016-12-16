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
    * @param  {} estateName
    * @param  {} subEstateId
    * @param  {} publishName
    * @param  {} checkStatus
    * @param  {} cityId
    * @param  {} districtId
    * @param  {} townId
    * @param  {} cookies
    */
    async getList({cityId, districtId, townId, contour, point, id, chooseId, lockStatus, hasPic, hasHouse, hasBuild, newhouse, estateName, cityName, page, pageSize, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { cityId, districtId, townId, contour, point, id, chooseId, lockStatus, hasPic, hasHouse, hasBuild, newhouse, estateName, cityName, page, pageSize },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "list",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**
    * @desc 获取子划分标记
    * @param  {} estateName
    * @param  {} subEstateId
    * @param  {} publishName
    * @param  {} checkStatus
    * @param  {} cityId
    * @param  {} districtId
    * @param  {} townId
    * @param  {} cookies
    */
    async getSubEstateMark({subId, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { subId },
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
   
    async deleteSubEstate({idstr, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { idstr },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "deleteSubEstate",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }
    
    async lockSubEstate({id,lockStatus, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id,lockStatus },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "lockSubEstate",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }
    
    async unlockSubEstate({id,lockStatus, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id,lockStatus },
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

     async addSubEstate({id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "addSubEstate",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }

    async transferSubEstate({id,cityId,districtId,townId,estateId,estateName, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id,cityId,districtId,townId,estateId,estateName },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "transferSubEstate",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }
    
    async updateSubEstate({id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id,type,newhouse,cityId,suptownid,townid,estateId,estateName,initName,subEstateName,number,roomRule,lockStatus,completed,propertyRight,totalHouse,developers,developers_phone,propertyType,propertyCharges,propertyCompany,propertyPhone,volumeRate, greenRate,totalFloorage,parkingLot,traffic,businessCycle,bank,hospital,park,openTime, saleAddress, salePhone,launchTime,planRoom,hasCooperation,buildDecoration,floorArea,startSpace,endSpace,startTotalPrice,endTotalPrice,groundCarSpace,undergroundCarSpace },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "updateSubEstate",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }
        
    async getSubEstateById({id, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getSubEstateById",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

    async finishSubEstate({perfectStatus,tags,channel,subEstateId,note, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { perfectStatus,tags,channel,subEstateId,note },
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

    async getBoundSchool({subEstateId, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { subEstateId },
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

    async markSubEstate({id,subestateId,chooseId,checked,descript, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { id,subestateId,chooseId,checked,descript },
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
    
    async getCountries({cookies}) {
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
                actionName: "getCountries",
                converter: false,
            }
        }
        return await bdmService.request(this.options);
    }

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

    async getDistricts({parentId,cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { parentId },
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

    async getTowns({parentId,cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { parentId },
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

    async getEstatesByTownId({townid,cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { townid },
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

    async getFinishRecords({subEstateId,page,pageSize,cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: { subEstateId,page,pageSize },
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