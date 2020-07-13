import Koa from 'koa'
const app = new Koa()
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs').promises

const router = new Router()

const baseDir = "resumes/"

router.get("/resume/:slug", async (ctx, next) => {
  const slug = ctx.params.slug
  const filename = `${baseDir}${slug}.json`
  let data = await fs.readFile(filename)
  let resume = JSON.parse(data)
  ctx.body = resume
})

router.post("/resume", async (ctx, next) => {
  let resume = ctx.request.body
  if(!("slug" in resume)){
    ctx.status = 400;
    ctx.body = "Must set a slug"
  }else{
    const filename = `${baseDir}${resume.slug}.json`
    delete resume['slug']
    await fs.writeFile(filename, JSON.stringify(resume))
    ctx.body = resume
  }
})


app
  .use(bodyParser())
  .use(router.routes())


app.listen()

export default {
  path: '/api',
  handler: app.callback()
}
