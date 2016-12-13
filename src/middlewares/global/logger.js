/**
 * desc :  用于记录post和get请求
 * @param  {object} req
 * @param  {object} res
 * @param  {default} next
 */

import logger from '../../utils/logger';
export default function (req, res, next) {
    req.app.locals.log = logger;
    logger.info(`=======request_url=======:${req.url} `);
    // logger.info(`request_headers:${JSON.stringify(req.headers)}`);
    switch (req.method) {
        case "POST":
            logger.info(`request_params:${JSON.stringify(req.body)}`);
            break;
        case "GET":
            logger.info(`request_params:${JSON.stringify(req.query)}`);
            break;
        default:
            logger.warn(`invalid request!`);
            next(new Error('invalid request!'));
            break;
    };
    next();
};
