<template>
    <button :class="rootClasses">
        <slot></slot>
    </button>
</template>

<script setup>
import { computed } from "vue";

const $props = defineProps({
    size: {
        type: String,
        required: false,
        default: 'small',
    },
    feel: {
        type: String,
        required: false,
        default: 'normal',
    },
});

const rootClasses = computed(() => {
    const result = ['v3-button'];
    result.push($props.feel);
    result.push($props.size);
    return result;
});
</script>

<style lang="scss" scoped>
.v3-button {

    &.small {
        font-size: 12px;
        border-radius: 2px;
    }
    &.medium {
        font-size: 18px;
        border-radius: 3px;
    }
    &.large {
        font-size: 22px;
        border-radius: 5px;
    }

    &.normal {
        color: #fff;
        border: 1px solid #39d;
        background: #39dd;
    }
    &.successful {
        color: #fff;
        border: 1px solid #6d6;
        background: #6d6d;
    }

    &.danger {
        color: #fff;
        border: 1px solid #f33;
        background: #f33d;
    }

    &:active {
        opacity: 0.8;
    }
}
</style>