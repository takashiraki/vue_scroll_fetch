import Home from "@/pages/home/index.vue";
import Friends from "@/pages/friends/index.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/friends",
        component: Friends,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
