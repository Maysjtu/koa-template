export = {
    agent: {
        maxLiveTime: 10 * 60 * 1000,
        maxAttemptsOfCaptchaVerify: 5,
        maxAttemptsOfFetchStreamUrl: 3
    },
    facade: {
        http: {
            port: 8083
        }
    },
    datasource: {
        redis: {
            host:"localredis",
            port:6379,
            db: 1,
            password: null
        },
        mongodb: {
            url: 'mongodb://localhost:27017/test'
        },
        mysql: {
            database: 'test', // 使用哪个数据库
            username: 'root', // 用户名
            password: '', // 口令
            host: '127.0.0.1', // 主机名
            port: 3306 // 端口号，MySQL默认3306
        },
    }
}