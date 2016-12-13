/**
 * desc:使用url包，具体使用方法参照：https://www.npmjs.com/package/url
 *      @url规则：http://user:pass@host.com:8080/p/a/t/h?query=string#hash
 */
import url from "url";

/**
 * desc:创建url解析器类
 */
class UrlParser {
    constructor(urlString) {
        this.urlObj = url.parse(urlString, true);
        this.pathSeparator = "/";
    }

    /**
     * desc:获取路径段值
     * @param  {} index:@index指哪一段，从0开始/p/a/t/h 中药取得p就是getSection(0)，要取得a就是getSection(1)
     */
    getSection(index) {
        let pathNameArray;
        let pathname = this.urlObj.pathname;
        if (pathname && pathname.length > 1) {
            pathname = pathname.substring(1, pathname.length);
            pathNameArray = pathname.split(this.pathSeparator);
        }
        return (pathNameArray.length > index) ? pathNameArray[index] : null;
    }
    /**
     * desc:  获取路由模块+控制器名称，格式：account/login
     */
    getMCCombined() {
        return this.getSection(0) + this.pathSeparator + this.getSection(1);
    }
}

export default UrlParser;
