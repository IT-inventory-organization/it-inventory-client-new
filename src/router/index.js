import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import PLB from "@/views/PLB";
import PPFTZ from "@/views/PPFTZ";
import Setup from "@/views/Setup";
import CreateDocument from "@/views/plb_ppftz/CreateDocument";
import TableInventory from "@/views/plb_ppftz/TableInventory";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dahsboard",
    exact: true,
    component: Dashboard,
  },
  {
    path: "/plb",
    component: PLB,
    children: [
      {
        path: "",
        name: "PLB",
        component: TableInventory,
      },
      {
        path: "add",
        name: "CreateDocument",
        component: CreateDocument,
      },
    ],
  },
  {
    path: "/ppftz",
    name: "PPFTZ",
    component: PPFTZ,
  },
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
  },
  {
    path: "/login",
    name: "login",
  },
  {
    path: "/register",
    name: "register",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // linkExactActiveClass: "navbar_menu_item_active",
});

export default router;
