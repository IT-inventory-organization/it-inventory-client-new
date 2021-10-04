<template>
  <v-app>
    <core-app-bar />

    <v-main>
      <v-container class="it-inventory-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    CoreAppBar: () => import("@/components/base/AppBar"),
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
  created() {
    if (localStorage.getItem("token")) {
      this.$router.push("/login");
    }
  },
};
</script>
<style lang="scss">
@import "./assets/styles/index.scss";
@import "./assets/styles/card.scss";
</style>
