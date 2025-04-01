<script setup>
    import { ref } from "vue"
    import { useRouter, useRoute } from "vue-router"

    import useUserStore from "@/stores/user"
    import axiosIns from "@/axios"
    import Message from "@/components/Message.vue"
    import Button from "@/components/Button.vue"

    const router = useRouter()
    const route = useRoute()

    const user = useUserStore()
    const userInfo = ref({})

    async function getUserInfo() {
        try {
            let response = await axiosIns.get(`/users/${route.params.id}`)
            userInfo.value = response.data
        } catch (error) {
            alert("获取用户失败")
        }
    }

    function signOut() {
        user.clearToken()
        alert("登出成功，即将跳转首页")
        router.push({ name: "home" })
    }

    getUserInfo()
</script>

<template>
    <div id="user-info">
        <h1>{{ userInfo.name }}</h1>
        <Button
            class="sign-out-button"
            value="登出"
            @click="signOut()"
            v-if="route.params.id === user.info.id"
        />
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
        position: relative;
        background-color: white;
        width: 90%;
        padding: 30px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        margin: 0 auto;
        box-sizing: border-box;
    }
    #user-info h1 {
        margin: 0px;
    }
    #user-info .sign-out-button {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 80px;
        margin: 30px;
    }
</style>
