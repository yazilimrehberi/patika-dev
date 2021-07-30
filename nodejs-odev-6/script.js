const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    const URL = ctx.URL.pathname;
    ctx.type = 'html';
    ctx.status = 200;

    if (URL === "/" || URL === "/index") {
        ctx.body = '<h1>INDEX SAYFASINA HOSGELDINIZ</h1>';
    } else if (URL === "/hakkimda") {
        ctx.body = '<h1>HAKKIMDA SAYFASINA HOSGELDINIZ</h1>';
    } else if (URL === "/iletisim") {
        ctx.body = '<h1>ILETISIM SAYFASINA HOSGELDINIZ</h1>';
    } else {
        ctx.type = 'html';
        ctx.status = 404;
        ctx.body = '<h1>SAYFA BULUNAMADI</h1>';
    }
});

app.listen(3000);