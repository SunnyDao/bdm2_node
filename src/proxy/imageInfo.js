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
    async getList({subEstateId,type,cookies}){
        //页面查询参数
        let opt_data = {
            form: {
                subEstateId,
                type
            },
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
        //页面查询参数
        let opt_data = {
            form: {
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
    async getBuildingNameList({q,page,cookies}){
        //页面查询参数
        let opt_data = {
            form: {
                q:q,
                page:page
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