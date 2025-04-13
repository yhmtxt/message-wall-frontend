import { ref } from "vue"
import { defineStore } from "pinia"

const useToastsStore = defineStore("toasts", () => {
    const Level = Object.freeze({
        INFO: "info",
        WARNING: "warning",
        ERROR: "error",
    })

    const toastQueue = ref([])

    var lastId = 0

    function add(content, level = this.Level.INFO) {
        let id = ++lastId
        this.toastQueue.push({ id: id, content: content, level: level })
        setTimeout(() => {
            this.remove(id)
        }, 1000)
    }

    function remove(id) {
        this.toastQueue = this.toastQueue.filter(toast => toast.id !== id)
    }

    function clear() {
        this.toastQueue = []
    }

    return { Level, toastQueue, add, remove, clear }
})

export default useToastsStore
