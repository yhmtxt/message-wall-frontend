<script setup>
    import { watchEffect } from "vue"

    import useMaskStore from "@/stores/mask"

    const mask = useMaskStore()

    const { display } = defineProps({
        display: Boolean,
    })

    watchEffect(() => {
        if (display) {
            mask.show()
        } else {
            mask.hide()
        }
    })
</script>
<template>
    <div class="popup-area" v-if="display">
        <slot></slot>
    </div>
</template>
<style>
    .popup-area {
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 900;
    }
</style>
