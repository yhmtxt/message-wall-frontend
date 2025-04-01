<script setup>
    import { ref } from "vue"

    import axiosIns from "@/axios"
    import FormArea from "@/components/FormArea.vue"
    import MultiLineInputBox from "@/components/MultiLineInputBox.vue"
    import Button from "@/components/Button.vue"

    const content = ref("")

    async function leaveMessage() {
        try {
            await axiosIns.post("/messages", { content: content.value })
            content.value = ""
            alert("发送成功")
        } catch (error) {
            alert("发送失败，请稍后再试")
        }
    }
</script>

<template>
    <FormArea>
        <div class="item">
            <MultiLineInputBox v-model="content" style="height: 200px" />
        </div>
        <div class="item">
            <Button value="发表留言" @click="leaveMessage()" />
        </div>
    </FormArea>
</template>
