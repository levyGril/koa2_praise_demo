/**
 * Created by levy on 2018/4/8.
 */
const Router = require('koa-router');
const router = new Router();
// const user = require('./controller/user');
const praiseController = require('./controller/praiseController');

//点赞页面渲染
router.get('/', async (ctx, next) =>{
    await ctx.render('index',{
        title: "praise thumb"
    });
});

// 点赞数记录
router.get('/praise',praiseController.praiseCount);

// router.post('/user/login', user.login);
// router.get('/user/profile', user.profile);

module.exports = router;
