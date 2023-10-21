import cors from '@koa/cors';
import Router from '@koa/router';
import Koa from 'koa';

const app = new Koa();
const router = new Router();

app.use(cors({ origin: '*' }));

router.get('/', async (ctx) => {
  ctx.body = 'Hello World!';
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT ?? 3000;
console.log(`Server is running on http://127.0.0.1:${port}/`);
app.listen(port);
