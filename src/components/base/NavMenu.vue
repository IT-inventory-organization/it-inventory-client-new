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
        <Icon v-bind:icon="item.icon" /> {{ item.name }}
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
        name: "Dashboard",
        path: "/dashboard",
        icon: "bx:bxs-dashboard",
      },
      {
        name: "PLB",
        path: "/plb",
        icon: "akar-icons:file",
      },
      {
        name: "PPFTZ",
        path: "/ppftz",
        icon: "akar-icons:file",
      },
      {
        name: "Barang",
        path: "/barang",
        icon: "akar-icons:shipping-box-01",
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
