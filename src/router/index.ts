import { createRouter, createWebHistory } from "vue-router";

import Quiz from "@views/Quiz.vue";
import Result from "@views/Result.vue";

import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/quiz", name: "Quiz", component: Quiz },

  { path: "/result/:id", name: "Result", component: Result, props: true },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
