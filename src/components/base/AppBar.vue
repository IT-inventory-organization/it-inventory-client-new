<template>
  <div>
    <header class="header_app">
      <img
        class="header_app_img"
        src="../../assets/img/logo_kuadran.png"
        alt="logo_kuadran"
      />
      <div class="header_app_title">IT Inventory</div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div class="header_app_menu_user" v-bind="attrs" v-on="on">
            <v-avatar color="#312E68" size="50">
              <v-icon dark>
                mdi-account-circle-outline
              </v-icon>
            </v-avatar>
            <span>Administrator</span>
            <v-icon light>
              mdi-chevron-down
            </v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </header>
    <core-nav-menu />
  </div>
</template>
<script>
export default {
  name: "AppBar",
  components: {
    CoreNavMenu: () => import("./NavMenu"),
  },
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/header.scss";
</style>
