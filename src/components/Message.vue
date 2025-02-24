<script setup>
    import { computed } from "vue"

    const props = defineProps({
        userName: String,
        timeStamp: Number,
        content: String,
    })

    const localTime = computed(() => {
        let time = new Date(props.timeStamp * 1000)

        let year = time.getFullYear()
        let month = (time.getMonth() + 1).toString().padStart(2, "0")
        let date = time.getDate().toString().padStart(2, "0")
        let hours = time.getHours().toString().padStart(2, "0")
        let minutes = time.getMinutes().toString().padStart(2, "0")

        return `${year}年${month}月${date}日 ${hours}:${minutes}`
    })
</script>

<template>
    <div class="message">
        <div class="user-name">{{ userName }}</div>
        {{ content }}
        <div class="time">{{ localTime }}</div>
    </div>
</template>

<style>
    .message {
        position: relative;
        background-color: #e0f7fa;
        padding: 10px;
        padding-bottom: 40px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        overflow-wrap: break-word;
    }
    .message .user-name {
        font-size: 20px;
        color: #2e7d32;
    }
    .message .time {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
</style>
