import axios from "axios"

import pinia from "./stores"
import router from "./router"
import useUserStore from "./stores/user"

const user = useUserStore(pinia)

const axiosIns = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
})

axiosIns.interceptors.request.use(config => {
    let token = user.token
    if (token !== null) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
})

axiosIns.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.status === 401) {
            if (user.token === null) {
                alert("请先登录")
                router.push({ name: "signIn" })
            } else {
                alert("登录失效，请重新登录")
                user.clearToken()
                router.push({ name: "signIn" })
            }
        }
        throw error
    }
)

export default axiosIns
