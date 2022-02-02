<template>
    <div class="button-demo-page">
        <div class="button-line" v-for="f in feels" :key="f">
            <v3-button v-for="s in sizes" :key="f + s" :feel="f" :size="s">{{ f }}</v3-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const feels = ref([
    'normal',
    'successful',
    'danger',
]);

const sizes = ref([
    'small',
    'medium',
    'large',
]);
</script>

<style lang="scss" scoped>
.button-demo-page {
    .button-line {
        text-align: left;
    }
}
</style>