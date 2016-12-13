/**
 * author:yuxiaochen@lifang.com
 * desc:基于redis的封装的缓存类
 */

import Redis from "ioredis";
import config from './config'
import rLogger from './logger';

class Cache {
    /**
     * 构造函数
     */
    constructor() {
        /**
         * 定义_redis实例
        */
        this._redis = this._redis ? this._redis : new Redis.Cluster(config.getRedisConf());

        this._promise = null;

        /**
         * 监听error 事件
        */
        this._redis.on('error', (error) => {
            rLogger.error(`redis onError:${JSON.stringify(error)}`);
        });
    }


    /**
     * 获取key 值
     * @param  {} key
     */
    keys(key) {
        return this._redis.keys(key);
    }


    /**
     * @desc 判断当前key 是否存在于redis中
     * @param  {} key
     */
    exists(key) {
        return this._redis.exists(key);
    }

    /**
     * @desc 获取指定key 对应的value
     * @param  {} key
     */
    get(key) {
        return this._redis.get(key);
    }

    /**
     * @desc 设置
     * @param  {} key
     * @param  {} value
     */
    async set(key, value, interval) {
        if (interval) {
            await this._redis.set(key, value);
            return this._redis.expire(key, interval);
        }
        else {
            return this._redis.set(key, value);
        }
    }

    /**
     * @param  {} key
     * @param  {过期时间} interval
     */
    expire(key, interval) {
        return this._redis.expire(key, interval);
    }


    /**
     * @desc 删除key
     * @param  {} key
     */
    del(key) {
        return this._redis.del(key);
    }
    /**
     * @param  {} key
     * @param  {} filed
     * @param  {} value
     */
    hset(key, filed, value) {
        return this._redis.hset(key, filed, value);
    }
    /**
     * @param  {} key
     * @param  {} filed
     */
    hget(key, filed) {
        return this._redis.hget(key, filed);
    }
}



export default new Cache();