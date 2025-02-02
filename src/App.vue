<script setup>
    import axios from "axios"
    import { ref, watch } from "vue"

    const client = axios.create({
        baseURL: "http://127.0.0.1:8000",
    })

    const messages = ref([])
    const page = ref(1)
    const haveNextPage = ref(false)

    async function loadMessages() {
        try {
            let result = await client.get("/get_messages", {
                params: { page: page.value },
            })
            if (page.value === 1) {
                messages.value = result.data
            } else {
                messages.value.push(...result.data)
            }
            haveNextPage.value = result.data.length == 20
        } catch (error) {
            alert("加载失败")
        }
    }

    watch(page, loadMessages, { immediate: true })

    const message = ref("")

    async function postMessage() {
        try {
            await client.post("/post_message", message.value)
            page.value = 1
            message.value = ""
            await loadMessages()
        } catch (error) {
            alert("发送失败")
        }
    }
</script>

<template>
    <h1 class="title">留言墙</h1>
    <div id="messages">
        <div class="message" v-for="message in messages">
            {{ message.content }}
        </div>
    </div>
    <div id="more" class="button" @click="page++" v-show="haveNextPage">更多</div>
    <div id="inputArea">
        <textarea v-model="message"></textarea>
        <div class="button" @click="postMessage">发表留言</div>
    </div>
</template>

<style scoped>
    .title {
        width: 100%;
        text-align: center;
    }
    #messages {
        display: grid;
        width: 95%;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: minmax(125px, auto);
        gap: 20px;
        margin: 20px auto;
    }
    .message {
        padding: 10px;
        border: 1px solid black;
        border-radius: 8px;
        overflow-wrap: break-word;
    }
    #more {
        background-color: lightgrey;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    #more:active {
        background-color: grey;
    }
    #inputArea {
        display: flex;
        background-color: lightgrey;
        width: 70%;
        padding: 30px 0px;
        border-radius: 8px;
        margin: 20px auto;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    #inputArea textarea {
        width: 90%;
        height: 300px;
        border: 1px solid grey;
        border-radius: 8px;
    }
    #inputArea .button {
        background-color: white;
        width: 90%;
        height: 50px;
        line-height: 50px;
        border: 1px solid grey;
        border-radius: 8px;
    }
</style>
