/**
 * author:yuxiaochen@lifang.com
 * desc:depends on require-diretory package to recursively iterates over specified directory, 
 * require()'ing each file, and returning a nested hash structure containing those modules.
 */

import requireDirectory from 'require-directory';
import path from 'path';
import fs from 'fs';
class Loader {

    /**
     * @desc 获取指定目录下的modules 集合
     * @param  {} p:相对于loader的路径
     */
    static getModules(p) {
        let newPath = path.join(__dirname, '..', p);
        if (fs.existsSync(newPath)) {
            let files = fs.readdirSync(newPath);
            if (files && files.length)
                return requireDirectory(module, newPath);
        }
        return {};
    }
}

export default Loader;