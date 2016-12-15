/**
 * author:yuxiaochen@lifang.com
 * desc:子小区室号相关map配置类
 */

import objectMapper from "object-mapper";
import mapperTransform from "./common";
import Logger from '../utils/logger';

let buildingItem = {
    id: "id",
    text: "text"
};


let buildingList = {
    items: {
        key: "items",
        transform: (value) => {
            if (!value) return null;
            let result = []
            for (let v of value) {
                result.push(objectMapper(v, buildingItem));
            }
            return result;
        }
    }
};

let unitItem = {
    id: "id",
    text: "text"
}


let unitList = {
    items: {
        key: "items",
        transform: (value) => {
            if (!value) return null;
            let result = []
            for (let v of value) {
                result.push(objectMapper(v, unitItem));
            }
            return result;
        }
    }
};

class SubEstateRoom {

    /**
     * @desc 楼栋名称mapper
    * @param  {} src
    */
    static buildings(src) {
        try {
            return objectMapper(src, buildingList);
        } catch (error) {
            Logger.error(`SubEstateRoom Mapper==>buildings:${error},src:${JSON.stringify(src)}`);
            return null;
        }
    }

    /**
      * @desc 单元名称mapper
     * @param  {} src
     */
    static units(src) {
        try {
            return objectMapper(src, unitList);
        } catch (error) {
            Logger.error(`SubEstateRoom Mapper==>units:${error},src:${JSON.stringify(src)}`);
            return null;
        }
    }
}

export default SubEstateRoom;
