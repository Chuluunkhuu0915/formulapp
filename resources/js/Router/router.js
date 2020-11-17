import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Login from "../components/Login/Login.vue";
import Singup from "../components/Login/Singup.vue";
import Forum from "../components/Forum/Forum.vue";
import Logout from "../components/Login/Logout.vue";
import Read from "../components/Forum/Read.vue";
import CreateQuestion from "../components/Forum/CreateQuestion.vue";

const routes = [
    { path: "/login", component: Login },
    { path: "/singup", component: Singup },
    { path: "/forum", component: Forum, name: "forum" },
    { path: "/logout", component: Logout },
    { path: "/question/:slug", component: Read, name: "read" },
    { path: "/questionCreate", component: CreateQuestion }
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: "history"
});

export default router;
