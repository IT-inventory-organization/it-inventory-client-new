<template>
  <v-layout justify-center align-center fill-height class="layout-login">
    <v-card class="login-wrapper mx-auto my-12">
      <div class="header-login">
        <img
          class="header-login__logo"
          src="@/assets/img/logo_kuadran.png"
          alt="logo kuadran"
        />
        <div class="header-login__title">IT Inventory</div>
      </div>
      <div class="content-login">
        <v-form ref="formLogin" @submit.prevent="handleSubmit">
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field
                label="Email/NPWP/Username"
                outlined
                prepend-inner-icon="mdi-account-outline"
                class="input_login"
                v-model="email"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Email/NPWP/Username');
                  },
                ]"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                type="password"
                outlined
                class="input_login"
                prepend-inner-icon="mdi-lock-outline"
                v-model="password"
                :rules="[
                  (value) => {
                    return genericRequiredRule(value, 'Password');
                  },
                ]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" style="text-align:center;">
              <button type="submit" class="btn btn-login">Login</button>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "Login",
  mixins: [FieldRequired],
  computed: {
    email: {
      get() {
        return this.$store.state.user.user.email;
      },
      set(value) {
        this.$store.commit("SET_USER", {
          key: "email",
          value,
        });
      },
    },
    password: {
      get() {
        return this.$store.state.user.user.password;
      },
      set(value) {
        this.$store.commit("SET_USER", {
          key: "password",
          value,
        });
      },
    },
  },
  methods: {
    handleSubmit() {
      if (this.$refs.formLogin.validate()) {
        this.$store.dispatch("loginActionUser");
      }
    },
  },
  created() {
    if (localStorage.getItem("token_it_inventory")) {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
