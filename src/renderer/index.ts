import ui from "@nuxt/ui/vue-plugin";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./app.css";
import App from "./App.vue";
import TestPage from "./TestPage.vue";

const app = createApp(App);

const router = createRouter({
    routes: [{ path: "/", component: TestPage }],
    history: createWebHistory(),
});

app.use(router);
app.use(ui);

app.mount("#vue-app");
