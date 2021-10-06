<template>
  <v-layout justify-center align-center fill-height>
    <v-card class="mx-auto my-12" max-width="374">
      login
    </v-card>
  </v-layout>
</template>

<script>
import { FieldRequired } from "@/mixins/ValidationRules";
export default {
  name: "Login",
  mixins: [FieldRequired],
};
</script>

<style lang="scss" scoped></style>
