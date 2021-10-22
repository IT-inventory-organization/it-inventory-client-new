<template>
  <div>
    <v-row no-gutters>
      <v-progress-linear
        v-if="loadingGetOne"
        indeterminate
        color="blue"
      ></v-progress-linear>
    </v-row>
    <div class="preview-container">
      <preview-dokumen />
    </div>
  </div>
</template>

<script>
export default {
  name: "DataPreview",
  components: {
    PreviewDokumen: () => import("@/components/plb_ppftz/PreviewDokumen"),
  },
  computed: {
    loadingGetOne() {
      return this.$store.state.report.loading.getOne;
    },
  },
};
</script>

<style lang="scss" scoped>
.preview-container {
  width: max-content;
  margin: 3rem auto;
  border: 1px solid #d8dcf2;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}
</style>
