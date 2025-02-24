import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import SginInView from "@/views/SginInView.vue"
import SginUpView from "@/views/SginUpView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/signin", name: "signIn", component: SginInView },
        { path: "/signup", name: "signUp", component: SginUpView },
    ],
})

export default router
