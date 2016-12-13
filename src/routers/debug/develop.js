/**
 * author:yuxiaochen@lifang.com
 * desc:为了支持本地调用指定环境接口地址
 */

import express from "express";
import Logger from '../../utils/logger';
import routerUtil from "../../utils/router";
import cheerio from "cheerio";
import apiConfs from "../../../configs/api.json";
import request from 'request-promise';
import sslReader from '../../utils/sslReader';

let router = express.Router();
let port = process.env.PORT;

router.get('/login', (req, res, next) => {
    let param = {
        req: req,
        matchJavascript: false,
        matchStylesheet: false
    }
    let templateData = routerUtil.getTemplateBasicData(param);
    Object.assign(templateData, { "title": "登录页面" });
    return res.render("debug/login", templateData);
})

router.post('/login', async (req, res, next) => {
    let reqData = req.body;
    let loginUrl = reqData.url;
    if (reqData.mock == "true") {
        global.apiDomain = `http://localhost:${port}/mock`;
    } else {

        global.apiDomain = `${loginUrl}/${apiConfs.prefix}`
    }
    let j = request.jar();
    //非生产环境需要带上自签发的ca证书
    let getOpts = {
        ca: sslReader,
        url: loginUrl,
        jar: j
    };
    let result = await request.get(getOpts);
    let cookies = j.getCookies(getOpts.url);
    let $ = cheerio.load(result);
    let username = reqData.username;
    let password = reqData.password;
    let execution = $('[name="execution"]').val();
    let _eventId = $('[name="_eventId"]').val();
    let cookieArray = [];
    if (cookies) {
        for (let c of cookies) {
            cookieArray.push(c.key + "=" + c.value);
        }
    }
    let options = {
        url: loginUrl + '/login',
        ca: sslReader,
        jar: j,
        headers: {
            cookie: cookieArray.join(';'),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        form:
        {
            execution: execution,
            _eventId: _eventId,
            username: username,
            password: password
        }
    };
    let login = await request.post(options)
    let loginedCookies = j.getCookies(options.url);
    let success = false;
    if (loginedCookies) {
        for (let c of loginedCookies) {
            let {key, value} = c;
            if (key == "CASTGC") success = true;
            res.clearCookie(key, { path: '/' });
            res.cookie(key, value, { "path": "/", "httpOnly": true, "hostOnly": true });
        }
    }

    return res.json({ status: success ? 1 : 0, message: success ? "" : "登录失败", data: null });
});


module.exports = router;