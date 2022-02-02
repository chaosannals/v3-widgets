import {
    createRouter,
    createWebHistory
} from 'vue-router';

function loadRoutes() {
    const result = [{
        name: 'index',
        path: '/',
        component: () => import('./index.vue'),
    }];
    const lv1 =
        import.meta.glob('./examples/*.vue');
    const lv2 =
        import.meta.glob('./examples/*/*.vue');
    const all = Object.assign(lv1, lv2);
    for (let k in all) {
        if (k.endsWith('-page.vue')) {
            let t = k.substring(11, k.length - 9);
            let p = `${t}-html`;
            let n = k.substring(11, k.length - 4).replace('/', '-');
            result.push({
                name: n,
                path: `/${p}`,
                component: all[k],
            });
        }
    }
    return result;
}

export const routes = loadRoutes();

export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;