<template>
  <v-card>
    <v-card-title>
      <span class="text-h6">Created New</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        ss
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click.prevent="handleDialog">
        Close
      </v-btn>
      <v-btn color="blue darken-1" text @click.prevent="handleDialog">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CreateNewModal",
  methods: {
    handleDialog() {
      this.$emit("handleModal");
    },
  },
};
</script>

<style lang="scss" scoped></style>
