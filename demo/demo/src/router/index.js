//import vue router
import { createRouter, createWebHistory } from "vue-router";

//define a routes
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    path: "/furniture",
    name: "furniture.index",
    component: () => import(/* webpackChunkName: "index" */ "../views/furniture/index.vue"),
  },
  {
    path: "/furniture/create",
    name: "furniture.create",
    component: () => import(/* webpackChunkName: "create" */ "../views/furniture/create.vue"),
  },
  {
    path: "/furniture/:id",
    name: "furniture.edit",
    component: () => import(/* webpackChunkName: "edit" */ "../views/furniture/edit.vue"),
  },
{
    path: "/kategoris",
    name: "kategoris.index",
    component: () => import(/* webpackChunkName: "index" */ "../views/kategoris/index.vue"),
  },
  {
    path: "/kategoris/create",
    name: "kategoris.create",
    component: () => import(/* webpackChunkName: "create" */ "../views/kategoris/create.vue"),
  },
  {
    path: "/kategoris/:id",
    name: "kategoris.edit",
    component: () => import(/* webpackChunkName: "edit" */ "../views/kategoris/edit.vue"),
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // <-- routes,
});

export default router;
