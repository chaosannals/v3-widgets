import {
    createApp
} from 'vue'
import App from './app.vue'
import router from './router.js';
import widgets from '../src/all.js';

const app = createApp(App);
app.use(widgets);
app.use(router);
app.mount('#app');