<template>
  <div class="nav_app" id="nav-app">
    <div
      v-for="(item, index) in menus"
      :key="index"
      class="nav_app_menu_wrapper"
    >
      <router-link
        class="nav_app_menu_item"
        v-bind:to="item.path"
        style="text-decoration:none"
        v-if="!item.isDropdown"
      >
        <Icon v-bind:icon="item.icon" class="nav_app_menu_item_icon" />
        {{ item.name }}
      </router-link>

      <v-menu open-on-hover offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div
            class="nav_app_menu_item"
            v-bind="attrs"
            v-on="on"
            v-if="item.isDropdown"
          >
            <Icon v-bind:icon="item.icon" class="nav_app_menu_item_icon" />
            {{ item.name }}
          </div>
        </template>
        <v-list>
          <v-list-item v-for="(child, index) in item.children" :key="index">
            <router-link
              :to="child.path"
              style="text-decoration:none; color: #1E1E1E"
            >
              <v-list-item-title>{{ child.name }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  name: "NavMenu",
  components: {
    Icon,
  },
  data: () => ({
    menus: [
      {
        name: "DASHBOARD",
        path: "/dashboard",
        icon: "icon-park-outline:dashboard",
        isDropdown: false,
      },
      {
        name: "MASTER DATA",
        path: "/master-data",
        icon: "feather:database",
        isDropdown: false,
      },
      {
        name: "PLB",
        path: "/plb",
        icon: "fluent:document-text-20-regular",
        isDropdown: false,
      },
      {
        name: "PO",
        path: "/po",
        icon: "fluent:document-text-20-regular",
        isDropdown: false,
      },
      {
        name: "INVENTORY",
        path: "/inventory",
        icon: "bx:bx-box",
        isDropdown: false,
      },
      {
        name: "LAPORAN",
        icon: "mdi:file-chart-outline",
        isDropdown: true,
        children: [
          {
            name: "Pemasukan Barang",
            path: "/laporan-pemasukan-barang",
          },
          {
            name: "Pengeluaran Barang",
            path: "/laporan-pengeluaran-barang",
          },
          {
            name: "Stock Inventory",
            path: "/laporan-stock-Iinventory",
          },
        ],
      },
    ],
  }),
  mounted() {
    // this.stickyNav();
  },
  methods: {
    stickyNav() {
      window.onscroll = function() {
        stickyNav();
      };

      const header = document.getElementById("nav-app");
      const sticky = header.offsetTop;

      function stickyNav() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/header.scss";
</style>
