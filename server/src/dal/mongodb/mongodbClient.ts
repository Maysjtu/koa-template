import mongoose from 'mongoose';
import config from '../../config';

let connectUrl = config.datasource.mongodb.url;
mongoose.connect( connectUrl, {
    useMongoClient: true,
    autoReconnect:true
});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
    console.log('连接mongodb数据库成功')
});
db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect(config.mongodb.url, {
        autoReconnect:true
    });
});
module.exports = db;

