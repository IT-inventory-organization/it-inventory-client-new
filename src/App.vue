<template>
  <div>
    <v-app v-if="token">
      <core-app-bar></core-app-bar>

      <v-main>
        <v-container fluid class="it-inventory-container">
          <router-view />
        </v-container>
      </v-main>

      <footer-bar></footer-bar>
    </v-app>

    <v-app v-if="!token">
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    CoreAppBar: () => import("@/components/base/AppBar"),
    FooterBar: () => import("@/components/base/Footer"),
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    },
  },
  methods: {},
  created() {
    const token = localStorage.getItem("token_it_inventory");
    if (token) {
      this.$store.commit("SET_TOKEN", token);
    }
  },
};
</script>
<style lang="scss">
@import "./assets/styles/index.scss";
</style>
