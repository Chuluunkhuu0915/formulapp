/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");

window.Vue = require("vue");

import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify);

import VueSimplemde from "vue-simplemde";
Vue.component("vue-simplemde", VueSimplemde);

import md from "marked";
window.md = md;

import router from "./Router/router.js";
import User from "./Helpers/User";

window.User = User;

window.EventBus = new Vue();
// User.logOut();
// console.log(User.loggedIn());
// console.log(User.id());
// console.log(User.name());

Vue.component("AppHome", require("./components/AppHome.vue").default);

const app = new Vue({
    el: "#app",
    router
});
