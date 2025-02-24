import { defineStore } from "pinia"
import { ref } from "vue"

const useUserStore = defineStore("user", () => {
    const token = ref(null)
    return { token }
})

export default useUserStore
