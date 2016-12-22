/**
 * author:yinqin@lifang.com
 * desc:楼栋管理列表服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class subEstateBuilding {
    constructor() {
        this.name = this.constructor.name;
    }


    /**
     * @desc 获取指定小区楼栋信息列表信息
     * @param  {} subestateId   子划分ID
     * @param  {} buildingNumber   楼栋号
     * @param  {} buildingName   楼栋名称
     * @param  {} itudeid       是否打点  0未打点  1已打点  
     * @param  {} lockStatus    锁定状态  0未锁定  1锁定
     * @param  {} hasHouse      有无房源  1有房源  2无房源
     * @param  {} unitflag      楼栋状态  0虚拟    1实体
     * @param  {} sort          排序字段
     * @param  {} sortType      排序类型  asc升序 desc降序
     * @param  {} page
     * @param  {} pageSize
     * @param  {} cookies
     */
    async getBuildingInfoList({subestateId, buildingNumber, buildingName, itudeid, lockStatus, hasHouse, unitflag, sort, sortType, page, pageSize, cookies}) {
        //页面查询参数
        let opt_data = {
            form: {
                subestateId,
                buildingNumber,
                buildingName,
                itudeid,
                lockStatus,
                hasHouse,
                unitflag,
                sort,
                sortType,
                page,
                pageSize
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "buildingList",
                converter: false,
                method: "post",                
            }
        }
        return await bdmService.request(this.options);
    }


      /**
     * @desc 楼栋管理 解锁锁定
     * @param  {} id  楼栋ID
     * @param  {} status   状态  锁定传1  解锁传0 
     * @param  {} cookies
     */
    async lock({id, status,cookies}) {
        //页面查询参数
        let opt_data = {
            form: {
                id,
                status
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "lock",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }
}

export default subEstateBuilding;