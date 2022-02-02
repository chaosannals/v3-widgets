import {
    createApp
} from 'vue'
import App from './app.vue'
import router from './router.js';
import components from '../src/all.js';

const app = createApp(App);
app.use(components);
app.use(router);
app.mount('#app');