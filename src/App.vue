<template>
  <div>
    <v-app v-if="token">
      <core-app-bar></core-app-bar>

      <v-main>
        <v-container fluid class="it-inventory-container">
          <router-view />
        </v-container>
      </v-main>
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
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    const token = localStorage.getItem("token_it_inventory");
    if (!token) {
      // eslint-disable-next-line no-unused-vars
      this.$router.push("/login").catch((err) => {});
    }

    if (token) {
      this.$store.commit("SET_TOKEN", token);
    }
  },
};
</script>
<style lang="scss">
@import "./assets/styles/index.scss";
@import "./assets/styles/card.scss";
</style>
