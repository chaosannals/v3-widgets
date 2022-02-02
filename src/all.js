import V3Button from './button.vue';
export * from './button.vue';

export default {
    install(app) {
        app.component('v3-button', V3Button);
    },
};