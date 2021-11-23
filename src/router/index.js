import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import MasterData from "@/views/MasterData";
import PLB from "@/views/PLB/PLB";
import TablePLB from "@/views/PLB/TablePLB";
import FormDocument from "@/views/PLB/FormDocument";
import Login from "@/views/Login";

Vue.use(VueRouter);

/**
 * requiresAuth: true, berfungsi untuk hanya user yang sudah login yang bisa akses
 * reportId: true, berfungsi untuk hanya user yang sudah membuat report yang boleh mengakses halaman selanjutnya
 */

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
        component: TablePLB,
      },
      {
        path: "add",
        name: "PLBFormDocument",
        component: FormDocument,
        meta: {
          reportId: true,
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token_it_inventory");
  const reportId = localStorage.getItem("reportId");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }

    if (to.matched.some((record) => record.meta.reportId)) {
      if (!reportId) {
        next({
          path: "/plb",
          query: { redirect: to.fullPath },
        });
      } else {
        next();
      }
    }
  } else {
    next();
  }
});

export default router;
