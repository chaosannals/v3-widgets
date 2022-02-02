import fs from 'fs';
import path from 'path';
import express from 'express';
import {
    createServer as createViteServer
} from 'vite';

async function render(url, manifest) {
    const {
        app,
        router
    } = createApp()
    router.push(url)
    await router.isReady()
    const ctx = {}
    const html = await renderToString(app, ctx)
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest)
    return [html, preloadLinks]
}

async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: {
            middlewareMode: 'html',
        },
    });
    app.use('/aaa.html', async (req, res) => {
        console.log('aaaaa');
        const url = req.originalUrl;
        const ip = path.resolve('index.html');
        let template = fs.readFileSync(ip, "utf-8");
        template = await vite.transformIndexHtml(url, template);
        const render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
        const [appHtml, preloadLinks] = await render(url, {});
        const html = template
            .replace(`<!--preload-links-->`, preloadLinks)
            .replace(`<!--app-html-->`, appHtml);
        res.status(200).set({
            "Content-Type": "text/html"
        }).end(html);
    });
    app.use(vite.middlewares);
    return app;
}

const server = await createServer();
server.listen(30000, () => {
    console.log('http://localhost:30000');
});