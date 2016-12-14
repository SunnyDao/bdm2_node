/**
 * desc:单元mapper
 * author:luwei@lifang.com
 */

import objectMapper from "object-mapper";
import CommonMapper from "./common";
import Logger from '../utils/logger';

let itemMap = {
    unitId: "unitId",
    estateName: "estateName",
    buildingName: "buildingName",
    unitName: "unitName",
    unitType: ["unitType", {
        key: "unitTypeStr", transform: (value) => {
            if (!value) return "--";
            let str = "--";
            switch (value) {
                case 1:
                    str = "实体";
                    break;
                case 2:
                    str = "虚拟";
                    break;
                default:
                    break;
            }
            return str;
        }
    }],
    lockStatus: ["lockStatus", {
        key: "lockStatusStr", transform: (value) => {
            if (!value) return "--";
            let str = "--";
            switch (value) {
                case 1:
                    str = "锁定";
                    break;
                case 2:
                    str = "未锁定";
                    break;
                default:
                    break;
            }
            return str;
        }
    }],
    status: ["status", {
        key: "statusStr", transform: (value) => {
            if (!value) return "--";
            let str = "--";
            switch (value) {
                case 1:
                    str = "待审核";
                    break;
                case 2:
                    str = "通过";
                    break;
                case 3:
                    str = "失败";
                    break;
                default:
                    break;
            }
            return str;
        }
    }],
    createDateTime: "createDateTime",
};

let listMap = {
    items: {
        key: "items",
        transform: (value) => {
            if (!value) return null;
            let result = []
            for (let v of value) {
                result.push(objectMapper(v, itemMap));
            }
            return result;
        },
    },
    page: "pageInfo",
}

class UnitMapper {
    constructor() { }

    /**
     * @param  {} src
     */
    static list(src) {
        try {
            return objectMapper(src, listMap);
        } catch (error) {
            Logger.error(`Unit Mapper==>list:${error},src:${JSON.stringify(src)}`);
            return null;
        }
    }

}

export default UnitMapper;
