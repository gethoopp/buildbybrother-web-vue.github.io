import { createRouter, createWebHistory } from "vue-router";

import HomeLanding from "@/views/home/home_landings.vue";
import ProjectSite from "@/views/project-site/project_site.vue";
import PrivacyPolicy from "@/views/privacy-policy/privacy_policy.vue";

const routes = [
  { path: "/", component: HomeLanding },
  { path: "/project", component: ProjectSite },
  { path: "/privacy-policy", component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
