import RespBody from '../model/HttpRespBody';
import { RespStatusCode } from '../../common/define';
import { BizException } from '../../common/exception/bizExceptions';

export default function () {
    return async function (ctx, next) {
        try {
            await next();
        } catch (e) {
            if (!(e instanceof BizException)) {
                //未分类异常
                console.log('Process API error...');
                console.log(e);
                ctx.response.status = RespStatusCode.SYSTEM_ERROR;
            } else {
                //业务异常
                ctx.response.status = RespStatusCode.SUCCESS;
            }
            ctx.response.type = 'application/json';
            ctx.response.body = new RespBody(e.code || 501, e.message || '', null)
        }
    }
}