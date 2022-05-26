import { StatusCodes } from 'http-status-codes';
import { Router } from 'itty-router';
import { serializeError } from 'serialize-error';

/**
 * Create a router and assign routes to it.
 */
const router = Router();
router.get('*', () => new Response('Hello, World'));

/**
 * Create a catch-all error handler that logs to the console and returns a 500 response to the client.
 * @param e
 */
const errorHandler = (e: any) => {
  console.log('request failed: ', serializeError(e));
  return new Response('Internal Server Error.', { status: StatusCodes.INTERNAL_SERVER_ERROR });
};

export default {
  async fetch(request: Request): Promise<Response> {
    return router.handle(request).catch(errorHandler);
  },
};
