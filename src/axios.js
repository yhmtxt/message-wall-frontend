import axios from "axios"
import { createPinia } from "pinia"

import useUserStore from "./stores/user"

const pinia = createPinia()
const user = useUserStore(pinia)

const axiosIns = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

axiosIns.interceptors.request.use(config => {
    let token = user.token
    if (token !== null) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
})

export default axiosIns
