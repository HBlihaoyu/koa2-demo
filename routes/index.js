const router = require('koa-router')()
const query = require("../mysql/query"); //引入异步查询方法
const { SHOW_ALL_DB } = require("../mysql/sql"); //部分引入sql库

router.get("/mysql", async (ctx, next) => {
  let query_res = await query(SHOW_ALL_DB,1);//异步方法调用
  ctx.body = query_res;
});


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
