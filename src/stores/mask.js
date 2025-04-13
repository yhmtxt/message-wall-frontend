import { ref } from "vue"
import { defineStore } from "pinia"

const useMaskStore = defineStore("mask", () => {
    const isDisplayed = ref(false)
    function show() {
        isDisplayed.value = true
    }
    function hide() {
        isDisplayed.value = false
    }
    return { isDisplayed, show, hide }
})

export default useMaskStore
