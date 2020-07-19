import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
	ctx.body = 'hello world';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Koa server listening on port ${PORT}`);
});