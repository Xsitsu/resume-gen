import Koa from 'koa'
const app = new Koa()
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const fs = require('fs').promises
const crypto = require("crypto")

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
    await fs.writeFile(filename, JSON.stringify(resume, null, 2))
    ctx.body = resume
  }
})

const getPasswordHash = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex")
}

router.post("/auth/login", async (ctx, next) => {
  let password = ctx.request.body.password
  console.log(password)

  if(password === process.env.PASSWORD){
    let hash = getPasswordHash(password)
    ctx.body = {msg:"SUCCESS", "token":hash}
  }else{
    ctx.status = 401
  }
})

router.get("/auth/user", async (ctx, next) => {
  let hash = getPasswordHash(process.env.PASSWORD)
  if(hash === ctx.cookies.get("token")){
    ctx.body = {
      user:"ADMIN"
    }
  }else{
    ctx.body = {}
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
