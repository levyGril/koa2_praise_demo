/**
 * Created by levy on 2018/4/8.
 */

const praiseModel = require('../model/praiseDAO');

module.exports = {
    async praiseCount (ctx) {
        // 接收到数据后，保存到数据库
        console.log(ctx.query);
        ctx.body = {
            num: ctx.query.num
        };
        await praiseModel.insertData(ctx.query.num);
    }
};


