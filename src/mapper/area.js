/**
 * author:luwei@lifang.com
 * desc:区域
 */
import objectMapper from "object-mapper";
import Logger from '../utils/logger';

let itemMap = {
    id: "id",
    text: "text",
    pid: "pid"
};

class AreaMapper {
    constructor() {
    }

    /**
     * @param  {} src
     */
    static detail(src) {
        try {
            return objectMapper(src, itemMap);
        } catch (error) {
            Logger.error(`Area Mapper==>detail:${error},src:${JSON.stringify(src)}`);
            return null;
        }
    }

    /**
     * @param  {} src
     */
    static list(src) {
        try {
            let result = [];
            if (src && src.length) {
                for (let s of src) {
                    let item = objectMapper(s, itemMap);
                    result.push(item);
                }
            }
            return result;
        } catch (error) {
            Logger.error(`Area Mapper==>list:${error},src:${JSON.stringify(src)}`);
            return null;
        }
    }
}

export default AreaMapper