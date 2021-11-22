import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import MasterData from "@/views/MasterData";
import PLB from "@/views/PLB/PLB";
import TablePLB from "@/views/PLB/TablePLB";
import FormDocument from "@/views/PLB/FormDocument";
import LaporanPemasukanBarang from "@/views/Laporan/LaporanPemasukanBarang";
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
      requiresAuth: false,
    },
  },
  {
    path: "/master-data",
    name: "MasterData",
    component: MasterData,
    meta: {
<<<<<<< HEAD
      requiresAuth: false,
=======
      requiresAuth: true,
>>>>>>> a272af705dd602180f41856ee99caf753a59aa03
    },
  },
  {
    path: "/plb",
    component: PLB,
    meta: {
<<<<<<< HEAD
      requiresAuth: false,
=======
      requiresAuth: true,
>>>>>>> a272af705dd602180f41856ee99caf753a59aa03
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
          reportId: false,
        },
      },
    ],
  },
  {
    path: "/laporan-pemasukan-barang",
    name: "LaporanPemasukanBarang",
    component: LaporanPemasukanBarang,
    meta: {
      requiresAuth: false,
    },
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
<<<<<<< HEAD
  const token = localStorage.getItem("token-it-inventory");
  const reportId = localStorage.getItem("reportId");
=======
  const token = localStorage.getItem("token_it_inventory");
>>>>>>> a272af705dd602180f41856ee99caf753a59aa03
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
<<<<<<< HEAD

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
=======
>>>>>>> a272af705dd602180f41856ee99caf753a59aa03
  } else {
    next();
  }
});

export default router;
