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
      >
        <Icon v-bind:icon="item.icon" class="nav_app_menu_item_icon" />
        {{ item.name }}
      </router-link>
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
      },
      {
        name: "MASTER DATA",
        path: "/master-data",
        icon: "feather:database",
      },
      {
        name: "PLB",
        path: "/plb",
        icon: "fluent:document-text-20-regular",
      },
      {
        name: "PO",
        path: "/po",
        icon: "fluent:document-text-20-regular",
      },
      {
        name: "INVENTORY",
        path: "/inventory",
        icon: "bx:bx-box",
      },
      {
        name: "LAPORAN",
        path: "/laporan",
        icon: "mdi:file-chart-outline",
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
