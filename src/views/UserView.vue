<script setup>
    import { ref } from "vue"
    import { useRoute } from "vue-router"

    import axiosIns from "@/axios"
    import Message from "@/components/Message.vue"

    const route = useRoute()

    const userInfo = ref({})

    async function getUserInfo() {
        try {
            let response = await axiosIns.get(`/users/${route.params.id}`)
            userInfo.value = response.data
        } catch (error) {
            alert("")
        }
    }

    getUserInfo()
</script>

<template>
    <div id="user-info">
        <h1>{{ userInfo.name }}</h1>
        <p>ID: {{ userInfo.id }}</p>
        <Message
            v-for="message in userInfo.messages"
            :time-stamp="message.time_stamp"
            :content="message.content"
            style="min-height: 100px"
        />
    </div>
</template>

<style>
    #user-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        width: 90%;
        padding: 30px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        margin: 0 auto;
    }
    #user-info h1 {
        margin: 0px;
    }
</style>
