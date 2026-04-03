import { createRouter, createWebHistory } from "vue-router";

import HomeLanding from "@/views/home/home_landings.vue";
import ProjectSite from "@/views/project-site/project_site.vue";

const routes = [
  { path: "/", component: HomeLanding },
  { path: "/project", component: ProjectSite },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
