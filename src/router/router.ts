import Home from "@/pages/home/index.vue";
import Friends from "@/pages/friends/index.vue";
import { createMemoryHistory, createRouter } from "vue-router";

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
    history: createMemoryHistory(),
    routes,
});
