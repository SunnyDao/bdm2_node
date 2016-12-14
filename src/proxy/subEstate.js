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
     * @desc 获取指定小区室号列表信息
     * @param  {} buildingId
     * @param  {} unitId
     * @param  {} room
     * @param  {} page
     * @param  {} pageSize
     * @param  {} cookies
     */
    async getRoomInfoList({buildingId, unitId, room, page, pageSize, cookies}) {
        //页面查询参数
        let opt_data = {
            reqData: {
                buildingId,
                unitId,
                room,
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
                actionName: "roomList",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }
}

export default SubEstate;