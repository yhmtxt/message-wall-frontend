import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { jwtDecode } from "jwt-decode"

const useUserStore = defineStore("user", () => {
    const token = ref(null)

    const info = computed(() => {
        try {
            let playload = jwtDecode(token.value)
            return {
                id: playload.sub || null,
                name: playload.name || null,
                exp: playload.exp || null,
            }
        } catch (error) {
            return null
        }
    })

    function $reset() {
        this.token = null
    }
    function loadToken() {
        let token = localStorage.getItem("token")
        if (token !== null) {
            this.token = token
        }
    }
    function setToken(token) {
        this.token = token
        localStorage.setItem("token", token)
    }
    function clearToken() {
        this.$reset()
        localStorage.removeItem("token")
    }
    function checkToken() {
        return this.info.exp * 1000 > new Date().getTime()
    }

    return { token, info, $reset, loadToken, setToken, clearToken, checkToken }
})

export default useUserStore
