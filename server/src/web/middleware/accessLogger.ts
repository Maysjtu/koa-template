
const excludeUrl = '/api/ping';

export default function () {
    let reqId = 0;
    return async function (ctx, next) {
        //FIXME: 改成使用分布式id生成器或者uuid
        ctx.reqId = ++ reqId;
        let needLog = false;
        const url:string = ctx.request && ctx.request.url || "";
        if(url.startsWith('/api') && url != excludeUrl){
            needLog = true;
        }
        needLog && console.log(`Process API:${ctx.reqId} ${ctx.request.method} ${ctx.request.url} ${JSON.stringify(ctx.request.body || ctx.request.query)}`);
        await next();
        needLog && console.log(`Response API:${ctx.reqId} ${ctx.request.method} ${ctx.request.url} : ${JSON.stringify(ctx.body || ctx.text)}`);
    }
}