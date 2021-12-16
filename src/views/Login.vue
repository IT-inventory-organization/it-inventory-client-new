<template>
  <v-layout justify-center align-center fill-height class="layout-login">
    <v-card class="login-wrapper mx-auto my-12">
      <div class="header-login">
        <img
          class="header-login__logo"
          src="@/assets/img/logo.png"
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
              <v-btn
                type="submit"
                elevation="0"
                :loading="isLoading"
                x-large
                class="btn btn-login"
              >
                Login
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <img
                class="header-login__logo kuadran-logo"
                src="@/assets/img/kuadran.png"
                alt="logo kuadran"
              />
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
    isLoading() {
      return this.$store.state.user.isLoading;
    },
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
    console.log(this.isLoading);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
