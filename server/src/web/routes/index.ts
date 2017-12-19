import Router from 'koa-router';
let router = new Router();
import { wrapper } from '../../../util/swagger';

wrapper(router,'/api/mock/api.html', '/api/mock/api.json');
router.swagger({ title: 'Plat Mock Server API', description: 'api文档', version: '1.0.0' });

var routes = require('require-directory')(module);
for (let fileName in routes) {
    let Router = routes[fileName];
    for(let className in Router){
        let Method = Router[className];
        router.map(Method);
    }
}
export default router;
