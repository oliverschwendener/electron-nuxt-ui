import ui from "@nuxt/ui/vue-plugin";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./app.css";
import App from "./App.vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";

const app = createApp(App);

const router = createRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/:pathMatch(.*)*", component: NotFound },
    ],
    history: createWebHistory(),
});

app.use(router);
app.use(ui);

app.mount("#vue-app");
