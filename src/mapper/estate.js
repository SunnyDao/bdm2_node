/**
 * author:yuxiaochen@lifang.com
 * desc:小区相关map配置类
 */

import objectMapper from "object-mapper";
import mapperTransform from "./common";
import Logger from '../utils/logger';

let customerItemMapper = {
    "id": "id",
    "cityId": "cityId",
    "cityName": "cityName",
    "projectName": "projectName",
    "diName": "diName",
    "cusId": "cusId",
    "cusName": "cusName",
    "houseAddr": "houseAddr",
    "source": "source",
    "sourceStr": "sourceStr",
    "qyTgTime": "qyTgTime",
    "receivableAmount": "receivableAmount",
    "historyAmount": "historyAmount",
    "thisPeriodAmount": "thisPeriodAmount",
    "uncollectedAmount": "uncollectedAmount",
    "thisPeriodSignedAmount": "thisPeriodSignedAmount"
};

let customerDetailsItemMapper = {
    "billNo": "billNo",
    "receiptNumber": "receiptNumber",
    "receivableAmount": "receivableAmount",
    "remark": "remark",
    "receivablesPeopleId": "receivablesPeopleId",
    "receivablesPeopleName": "receivablesPeopleName",
    "receivablesDate": "receivablesDate",
    "applyDate": "applyDate"
}

let listMap = {
    items: {
        key: "items",
        transform: (value) => {
            if (!value) return null;
            let result = []
            for (let v of value) {
                result.push(objectMapper(v, customerItemMapper));
            }
            return result;
        }
    },
    "total": "total",
    "sortField": "sortField",
    "sortOrder": "sortOrder",
    "totalHistoryAmount": "totalHistoryAmount",
    "totalReceivableAmount": "totalReceivableAmount",
    "totalThisPeriodAmount": "totalThisPeriodAmount",
    "totalThisPeriodSignedAmount": "totalThisPeriodSignedAmount",
    "totalUncollectedAmount": "totalUncollectedAmount",
    "pageIndex": "pageIndex",
    "pageSize": "pageSize"
}

let detailsMap={
    items: {
        key: "items",
        transform: (value) => {
            if (!value) return null;
            let result = []
            for (let v of value) {
                result.push(objectMapper(v, customerDetailsItemMapper));
            }
            return result;
        }
    }
};

class Estate {
    constructor() { }

   
    /**
     * @param  {} src
     */
    static list(src) {
        try {
            return objectMapper(src, listMap);
        } catch (error) {
            Logger.error(`customerReceivables Mapper==>list:${error},src:${JSON.stringify(src)}`);
            return null;
        }
    }
}

export default Estate;
