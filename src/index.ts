import { handleRequest } from './handler'
import { Router } from 'itty-router'
import { AppEnv } from './types/env'

const router = Router()

router.get('/', (request: Request, env: AppEnv) => {
  // now have access to the env (where CF bindings like durables, KV, etc now are)
  return handleRequest(request)
})

export default {
  fetch: router.handle, // yep, it's this easy.
}