/**
 * author:luwei@lifang.com
 * desc:单元服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class Unit {
    constructor() {
        this.name = this.constructor.name;
    }

    /**
     * desc:获取单元列表
     * @param  {Integer} {buildingId:楼栋id
     * @param  {Integer} lockStatus:锁定状态（0：未锁定，1：锁定）
     * @param  {Integer} unitType:单元类型（1：实体单元 2：虚拟单元）
     * @param  {Date} createStartDate:创建开始时间
     * @param  {Date} createEndDate:创建结束时间
     * @param  {Integer} pageIndex
     * @param  {Integer} pageSize
     * @param  {} cookies}
     */
    async getList({buildingId, lockStatus, unitType, createStartDate, createEndDate, pageIndex, pageSize, cookies}) {
        let opt_data = {
            reqData: {
                buildingId,
                lockStatus,
                unitType,
                startTime: createStartDate,
                endTime: createEndDate,
                pageIndex,
                pageSize
            },
            cookies
        };

        let options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "list",
                method: "post"
            }
        };

        return await bdmService.request(options);
    }


    /**
     * desc:获取单元审核列表
     * @param  {Integer} {cityId:城市id
     * @param  {Integer} unitId:单元id
     * @param  {String} estateName:小区名称
     * @param  {String} buildingName:楼栋名称
     * @param  {Date} createStartDate
     * @param  {Date} createEndDate
     * @param  {Integer} pageIndex
     * @param  {Integer} pageSize
     * @param  {} cookies}
     */
    async getList({cityId, unitId, estateName, buildingName, createStartDate, createEndDate, pageIndex, pageSize, cookies}) {
        let opt_data = {
            reqData: {
                cityId,
                unitId,
                estateName,
                buildingName,
                createTimeStart: createStartDate,
                createTimeEnd: createEndDate,
                page: pageIndex,
                pageSize
            },
            cookies
        };

        let options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "auditList",
                method: "post",
                converter: { mapperName: this.name, mapperFunc: "list" }
            }
        };

        return await bdmService.request(options);
    }




    /**
     * desc:审核成功
     * @param  {IntegerArray} {ids:小区id
     * @param  {} cookies}
     */
    async approve({ids, cookies}) {
        let opt_data = {
            reqData: {
                ids
            },
            cookies
        };

        let options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "approve",
                method: "post"
            }
        };

        return await bdmService.request(options);
    }

    /**
     * desc:审核失败
     * @param  {IntegerArray} {ids:小区id
     * @param  {} cookies}
     */
    async reject({ids, cookies}) {
        let opt_data = {
            reqData: {
                ids
            },
            cookies
        };

        let options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "reject",
                method: "post"
            }
        };

        return await bdmService.request(options);
    }

    /**
     * desc:设置单元状态（实体或虚拟）
     * @param  {ObjectArray} {units:[{"buildingId":1,"unitId":2},...,{"buildingId":2,"unitId":24}]
     * @param  {Integer} type:单元类型（1.实体单元 2.虚拟单元）
     * @param  {} cookies}
     */
    async setType({units, type, cookies}) {
        let opt_data = {
            reqData: {
                unitTypeDetailList: units,
                type
            },
            cookies
        };

        let options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "setType",
                method: "post"
            }
        };

        return await bdmService.request(options);
    }
}

export default Unit;