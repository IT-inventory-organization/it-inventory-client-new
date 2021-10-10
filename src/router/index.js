import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import PLB from "@/views/PLB";
import PPFTZ from "@/views/PPFTZ";
import CreateDocument from "@/views/plb_ppftz/CreateDocument";
import EditDocument from "@/views/plb_ppftz/EditDocument";
import TableInventory from "@/views/plb_ppftz/TableInventory";
import Login from "@/views/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "Dashboard" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/plb",
    component: PLB,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "PLB",
        component: TableInventory,
      },
      {
        path: "add",
        name: "PLBCreateDocument",
        component: CreateDocument,
      },
      {
        path: "edit",
        name: "PLBEditDocument",
        component: EditDocument,
      },
    ],
  },
  {
    path: "/ppftz",
    component: PPFTZ,
    children: [
      {
        path: "",
        name: "PPFTZ",
        component: TableInventory,
      },
      {
        path: "add",
        name: "PPFTZCreateDocument",
        component: CreateDocument,
      },
      {
        path: "edit",
        name: "PPFTZEditDocument",
        component: EditDocument,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
