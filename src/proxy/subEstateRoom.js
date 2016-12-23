/**
 * author:yuxiaochen@lifang.com
 * desc:子小区室号信息服务调用类
 */


import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class SubEstateRoom {
    constructor() {
        this.name = this.constructor.name;
    }


    /**
     * @desc 获取指定小区室号列表信息
     * @param  {} buildingId
     * @param  {} unitId
     * @param  {} room
     * @param  {} page
     * @param  {} pageSize
     * @param  {} cookies
     */
    async getList({id,buildingId, unitName, room, page, pageSize,sort,sortType, cookies}) {
        //页面查询参数
        let opt_data = {
            body: {
                id,
                buildingId,
                unitName,
                room,
                page,
                pageSize,
                sort,
                sortType
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "list",
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }


    /**
     * @desc 根据子划分id,获取全部的楼栋名称信息
     * @param  {} subEstateId 子划分id
     * @param  {} cookies
     */
    async getBuildings({subEstateId, cookies}) {
        //页面查询参数
        let opt_data = {
            body: {
                subEstateId
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "buildings",
                method: "post"                
            }
        }
        return await bdmService.request(this.options);
    }

  
    /**
     * @desc 根据子划分id和楼栋Id,获取全部的单元信息
     * @param  {} subEstateId 子划分id
     * @param  {} buildingId 楼栋Id
     * @param  {} cookies
     */
    async getUnits({buildingId, cookies}) {
        //页面查询参数
        let opt_data = {
            form: {
                buildingId
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "units",
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }
}

export default SubEstateRoom;