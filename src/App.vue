<script setup>
    import { RouterView, RouterLink } from "vue-router"

    import useUserStore from "./stores/user"
    import Button from "./components/Button.vue"

    const user = useUserStore()

    user.loadToken()
</script>

<template>
    <div id="navbar">
        <RouterLink :to="{ name: 'home' }">
            <h1>留言墙</h1>
        </RouterLink>
        <div class="button-area">
            <template v-if="!user.token">
                <RouterLink :to="{ name: 'signIn' }">
                    <Button value="登录" />
                </RouterLink>
                <RouterLink :to="{ name: 'signUp' }">
                    <Button value="注册" />
                </RouterLink>
            </template>
            <template v-else>
                <RouterLink :to="{ name: 'user', params: { id: user.info.id } }">
                    <Button :value="user.info.name" class="user-name" />
                </RouterLink>
                <RouterLink :to="{ name: 'leaveMessage' }">
                    <Button value="发表留言" />
                </RouterLink>
            </template>
        </div>
    </div>
    <div id="main">
        <RouterView />
    </div>
</template>

<style scoped>
    #navbar {
        position: fixed;
        top: 0px;
        background-color: #2196f3;
        color: white;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        box-shadow: 0px 0px 10px #003366;
        z-index: 100;
    }
    #navbar h1 {
        font-size: 30px;
        margin: 0;
    }
    #navbar .button-area {
        display: flex;
        gap: 15px;
        align-items: center;
        position: absolute;
        top: 0px;
        right: 15px;
        height: 100%;
    }
    #navbar .button-area .user-name {
        background-color: inherit;
        color: inherit;
        border: 2px solid white;
        box-sizing: border-box;
    }
    #navbar .button-area .user-name:hover {
        background-color: white;
        color: #2196f3;
    }
    #main {
        margin-top: 80px;
    }
</style>
