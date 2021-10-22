<template>
  <v-card>
    <v-card-title>
      <v-row no-gutters justify="end">
        <span style="cursor: pointer" @click="handleCloseDialog"
          ><v-icon>mdi-close</v-icon></span
        >
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-row no-gutters class="mt-2" align="center" justify="space-between">
        <div class="title" style="color: black">Preview XML</div>
        <div></div>
      </v-row>
      <div class="preview-container">
        <v-progress-linear
          v-if="previewIsLoading"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
        <fieldset class="my-4">
          <p>{{ previewXML }}</p>
        </fieldset>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PreviewXML",
  computed: {
    previewXML() {
      return this.$store.state.report.previewXML;
    },
    previewIsLoading() {
      return this.$store.state.report.previewIsLoading;
    },
  },
  methods: {
    handleCloseDialog() {
      this.$emit("handleCloseDialog");
    },
  },
};
</script>

<style lang="scss" scoped></style>
