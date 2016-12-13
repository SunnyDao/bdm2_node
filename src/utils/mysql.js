/**
 * desc:工具 -> mysql数据库的一些操作
 */

import db from "mysql" ;
import dbConf from "../../configs/db.json" ;

let env = process.env.STAGE_ENV ;

/**
 * desc:定义mysql操作的类
 */
class MySQL {
    constructor() {

    }
    /**
     * desc:连接到MySQL
     */
    static connect() {
        let connection = db.createConnection({
            host : dbConf[env].host ,
            port : dbConf[env].port ,
            user : dbConf[env].user ,
            password : dbConf[env].password ,
            database : dbConf[env].db
        }) ;
        connection.connect() ; 
        return connection ;
    }

    /**
     * desc:执行一个查询语句并执行回调，任务有：
     * 1. 连接MySQL
     * 2. 执行回调
     * 3. 关闭连接
     * @param  {} sql
     * @param  {} callback
     */
    static query(sql,callback) {
        let connection = this.connect() ;
        connection.query(sql, function(err, rows, fields) {
            callback(err, rows, fields) ;        
        });
        connection.end() ;
    }
}

export default MySQL ;
