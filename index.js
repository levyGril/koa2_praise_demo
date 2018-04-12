/**
 * Created by levy on 2018/4/7.
 */

const Koa = require('koa');

const app = new Koa();
const path = require('path');
const staticCache = require('koa-static-cache');

app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
    maxAge: 365 * 24 * 60 * 60
}))

const views=require('koa-views');
var render = require('koa-views-render');

//配置模板解析器
app.use(views(__dirname+'/views',{
    map:{
        html:'swig'
    }
}));

const bodyParser = require('koa-bodyparser'); // 引用一个中间件来处理提交的数据
app.use(bodyParser());

const router = require('./router'); //路由

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function () {
    console.log("koa server is running");
});
