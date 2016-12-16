/**
 * author:gaojunfeng@lifang.com
 * desc:图片信息服务调用类
 */
import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class imageInfo{
    constructor() {
       this.name = this.constructor.name;
    }

    /**
     * @desc 获取全部图片列表
     */
    async getList({cookies}){
        //页面查询参数
        let opt_data = {
            reqData: {},
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getImgList",
                converter: false,
                method: "post"
            }
        }

        return await bdmService.request(this.options);
    }

    /**
     * 删除图片
     */
    async deleteImg({ids,cookies}){
        //console.log("----------------------------------------------------------------");
        //console.log(ids);
        //console.log("----------------------------------------------------------------");
        //页面查询参数
        let opt_data = {
            reqData: {
                ids:ids
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "deleteImg",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * 获取楼栋名称列表
     */
    async getBuildingNameList({term,page,cookies}){
        console.log("----------------------------------------------------------------");
        console.log(term);
        console.log(page);
        console.log("----------------------------------------------------------------");
        //页面查询参数
        let opt_data = {
            reqData: {
                page_limit:page_limit,
                page:page,
                pc_hash:pc_hash
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getBuildingNameList",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }
}

export default imageInfo;