import { Router, Express  } from "express"
import fg, { async } from 'fast-glob'

export default (app: Express): void => {
    const router = Router()
    app.use(router)
    fg.sync('**/src/routers/**_router.ts')
    .map(async file => (await import(`..//../${file}`)).default(router))
}