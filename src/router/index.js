import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import MasterData from "@/views/MasterData";
import PLB from "@/views/PLB/PLB";
import TablePLB from "@/views/PLB/TablePLB";
import FormDocument from "@/views/PLB/FormDocument";

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
    path: "/master-data",
    name: "MasterData",
    component: MasterData,
  },
  {
    path: "/plb",
    component: PLB,
    children: [
      {
        path: "",
        name: "PLB",
        component: TablePLB,
      },
      {
        path: "add",
        name: "PLBFormDocument",
        component: FormDocument,
      },
    ],
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
});

export default router;
