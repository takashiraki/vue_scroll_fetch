import Home from "@/pages/home/index.vue";
import { createMemoryHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        component: Home,
    },
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
