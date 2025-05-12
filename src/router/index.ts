import { createRouter, createWebHistory } from "vue-router";

import Quiz from "../views/Quiz.vue";
import Result from "../views/Result.vue";

const routes = [
  { path: "/", name: "Quiz", component: Quiz },
  { path: "/result/:id", name: "Result", component: Result, props: true },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
