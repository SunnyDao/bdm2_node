/**
 * author:gaojunfeng@lifang.com
 * desc:图片信息服务调用类
 */
import ModuleFactory from '../core/factory';

let bdmService = ModuleFactory.createService("bdmSOA");

class SubEstateImage{
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
                method: "post",
                converter: true
                /*,
                converter:{
                    mapperName:"subEstateImage",//映射的类
                    mapperFunc:"list"//类型下的方法
                }*/
            }
        }

        return await bdmService.request(this.options);
    }

    /**
     * 删除图片
     */
    async deleteImg({imageIds,cookies}){
        console.log(imageIds);
        
        //页面查询参数
        let opt_data = {
            qs: {//get请求
                imageIds:imageIds
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "deleteImg",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * 获取楼栋名称列表
     */
    async getBuldListBySubEstId({subEstateId,buildingName,cookies}){
        //页面查询参数
        let opt_data = {
            body: {
               subEstateId:subEstateId,
               buildingName:buildingName
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "getBuldListBySubEstId",
                converter: false,
                method: "post"
            }
        }
        return await bdmService.request(this.options);
    }

    /**
     * 保存图片信息
     */
    async saveImageInfo({type,imageMark,estateId,subEstateId,imageKey,cookies}){
        //页面查询参数
        let opt_data = {
            qs: {
                type,
                imageMark,
                estateId,
                subEstateId,
                imageKey
            },
            cookies
        };
        //请求参数
        this.options = {
            data: opt_data,
            soaOpt: {
                moduleName: this.name,
                actionName: "saveImageInfo",
                converter: false
            }
        }
        return await bdmService.request(this.options);
    }
}

export default SubEstateImage;