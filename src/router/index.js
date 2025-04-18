import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import SignInView from "@/views/SignInView.vue"
import SignUpView from "@/views/SignUpView.vue"
import UserView from "@/views/UserView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/sign-in", name: "signIn", component: SignInView },
        { path: "/sign-up", name: "signUp", component: SignUpView },
        { path: "/user/:id", name: "user", component: UserView },
        { path: "/:path(.*)*", name: "notFound", component: NotFoundView },
    ],
})

export default router
