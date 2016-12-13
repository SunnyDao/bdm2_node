/**
 * desc:通用的transform类
 * author:luwei@lifang.com
 */
import _ from "lodash";

class CommonMapper {
    constructor() {

    }

    static enum(oriKey, newKey) {
        let obj = {
            key: newKey,
            transform: (value) => {
                let result = "";
                switch (oriKey) {
                    case "key":
                        result = value && value.key ? value.key : null;
                        break;
                    case "desc":
                        result = value && value.desc ? value.desc : "--";
                        break;
                    default:
                        break;
                }
                return result;
            }
        }
        return obj;
    }

    static nullableStr(key, text) {
        let obj = {
            key: key,
            transform: (value) => {
                return value ? value : text ? text : "--";
            }
        }
        return obj;
    }

    static round(key, precision = 0) {
        let obj = {
            key: key,
            transform: (value) => {
                if (!_.isNumber(value)) return "NaN";
                return _.round(value, precision);
            }
        }
        return obj;
    }

    static booleanStr(key) {
        let obj = {
            "key": key,
            "transform": (value) => {
                if (value) {
                    return "是";
                } else {
                    return "否";
                }
            }
        }
        return obj
    }
}

export default CommonMapper