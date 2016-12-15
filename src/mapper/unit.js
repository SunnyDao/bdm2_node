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
    buildingId: "buildingId",
    buildingName: "buildingName",
    unitName: "unitName",
    unitType: "unitType",
    unitTypeStr: "unitTypeStr",
    lockStatus: "lockStatus",
    lockStatusStr: "lockStatusStr",
    status: "status",
    statusStr: "statusStr",
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
