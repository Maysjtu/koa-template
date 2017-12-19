import * as Redis from 'ioredis';
import config from '../../config'
let redisOpt = {
    port: config.datasource.redis.port || 6379,          // Redis port
    host: config.datasource.redis.host || '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    db: config.datasource.redis.db || 0,
    password: config.datasource.redis.password
};
console.info("APPLY REDIS OPT:", redisOpt);

const redisClient = new Redis(redisOpt);

export default redisClient;
