import { ref } from "vue"
import { defineStore } from "pinia"

const useMaskStore = defineStore("mask", () => {
    const isDisplayed = ref(false)
    function show() {
        this.isDisplayed = true
    }
    function hide() {
        this.isDisplayed = false
    }
    return { isDisplayed, show, hide }
})

export default useMaskStore
