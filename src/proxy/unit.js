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
     * @param  {Integer} {cityId:城市id
     * @param  {Integer} unitId:单元id
     * @param  {Integer} estateId:小区id
     * @param  {Integer} lockStatus:锁定状态
     * @param  {Integer} unitType:单元类型
     * @param  {String} estateName:小区名称
     * @param  {String} buildingName:楼栋名称
     * @param  {Date} createStartDate:创建开始时间
     * @param  {Date} createEndDate:创建结束时间
     * @param  {} cookies}
     */
    async getList({cityId, unitId, estateId,lockStatus,unitType, estateName, buildingName, createStartDate, createEndDate, cookies}) {
        let opt_data = {
            reqData: {
                cityId,
                unitId,
                estateName,
                buildingName,
                createStartDate,
                createEndDate
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
     * @param  {IntegerArray} {ids:小区id
     * @param  {} cookies}
     */
    async setReal({ids, type, cookies}) {
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
                actionName: "setReal",
                method: "post"
            }
        };

        return await bdmService.request(options);
    }

    /**
     * desc:设置单元状态（实体或虚拟）
     * @param  {IntegerArray} {ids:小区id
     * @param  {} cookies}
     */
    async setVirtual({ids, type, cookies}) {
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
                actionName: "setVirtual",
                method: "post"
            }
        };

        return await bdmService.request(options);
    }
}

export default Unit;