/**
 * desc:单元mapper
 * author:luwei@lifang.com
 */

import objectMapper from "object-mapper";
import CommonMapper from "./common";
import Logger from '../utils/logger';

let itemMap = {
    id: "id",//图片id
    type: "type",//图片类型
    typeDec: "typeDec",//图片类型名称
    clImageUrl: "clImageUrl",//图片url
    imgKey:"imgKey",//图片key
    imageMark:"imageMark",//楼号
    estateId:"estateId"//小区id
};


class SubEstateImage {
    /**
    * 获取图片列表
    */
    static getImgList(data) {//{"status":1,"message":"success","data":[]}  data:指后台返回的json中的data
        try {
            let result = []
            for (let v of data) {
                result.push(objectMapper(v, itemMap));
            }
            return result;
        } catch (error) {
            Logger.error(`SubEstateImage Mapper==>list:${error},src:${JSON.stringify(data)}`);
            return null;
        }
    }

    /**
     * 图片删除
     */
    static deleteImg(data){
        console.log(data);
    }


    /**
     * 图片上传
     */
    static uploadPic(data){

    }

    /**
     * 获取楼栋名称
     */
    static getBuldListBySubEstId(data){

    }
}

export default SubEstateImage;
